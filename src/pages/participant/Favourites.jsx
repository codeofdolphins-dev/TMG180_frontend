import React, { useState } from 'react';


const initialSavedWorkers = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Clinical Psychologist • Trauma Recovery",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    contactStatus: "RESPONDED",
    statusColor: "bg-sky-100 text-sky-700",
    tags: ["Mental Health", "English, Spanish", "AHPRA Cert"],
    quote: '"Dedicated to creating a safe harbor for emotional healing and..."',
    location: "Sydney, CBD (On-site & Remote)",
    experience: "12 Years Experience",
    availability: "Available: Mon, Wed, Fri",
    isOnline: true
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Disability Support • Mobility Specialist",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
    contactStatus: "NOT CONTACTED",
    statusColor: "bg-slate-100 text-slate-600",
    tags: ["Physical Therapy", "English", "First Aid Cert"],
    quote: '"Passionate about empowering individuals to live their most..."',
    location: "Parramatta, NSW (In-home)",
    experience: "8 Years Experience",
    availability: "Available: Weekends",
    isOnline: false
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Life Coach • Youth Advocacy",
    avatar: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=300",
    contactStatus: "CONTACTED",
    statusColor: "bg-purple-100 text-purple-700",
    tags: ["Youth Support", "Spanish, Italian", "NDIS Provider"],
    quote: '"Helping young adults navigate complex transitions with clarity..."',
    location: "Melbourne, VIC (Hybrid)",
    experience: "5 Years Experience",
    availability: "Available: Weekdays After 5pm",
    isOnline: true
  }
];

// WARNING: card design need to change little bit, the description text is too long and it should be max 2 lines with ellipsis, also the tags should be more compact and smaller font size, and the location and experience should be in a smaller font size as well. The status should be more prominent and the buttons should be more visually appealing with better colors and hover effects.

const Favourites = () => {
    const [activeMenu, setActiveMenu] = useState('Saved Workers');
      const [savedWorkers, setSavedWorkers] = useState(initialSavedWorkers);
    
      const handleRemove = (id) => {
        setSavedWorkers(savedWorkers.filter(worker => worker.id !== id));
      };



    return (
        <main class="flex-1 overflow-y-auto p-8 lg:p-12 space-y-6">

            {/* Title and Sort Container */}
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                    <h1 class="text-3xl font-black text-slate-900 tracking-tight">Favourites</h1>
                    <p class="text-slate-500 text-sm font-light">People you have choose.</p>
                </div>
                <div class="flex items-center space-x-3 text-sm self-end sm:self-auto">
                    <span class="text-slate-400 font-medium">Sort by</span>
                    <button class="bg-white border border-slate-200 px-4 py-2.5 rounded-xl font-bold text-slate-700 flex items-center space-x-3 hover:border-slate-300 shadow-xs transition">
                        <span>Recently Saved</span>
                        <i class="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
                    </button>
                </div>
            </div>

            {/* ACTIVE FILTER PILLS */}
            <div class="flex flex-wrap items-center gap-2.5">
                <span class="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-2 rounded-lg">Availability: Any</span>
                <span class="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-lg">Location: Sydney</span>
                <span class="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-lg">Support: Clinical</span>
                <button class="text-slate-500 hover:text-[#1E5A54] text-xs font-bold flex items-center space-x-1 px-2 py-2">
                    <i class="fa-solid fa-sliders text-[11px]"></i>
                    <span>All Filters</span>
                </button>
            </div>

            {/* BULK ACTIONS BAR */}
            <div class="bg-slate-100/50 rounded-2xl p-3 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                <span class="px-2">Bulk Actions:</span>
                <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl shadow-xs flex items-center space-x-2 hover:bg-slate-50 transition cursor-pointer">
                    <i class="fa-regular fa-envelope text-slate-400"></i>
                    <span>Contact selected</span>
                </button>
                <button class="bg-white border border-slate-200 text-rose-600 px-4 py-2 rounded-xl shadow-xs flex items-center space-x-2 hover:bg-rose-50/50 transition cursor-pointer">
                    <i class="fa-regular fa-trash-can text-rose-400"></i>
                    <span>Remove selected</span>
                </button>
            </div>

            {/* WORKERS CARD GRID */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
                {savedWorkers.map((worker) => (
                    <div key={worker.id} class="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">

                        {/* Active Status Badge & Heart Toggle button */}
                        <div class="absolute top-6 left-6 right-6 flex items-center justify-between">
                            <span class={`text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-md ${worker.statusColor}`}>
                                {worker.contactStatus}
                            </span>
                            <button class="w-9 h-9 bg-slate-50 text-rose-500 rounded-full flex items-center justify-center shadow-xs hover:scale-110 transition cursor-pointer">
                                <i class="fa-solid fa-heart text-base"></i>
                            </button>
                        </div>

                        {/* Core Context Profile Info */}
                        <div class="text-center pt-8 space-y-4">
                            {/* Portrait Setup Frame */}
                            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-slate-100 shadow-inner relative bg-slate-50">
                                <img src={worker.avatar} alt={worker.name} class="w-full h-full object-cover" />
                                {worker.isOnline && (
                                    <span class="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                                )}
                            </div>

                            {/* Identity Header Titles */}
                            <div class="space-y-1.5">
                                <h3 class="text-xl font-black text-slate-900 tracking-tight">{worker.name}</h3>
                                <p class="text-[11px] font-bold text-teal-600 tracking-wide uppercase">{worker.role}</p>
                            </div>

                            {/* Metadata Tag Arrays */}
                            <div class="flex justify-center flex-wrap gap-1.5 px-2">
                                {worker.tags.map((tag, idx) => (
                                    <span key={idx} class="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-medium px-2.5 py-1 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights Quote */}
                            <p class="text-slate-500 text-xs italic font-light leading-relaxed max-w-xs mx-auto px-4">
                                {worker.quote}
                            </p>
                        </div>

                        {/* Specifications List Column */}
                        <div class="mt-6 pt-4 border-t border-slate-50 space-y-4">
                            <div class="space-y-2.5 text-xs text-slate-500 px-2 font-medium">
                                <div class="flex items-center space-x-2.5">
                                    <i class="fa-solid fa-location-dot text-slate-400 w-4 text-center"></i>
                                    <span>{worker.location}</span>
                                </div>
                                <div class="flex items-center space-x-2.5">
                                    <i class="fa-solid fa-briefcase text-slate-400 w-4 text-center"></i>
                                    <span>{worker.experience}</span>
                                </div>
                                <div class="flex items-center space-x-2.5 text-teal-600">
                                    <i class="fa-regular fa-calendar-check w-4 text-center text-teal-500"></i>
                                    <span class="font-bold">{worker.availability}</span>
                                </div>
                            </div>

                            {/* Primary Grid Button Layouts */}
                            <div class="grid grid-cols-2 gap-3 pt-2">
                                <button class="bg-[#1E5A54] hover:bg-[#16433F] text-white text-xs font-bold py-3 rounded-xl shadow-xs transition cursor-pointer">
                                    View Profile
                                </button>
                                <button class="bg-sky-100 hover:bg-sky-200 text-sky-700 text-xs font-bold py-3 rounded-xl transition cursor-pointer">
                                    Contact
                                </button>
                            </div>

                            {/* Action Link to Remove item */}
                            <div class="text-center pt-1">
                                <button
                                    onClick={() => handleRemove(worker.id)}
                                    class="text-[11px] font-bold text-rose-400 hover:text-rose-600 uppercase tracking-wider transition cursor-pointer"
                                >
                                    Remove from saved
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* BOTTOM SEARCH DECORATIVE FOOTER */}
            <div class="pt-16 pb-8 text-center space-y-4">
                <div class="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto shadow-inner text-slate-400">
                    <i class="fa-solid fa-magnifying-glass text-xl"></i>
                </div>
                <div class="space-y-1">
                    <h4 class="text-base font-bold text-slate-800">Looking for something specific?</h4>
                    <p class="text-slate-400 text-xs font-light">Refine your standard exploration loops to pinpoint matching structures.</p>
                </div>
                <div class="pt-2">
                    <button class="bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 text-xs font-bold px-6 py-3 rounded-xl shadow-xs transition cursor-pointer">
                        Browse Search Results
                    </button>
                </div>
            </div>

        </main>
    )
}

export default Favourites