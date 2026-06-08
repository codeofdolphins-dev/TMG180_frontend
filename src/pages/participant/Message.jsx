import React, { useState } from 'react'


// Mock Data for Active Chat Threads
const chatThreads = [
  {
    id: 1,
    name: "Sarah Jenkins",
    time: "10:45 AM",
    lastMessage: "I'll be there by 9 AM tom...",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    unread: false,
    online: true,
  },
  {
    id: 2,
    name: "David Miller",
    time: "Yesterday",
    lastMessage: "The paperwork has been proce...",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
    unread: false,
    online: false,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    time: "Tuesday",
    lastMessage: "Thanks for sending those detai...",
    avatar: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=300",
    unread: false,
    online: true,
  },
  {
    id: 4,
    name: "TMG180 Support",
    time: "Oct 12",
    lastMessage: "Your monthly statement is now...",
    avatar: "", // Initials will be used (TS)
    unread: false,
    online: false,
    isSupport: true
  }
];

// Mock Data for the Current Conversation Messages
const initialMessages = [
  {
    id: 1,
    sender: "Sarah",
    text: "Hello! I've just accepted your request for the morning walk tomorrow. I'm looking forward to it.",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    text: "That's great, Sarah! Should we stick to the usual route through the park?",
    time: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah",
    text: "Yes, that sounds perfect. The weather forecast says it'll be a sunny morning!",
    time: "10:45 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Sarah",
    text: "I'll be there by 9 AM tomorrow!",
    time: "10:45 AM",
    isMe: false,
  }
];


const Message = () => {
      const [activeMenu, setActiveMenu] = useState('Messages');
      const [activeChat, setActiveChat] = useState(1);
      const [messages, setMessages] = useState(initialMessages);
      const [newMessage, setNewMessage] = useState('');
    
      const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
    
        const msg = {
          id: messages.length + 1,
          sender: "Me",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: true
        };
    
        setMessages([...messages, msg]);
        setNewMessage('');
      };



    return (
        <div class="flex-1 flex overflow-hidden">
            {/* 2. CHAT THREADS LIST SIDE PANEL */}
            <div class="w-80 bg-white border-r border-slate-100 flex flex-col h-full shrink-0">
                <div class="p-6 space-y-4 shrink-0">
                    <div>
                        <h1 class="text-2xl font-black text-slate-900 tracking-tight">Messages</h1>
                        <p class="text-slate-400 text-xs mt-0.5 font-medium">Your conversations</p>
                    </div>

                    {/* Search Inside Messages */}
                    <div class="relative">
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                        <input
                            type="text"
                            placeholder="Search messages"
                            class="w-full bg-[#F8FAFC] border border-slate-200/60 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-[#1E5A54]"
                        />
                    </div>
                </div>

                {/* Conversation Items Loop */}
                <div class="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
                    {chatThreads.map((thread) => {
                        const isSelected = activeChat === thread.id;
                        return (
                            <button
                                key={thread.id}
                                onClick={() => setActiveChat(thread.id)}
                                class={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${isSelected ? 'bg-slate-50 border border-slate-100/70 shadow-2xs' : 'hover:bg-slate-50/60 border border-transparent'
                                    }`}
                            >
                                {/* Thread Avatar Image / Initials */}
                                <div class="relative shrink-0">
                                    {thread.isSupport ? (
                                        <div class="w-11 h-11 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm border border-purple-200">
                                            TS
                                        </div>
                                    ) : (
                                        <img src={thread.avatar} alt={thread.name} class="w-11 h-11 rounded-full object-cover border border-slate-100 shadow-2xs" />
                                    )}
                                    {thread.online && (
                                        <span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                                    )}
                                </div>

                                {/* Metadata Context */}
                                <div class="flex-1 min-w-0 space-y-0.5">
                                    <div class="flex items-center justify-between">
                                        <h4 class={`text-sm tracking-tight truncate ${isSelected ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>
                                            {thread.name}
                                        </h4>
                                        <span class="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">{thread.time}</span>
                                    </div>
                                    <p class="text-xs text-slate-400 truncate font-light leading-tight">
                                        {thread.lastMessage}
                                    </p>
                                </div>

                                {thread.unread && (
                                    <span class="w-2 h-2 bg-[#1E5A54] rounded-full self-center shrink-0"></span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 3. MAIN ACTIVE CHAT WINDOW CORE */}
            <div class="flex-1 flex flex-col bg-white h-full relative">

                {/* Active Contact Header Panel */}
                <div class="h-20 border-b border-slate-100 px-6 flex items-center justify-between shrink-0">
                    <div class="flex items-center space-x-3">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300" alt="Sarah" class="w-10 h-10 rounded-full object-cover border border-slate-100" />
                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 leading-none">Sarah Jenkins</h3>
                            <span class="text-[11px] text-emerald-500 font-medium flex items-center gap-1 mt-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2">
                        <button class="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl flex items-center space-x-1.5 transition cursor-pointer">
                            <i class="fa-regular fa-user text-slate-400"></i>
                            <span>View profile</span>
                        </button>
                        <button class="text-slate-400 hover:text-slate-600 p-2 rounded-xl transition">
                            <i class="fa-solid fa-ellipsis-vertical text-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Bubble Messages Stream Box Section */}
                <div class="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]/40">

                    {/* Event Timeline System Badge Overlay */}
                    <div class="flex justify-center">
                        <span class="bg-slate-100 text-[10px] font-bold text-slate-500 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                            Request Accepted • Oct 14, 2023
                        </span>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} class={`flex items-end gap-3 max-w-2xl ${msg.isMe ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>

                            {/* Small Profile Avatar for incoming tracks */}
                            {!msg.isMe && (
                                <div class="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-200">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Avatar" class="w-full h-full object-cover" />
                                </div>
                            )}

                            {/* Message Layout Content Core Box */}
                            <div class="space-y-1">
                                <div class={`p-4 rounded-2xl text-xs leading-relaxed ${msg.isMe
                                    ? 'bg-[#1E5A54] text-white rounded-br-none shadow-xs font-medium'
                                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-2xs font-normal'
                                    }`}>
                                    {msg.text}
                                </div>
                                {/* Timestamp Tag rendering handles */}
                                <span class={`block text-[9px] font-bold text-slate-400 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                                    {msg.time}
                                </span>
                            </div>

                        </div>
                    ))}

                    {/* Status Indicator Bubble Mock (Sarah is typing...) */}
                    <div class="flex items-center space-x-2 text-xs text-slate-400 font-light pl-10 animate-pulse">
                        <div class="flex space-x-1">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                        <span class="ml-1 text-[11px] font-medium text-slate-400/80">Sarah is typing...</span>
                    </div>
                </div>

                {/* Bottom Interactive Message Bar Panel */}
                <div class="p-4 border-t border-slate-100 bg-white shrink-0 flex flex-col items-center justify-center">
                    <form onSubmit={handleSendMessage} class="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center space-x-3 shadow-2xs focus-within:border-[#1E5A54] transition-colors">

                        {/* Attachment Clip Button */}
                        <button type="button" class="text-slate-400 hover:text-slate-600 transition p-1.5 cursor-pointer">
                            <i class="fa-solid fa-paperclip text-base"></i>
                        </button>

                        {/* Main Input Text Form Field */}
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Write a message..."
                            class="flex-1 text-xs text-slate-700 placeholder-slate-400 focus:outline-none py-1"
                        />

                        {/* Emoji Selector Trigger Icon */}
                        <button type="button" class="text-slate-400 hover:text-slate-600 transition p-1.5 cursor-pointer">
                            <i class="fa-regular fa-face-smile text-base"></i>
                        </button>

                        {/* Submit Action Send circular button */}
                        <button type="submit" class="bg-[#1E5A54] hover:bg-[#16433F] text-white w-9 h-9 rounded-xl flex items-center justify-center transition shadow-xs cursor-pointer">
                            <i class="fa-solid fa-paper-plane text-xs transform -rotate-12 translate-x-px"></i>
                        </button>
                    </form>

                    {/* End-To-End Security Badge footer note */}
                    <div class="text-[10px] text-slate-400/70 font-medium tracking-wide mt-2.5 flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-shield-halved text-[9px]"></i>
                        <span>Messages are end-to-end encrypted for your safety.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message