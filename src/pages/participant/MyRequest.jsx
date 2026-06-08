import React, { useState } from 'react'


const initialRequests = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Clinical Psychologist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
        title: "Support Request for Daily Assistance",
        description: "Looking for help with daily routines and emotional support.",
        date: "SENT ON OCT 24, 2023",
        status: "Waiting",
        statusColor: "bg-amber-50 text-amber-600 border border-amber-200/50",
        dotColor: "bg-amber-500"
    },
    {
        id: 2,
        name: "David Miller",
        role: "Occupational Therapist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        title: "Assistance with Mobility & Exercise",
        description: "Requesting a specialized plan for at-home mobility exercises.",
        date: "SENT ON OCT 22, 2023",
        status: "Responded",
        statusColor: "bg-blue-50 text-blue-600 border border-blue-200/50",
        dotColor: "bg-blue-500"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Youth Mentor",
        avatar: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=300",
        title: "Creative Expression Workshops",
        description: "Seeking guidance on integrating art into daily therapy.",
        date: "SENT ON OCT 20, 2023",
        status: "Accepted",
        statusColor: "bg-emerald-50 text-emerald-600 border border-emerald-200/50",
        dotColor: "bg-emerald-500"
    },
    {
        id: 4,
        name: "Marcus Wright",
        role: "Disability Support Pro",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
        title: "Community Access Support",
        description: "Support for attending local community events and social groups.",
        date: "SENT ON OCT 18, 2023",
        status: "Declined",
        statusColor: "bg-rose-50 text-rose-600 border border-rose-200/50",
        dotColor: "bg-rose-500"
    }
];

const statsData = [
    { label: "Total Requests", count: 12, textColor: "text-slate-900" },
    { label: "Waiting", count: 3, textColor: "text-amber-500" },
    { label: "Accepted", count: 7, textColor: "text-emerald-500" },
    { label: "Responded", count: 2, textColor: "text-slate-900" }
];





const MyRequest = () => {
    const [activeMenu, setActiveMenu] = useState('My Requests');
    const [currentFilter, setCurrentFilter] = useState('All');
    const [requests, setRequests] = useState(initialRequests);

    // filter requesrts based on currentFilter state
    const filteredRequests = currentFilter === 'All'
        ? requests
        : requests.filter(req => req.status === currentFilter);


    return (
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-6">

            {/* title & short dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 class="text-3xl font-black text-slate-900 tracking-tight">My Requests</h1>
                    <p className="text-slate-400 text-sm font-light">Track and manage your support requests</p>
                </div>
                <div className="flex items-center space-x-3 text-sm self-end sm:self-auto">
                    <span className="text-slate-400 font-medium">Sort by:</span>
                    <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl font-bold text-slate-700 flex items-center space-x-3 hover:border-slate-300 shadow-2xs transition-all cursor-pointer">
                        <span>Recent</span>
                        <i className="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
                    </button>
                </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statsData.map((stat, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs space-y-1">
                        <span className="text-xs font-semibold text-slate-400 block tracking-tight">{stat.label}</span>
                        <span className={`text-3xl font-black ${stat.textColor} block tracking-tight`}>{stat.count}</span>
                    </div>
                ))}
            </div>

            {/* FILTER BUTTONS BAR */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
                {['All', 'Waiting', 'Responded', 'Accepted', 'Declined'].map((filter) => {
                    const isSelected = currentFilter === filter;
                    return (
                        <button
                            key={filter}
                            onClick={() => setCurrentFilter(filter)}
                            className={`text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer ${isSelected
                                ? 'bg-[#1E5A54] text-white shadow-xs'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>

            {/* REQUESTS CARD LIST */}
            <div className="space-y-4 pt-2">
                {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => (
                        <div key={request.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative group">

                            {/* left side: information centent */}
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                                    <img src={request.avatar} alt={request.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-base font-black text-slate-900 tracking-tight leading-none">{request.name}</h3>
                                        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-md">
                                            {request.role}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug">{request.title}</h4>
                                    <p className="text-slate-400 text-xs font-light truncate max-w-2xl leading-relaxed">{request.description}</p>
                                    <span className="text-[10px] font-bold text-slate-400 tracking-wider block pt-0.5">{request.date}</span>
                                </div>
                            </div>

                            {/* right side: status badge & action button */}
                            <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 w-full sm:w-auto shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-50">

                                {/* status badge */}
                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full flex items-center space-x-1.5 ${request.statusColor}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${request.dotColor}`}></span>
                                    <span>{request.status}</span>
                                </span>

                                {/* conditional action button */}
                                <div className="flex items-center gap-2">
                                    {request.status === 'Waiting' && (
                                        <button className="border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer">
                                            Cancel Request
                                        </button>
                                    )}

                                    {request.status === 'Responded' && (
                                        <button className="bg-[#1E5A54] hover:bg-[#16433F] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer">
                                            View Message
                                        </button>
                                    )}

                                    {request.status === 'Accepted' && (
                                        <>
                                            <button className="bg-[#1E5A54] hover:bg-[#16433F] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer">
                                                Start Chat
                                            </button>
                                            <button className="bg-sky-50 hover:bg-sky-100 text-sky-600 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer">
                                                Details
                                            </button>
                                        </>
                                    )}

                                    {request.status === 'Declined' && (
                                        <button className="bg-[#1E5A54] hover:bg-[#16433F] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer">
                                            Find Another Worker
                                        </button>
                                    )}
                                </div>

                            </div>

                        </div>
                    ))
                ) : (
                    <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center text-slate-400 text-sm font-light">
                        No requests found matching this criteria.
                    </div>
                )}
            </div>

        </main>
    )
}

export default MyRequest