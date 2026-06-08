import React, { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoMdWarning } from 'react-icons/io';
import { LiaClipboardSolid } from 'react-icons/lia';
import { MdGroups } from 'react-icons/md';


const summaryStats = [
    { label: "TOTAL PARTICIPANTS", count: 124, icon: MdGroups, color: "text-[#236669]", bgColor: "bg-slate-50" },
    { label: "INTAKE IN PROGRESS", count: 12, icon: LiaClipboardSolid, color: "text-slate-800", bgColor: "bg-slate-50" },
    { label: "INTAKE COMPLETE", count: 112, icon: FaRegCheckCircle, color: "text-emerald-600", bgColor: "bg-emerald-50/50" },
    { label: "NOTES / INVOICE LOCKED", count: 8, icon: IoMdWarning, color: "text-rose-600", bgColor: "bg-rose-50/50" }
];

// Mock data - Participant list
const participantsData = [
    {
        id: "104",
        name: "Participant #104",
        status: "DRAFT",
        statusStyle: "bg-slate-100 text-slate-600 font-bold",
        nextAction: "Next: Oct 26",
        type: "draft"
    },
    {
        id: "882",
        name: "Participant #882",
        status: "COMPLETE",
        statusStyle: "bg-emerald-50 text-emerald-600 font-bold",
        nextAction: "Next: Oct 24",
        type: "complete"
    },
    {
        id: "441",
        name: "Participant #441",
        status: "COMPLETE",
        statusStyle: "bg-emerald-50 text-emerald-600 font-bold",
        nextAction: "Next: Oct 27",
        type: "complete"
    }
];



const Participant = () => {
    const [activeSubTab, setActiveSubTab] = useState('All Participants');
    const [sortBy, setSortBy] = useState('Last Updated');


    return (
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">

            {/* Header title and top action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Participants</h1>
                    <p className="text-slate-400 text-xs font-light">Manage participant records and continue care workflows with ease.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-colors cursor-pointer">
                        <i className="fa-solid fa-sliders text-xs"></i>
                        <span>Filters</span>
                    </button>
                    <button className="bg-primary hover:bg-secondary text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-primary/10 flex items-center space-x-1.5 transition-all transform active:scale-98 cursor-pointer">
                        <i className="fa-solid fa-plus text-xs"></i>
                        <span>Add a participant you support</span>
                    </button>
                </div>
            </div>

            {/* 4-column summary card grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {summaryStats.map((stat, idx) => {
                    const Icon = stat.icon;

                    return <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs space-y-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${stat.bgColor} ${stat.color}`}>
                            <Icon size={24} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 block tracking-tight">{stat.label}</span>
                            <span className="text-2xl font-black text-slate-900 block tracking-tight leading-none">{stat.count}</span>
                        </div>
                    </div>
                })}
            </div>

            {/* Sub-tab and sort dropdown bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-2 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                    {['All Participants', 'Intake Status', 'Recently Added', 'Has Upcoming Session'].map((tab) => {
                        const isSelected = activeSubTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveSubTab(tab)}
                                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${isSelected
                                    ? 'bg-white border border-slate-200 text-slate-800 shadow-3xs'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center space-x-2 text-xs self-end sm:self-auto">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">SORT BY</span>
                    <button className="bg-white border border-slate-200 px-3 py-2 rounded-xl font-bold text-slate-700 flex items-center space-x-3 hover:border-slate-300 shadow-3xs transition-all cursor-pointer">
                        <span>{sortBy}</span>
                        <i className="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
                    </button>
                </div>
            </div>

            {/* Participant row list section */}
            <div className="space-y-3">
                {participantsData.map((participant) => (
                    <div key={participant.id} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                        {/* Left info block */}
                        <div className="flex items-center space-x-4 flex-1 min-w-0">
                            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0 select-none">
                                {participant.id}
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-black text-slate-800 tracking-tight leading-none">{participant.name}</h3>
                                <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400">
                                    <span className={`px-2 py-0.5 rounded-sm text-[8px] uppercase tracking-wide ${participant.statusStyle}`}>
                                        <span className="inline-block w-1 h-1 rounded-full bg-current mr-1"></span>
                                        {participant.status}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><i className="fa-regular fa-calendar text-[9px]"></i> {participant.nextAction}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right action button block */}
                        <div className="flex items-center justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-50">
                            <button className="text-slate-400 hover:text-slate-600 p-2 transition-colors cursor-pointer">
                                <i className="fa-regular fa-eye text-base"></i>
                            </button>

                            {participant.type === 'draft' ? (
                                <>
                                    <button className="bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer">
                                        Continue Intake
                                    </button>
                                    <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs px-4 py-2 rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer">
                                        <i className="fa-regular fa-file-lines text-slate-400"></i>
                                        <span>Daily Note</span>
                                    </button>
                                    <button className="text-slate-300 p-1 select-none">
                                        <i className="fa-solid fa-grip-lines-vertical text-xs"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2 rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer">
                                        <i className="fa-regular fa-file-plus text-sky-400"></i>
                                        <span>Add Daily Note</span>
                                    </button>
                                    <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs px-4 py-2 rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer">
                                        <i className="fa-regular fa-file-invoice-dollar text-emerald-400"></i>
                                        <span>Invoice</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-slate-600 p-2 cursor-pointer">
                                        <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
                                    </button>
                                </>
                            )}
                        </div>

                    </div>
                ))}
            </div>

            {/* Bottom banner section (Empowering Support & Intake Tip) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">

                {/* Empowering support promo banner */}
                <div className="lg:col-span-7 bg-[#1A534C] rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[180px] shadow-xs group">
                    <div className="absolute -right-6 -bottom-6 text-white/5 text-9xl font-bold pointer-events-none transform group-hover:scale-105 transition-transform duration-500">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div className="space-y-2 max-w-xl relative z-10">
                        <h3 className="text-xl font-black tracking-tight">Empowering Support Every Step of the Way</h3>
                        <p className="text-slate-200 text-xs font-light leading-relaxed">
                            TMG180 is designed to center the human connection. Our intake flow ensures all compliance is met so you can focus on providing world-class care.
                        </p>
                    </div>
                    <div className="pt-4 relative z-10">
                        <button className="bg-white hover:bg-slate-50 text-[#1A534C] font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer">
                            Review Workflow Guide
                        </button>
                    </div>
                </div>

                {/* Intake completion tip widget */}
                <div className="lg:col-span-5 bg-slate-100/60 border border-slate-200/50 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-3xs">
                    <div className="space-y-2">
                        <div className="w-8 h-8 bg-white text-teal-600 rounded-lg flex items-center justify-center border border-slate-200/40 shadow-3xs">
                            <i className="fa-regular fa-sparkles text-sm"></i>
                        </div>
                        <h4 className="text-sm font-black text-slate-800 tracking-tight pt-1">Intake Completion Tip</h4>
                        <p className="text-slate-500 text-xs font-light leading-relaxed">
                            Participants with completed intake records have 40% faster billing cycles. Ensure all consent forms are uploaded properly.
                        </p>
                    </div>

                    {/* Next compliance check capsule */}
                    <div className="bg-white border border-slate-200/60 rounded-xl p-3 flex items-center space-x-3 shadow-3xs">
                        <span className="w-1 h-6 bg-teal-600 rounded-full block"></span>
                        <div>
                            <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">Next Compliance Check</span>
                            <span className="text-slate-700 text-xs font-black tracking-tight block">Monday, Oct 30</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Participant