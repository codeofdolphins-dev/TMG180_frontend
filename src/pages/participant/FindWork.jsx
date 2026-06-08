import React, { useState } from 'react'


// Mock Data for Workers Card
const initialWorkers = [
    {
        id: 1,
        name: "Sarah Miller",
        role: "SPECIALIST CARE PROVIDER",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
        tags: ["AUTISM SUPPORT", "NDIS"],
        description: "Compassionate support worker with a background in clinical...",
        location: "SURRY HILLS, NSW",
        experience: "8+ YEARS EXP.",
        status: "AVAILABLE TODAY",
        statusType: "success",
        isSaved: false
    },
    {
        id: 2,
        name: "David Chen",
        role: "OCCUPATIONAL THERAPIST",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
        tags: ["MOBILITY", "ELDERLY CARE"],
        description: "Expert in assistive technology and home modifications. Helpin...",
        location: "PARRAMATTA, NSW",
        experience: "5+ YEARS EXP.",
        status: "NEXT: MONDAY",
        statusType: "neutral",
        isSaved: false
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "YOUTH MENTOR",
        avatar: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=300",
        tags: ["MENTAL HEALTH", "CREATIVE ARTS"],
        description: "Passionate about empowering young people through creative...",
        location: "BONDI JUNCTION, NSW",
        experience: "3+ YEARS EXP.",
        status: "AVAILABLE TODAY",
        statusType: "success",
        isSaved: true
    }
];

// WARNING: card design need to change little bit, the description text is too long and it should be max 2 lines with ellipsis, also the tags should be more compact and smaller font size, and the location and experience should be in a smaller font size as well. The status should be more prominent and the buttons should be more visually appealing with better colors and hover effects.

const FindSupport = () => {
    const [activeMenu, setActiveMenu] = useState('Find Workers');
    const [workers, setWorkers] = useState(initialWorkers);
    const [locationFilter, setLocationFilter] = useState('SYDNEY');

    const toggleSaveWorker = (id) => {
        setWorkers(workers.map(w => w.id === id ? { ...w, isSaved: !w.isSaved } : w));
    };


    return (
        <main class="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8">

            {/* Header Title Section */}
            <div class="space-y-2">
                <h1 class="text-3xl font-black text-slate-900 tracking-tight">Connect with Care</h1>
                <p class="text-slate-500 font-light max-w-3xl text-sm sm:text-base leading-relaxed">
                    Discover qualified professionals who align with your specific support needs and values.
                </p>
            </div>

            {/* FILTER CRITERIA TRIGGER PILLS BAR */}
            <div class="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-2">
                {locationFilter && (
                    <button onClick={() => setLocationFilter('')} class="bg-[#1E5A54] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center space-x-2 shadow-sm transition transform active:scale-95 cursor-pointer">
                        <span>LOCATION: {locationFilter}</span>
                        <i class="fa-solid fa-xmark text-white/70 hover:text-white"></i>
                    </button>
                )}

                {['SUPPORT TYPE', 'AVAILABILITY', 'LANGUAGE', 'EXPERIENCE'].map((filter) => (
                    <button key={filter} class="bg-white border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-bold px-4 py-2.5 rounded-full flex items-center space-x-2 transition cursor-pointer">
                        <span>{filter}</span>
                        <i class="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
                    </button>
                ))}

                <button class="bg-white border border-slate-200 hover:border-[#1E5A54] hover:text-[#1E5A54] text-slate-600 text-xs font-bold px-4 py-2.5 rounded-full flex items-center space-x-2 transition shadow-xs cursor-pointer">
                    <i class="fa-solid fa-sliders text-[11px]"></i>
                    <span>ALL FILTERS</span>
                </button>
            </div>

            {/* SEPARATOR DATA COUNTER SUMMARY ROW */}
            <div class="flex items-center justify-between pt-2">
                <div class="text-slate-500 text-sm">
                    <span class="text-2xl font-black text-slate-900 tracking-tight mr-1">120</span> workers found
                </div>

                {/* Sort Control Dropdown Menu */}
                <div class="flex items-center space-x-2 text-xs">
                    <span class="font-bold text-slate-400 uppercase tracking-wider">SORT BY:</span>
                    <button class="bg-white border border-slate-200 px-4 py-2.5 rounded-xl font-bold text-slate-700 flex items-center space-x-3 hover:border-slate-300 shadow-xs transition cursor-pointer">
                        <span>Recommended</span>
                        <i class="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
                    </button>
                </div>
            </div>

            {/* DYNAMIC WORKERS PROFILE GRID MATRIX */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workers.map((worker) => (
                    <div key={worker.id} class="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group">

                        {/* Save/Bookmark Top Right Toggle Switch button */}
                        <button
                            onClick={() => toggleSaveWorker(worker.id)}
                            class="absolute top-6 right-6 p-2 rounded-full text-slate-300 hover:text-rose-500 hover:bg-slate-50 transition z-10 cursor-pointer"
                        >
                            <i class={`${worker.isSaved ? 'fa-solid text-teal-600' : 'fa-regular'} fa-bookmark text-lg`}></i>
                        </button>

                        {/* Core Header info context */}
                        <div class="text-center space-y-4">
                            {/* Portrait Box layout structure */}
                            <div class="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-slate-100 shadow-inner relative bg-slate-50">
                                <img src={worker.avatar} alt={worker.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span class="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                            </div>

                            {/* Name and Title labels */}
                            <div class="space-y-1">
                                <h3 class="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#1E5A54] transition-colors">{worker.name}</h3>
                                <p class="text-[10px] font-bold text-teal-600 uppercase tracking-widest">{worker.role}</p>
                            </div>

                            {/* Metatags Lists */}
                            <div class="flex justify-center flex-wrap gap-2">
                                {worker.tags.map((tag, idx) => (
                                    <span key={idx} class="bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-lg tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Description Box text elements block */}
                            <p class="text-slate-500 text-xs font-light leading-relaxed max-w-xs mx-auto">
                                {worker.description}
                            </p>
                        </div>

                        {/* Footer specs criteria metadata mapping */}
                        <div class="mt-6 pt-4 border-t border-slate-50 space-y-4">
                            <div class="grid grid-cols-2 gap-2 text-center text-xs">
                                <div class="bg-slate-50 p-2 rounded-xl">
                                    <i class="fa-solid fa-location-dot text-slate-400 mr-1.5"></i>
                                    <span class="font-semibold text-slate-600 text-[11px]">{worker.location}</span>
                                </div>
                                <div class="bg-slate-50 p-2 rounded-xl">
                                    <i class="fa-solid fa-briefcase text-slate-400 mr-1.5"></i>
                                    <span class="font-semibold text-slate-600 text-[11px]">{worker.experience}</span>
                                </div>
                            </div>

                            {/* Operational status label row */}
                            <div class={`text-center py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 ${worker.statusType === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'
                                }`}>
                                <i class={`fa-regular ${worker.statusType === 'success' ? 'fa-circle-check' : 'fa-clock'}`}></i>
                                <span>{worker.status}</span>
                            </div>

                            {/* Primary CTA triggers wrappers */}
                            <div class="grid grid-cols-2 gap-3 pt-1">
                                <button class="border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold py-3 rounded-xl transition cursor-pointer">
                                    PROFILE
                                </button>
                                <button class="bg-[#1E5A54] hover:bg-[#16433F] text-white text-xs font-bold py-3 rounded-xl shadow-sm shadow-[#1E5A54]/10 transition cursor-pointer">
                                    CONTACT
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* INFINITE SCROLL / SHOW MORE RESULTS ACTION PANEL LAYOUT */}
            <div class="flex justify-center pt-6">
                <button class="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold px-8 py-3.5 rounded-2xl flex items-center space-x-3 shadow-xs hover:shadow-md transition transform active:scale-98 cursor-pointer">
                    <span>SHOW MORE RESULTS</span>
                    <i class="fa-solid fa-chevron-down text-slate-400"></i>
                </button>
            </div>

        </main>
    )
}

export default FindSupport;