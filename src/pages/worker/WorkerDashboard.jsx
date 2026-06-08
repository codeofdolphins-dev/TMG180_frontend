import React, { useState } from 'react'
import { FaMoneyBills } from 'react-icons/fa6';
import { FiUserPlus } from 'react-icons/fi';
import { GiScrollQuill } from 'react-icons/gi';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { LuCalendarCheck } from 'react-icons/lu';
import { MdEditNote, MdGavel, MdWarningAmber } from 'react-icons/md';
import { RiShieldCheckLine } from 'react-icons/ri';
import { TbClipboardSearch, TbTopologyStar3 } from 'react-icons/tb';


const scheduleSessions = [
    {
        id: 1,
        time: "10:30",
        period: "AM",
        title: "Support Coordination",
        type: "ONLINE",
        typeStyle: "bg-sky-50 text-sky-600 border border-sky-100",
        meta: "Participant #882 • 60 Mins",
        isActive: true
    },
    {
        id: 2,
        time: "1:00",
        period: "PM",
        title: "Community Access Support",
        type: "NEXT",
        typeStyle: "bg-slate-100 text-slate-600 border border-slate-200/50",
        meta: "Participant #104 • In-person",
        isActive: false
    },
    {
        id: 3,
        time: "3:30",
        period: "PM",
        title: "Initial Intake Review",
        type: "",
        meta: "Participant #441 • Online",
        isActive: false,
        hasMenu: true
    }
];

// Quick action button data
const quickActions = [
    { label: "Add Participant", icon: FiUserPlus, color: "bg-teal-50 text-teal-600" },
    { label: "Continue Intake", icon: GiScrollQuill, color: "bg-sky-50 text-sky-600" },
    { label: "Add Daily Note", icon: MdEditNote, color: "bg-amber-50 text-amber-600" },
    { label: "Create Invoice", icon: FaMoneyBills, color: "bg-indigo-50 text-indigo-600" },
    { label: "Upload Compliance", icon: IoCloudUploadOutline, color: "bg-rose-50 text-rose-600" },
    { label: "Learning Hub", icon: TbTopologyStar3, color: "bg-purple-50 text-purple-600" }
];




const WorkerDashboard = () => {
    const [scheduleView, setScheduleView] = useState('Today');


    return (
        <div className="flex-1 flex overflow-hidden">

            {/* Scrollable middle panel */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {/* Welcome banner card */}
                <div className="bg-[#0D443E] rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between min-h-[180px] shadow-xs">
                    {/* Abstract background decoration */}
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
                    <div className="absolute right-12 top-4 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />

                    <div className="space-y-2 relative z-10">
                        <span className="bg-white/10 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Active Shift <span class="text-white/60 mx-1">•</span> Monday, Oct 23
                        </span>
                        <h2 class="text-2xl font-black tracking-tight pt-1">Welcome back, Sarah</h2>
                        <p className="text-slate-200 text-xs font-light max-w-md leading-relaxed">
                            You have a productive day ahead with 4 sessions scheduled. Your profile is nearly complete.
                        </p>
                    </div>

                    {/* Banner bottom: progress & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 relative z-10 border-t border-white/10 mt-2">
                        <div className="space-y-1 w-full sm:w-48">
                            <div className="flex justify-between text-[10px] font-bold text-slate-300">
                                <span>Profile Completion</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-400 h-full w-[85%]" />
                            </div>
                        </div>
                        <button className="bg-white hover:bg-slate-50 text-emerald-600 font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer">
                            Continue when you're ready
                        </button>
                    </div>
                </div>

                {/* Schedule card widget */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h3 className="text-base font-black text-slate-900 tracking-tight">Today's Schedule</h3>
                            <p class="text-slate-400 text-xs font-light">4 Sessions Scheduled • Oct 23, 2023</p>
                        </div>

                        {/* Today / Week toggle switch */}
                        <div className="bg-slate-100 p-1 rounded-xl flex space-x-1 text-xs font-bold">
                            {['Today', 'Week'].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setScheduleView(v)}
                                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${scheduleView === v ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Schedule item list */}
                    <div className="space-y-3">
                        {scheduleSessions.map((session) => (
                            <div
                                key={session.id}
                                className={`p-4 rounded-2xl flex items-center justify-between gap-4 transition-all ${session.isActive
                                    ? 'bg-slate-50/80 border-l-4 border border-slate-100 shadow-2xs'
                                    : 'border border-slate-100/70 hover:bg-slate-50/30'
                                    }`}
                            >
                                <div className="flex items-center space-x-5 flex-1 min-w-0">
                                    {/* Time slot */}
                                    <div className="text-center shrink-0 w-14">
                                        <span className="block text-base font-black text-slate-900 tracking-tight leading-none">{session.time}</span>
                                        <span className="text-[10px] font-bold text-slate-400 block mt-1 uppercase tracking-wider">{session.period}</span>
                                    </div>

                                    <div className="h-8 w-px bg-slate-100" />

                                    {/* Title and info */}
                                    <div className="space-y-1 flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h4 className="text-sm font-bold text-slate-800 tracking-tight truncate leading-none">{session.title}</h4>
                                            {session.type && (
                                                <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm uppercase ${session.typeStyle}`}>
                                                    <i className="fa-regular fa-video mr-1 text-[8px]"></i>{session.type}
                                                </span>
                                            )}
                                        </div>
                                        <p class="text-slate-400 text-xs font-light truncate">{session.meta}</p>
                                    </div>
                                </div>

                                {/* Right control button */}
                                <div className="shrink-0">
                                    {session.isActive ? (
                                        <button className="bg-[#1E5A54] hover:bg-secondary text-white w-9 h-9 rounded-full flex items-center justify-center shadow-xs cursor-pointer transition-transform hover:scale-105">
                                            <i className="fa-solid fa-arrow-right text-xs"></i>
                                        </button>
                                    ) : session.hasMenu ? (
                                        <button className="text-slate-400 hover:text-slate-600 p-2 cursor-pointer">
                                            <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
                                        </button>
                                    ) : (
                                        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-200/40">
                                            {session.type}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick actions grid widget */}
                <div className="space-y-4">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight">Quick Actions</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {quickActions.map((action, idx) => {
                            const Icon = action.icon;

                            return (
                                <button
                                    key={idx}
                                    className="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base shadow-3xs group-hover:scale-105 transition-transform ${action.color}`}>
                                        <Icon size={26} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 tracking-tight group-hover:text-[#1E5A54] transition-colors">{action.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

            </div>

            {/* Right control sidebar */}
            <div className="w-80 flex flex-col p-6 space-y-6 shrink-0 h-full">

                {/* Compliance alerts widget */}
                <div className="bg-slate-50/40 border border-slate-100 rounded-2xl p-4 space-y-4 shadow-3xs">
                    <div className="flex items-center space-x-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                        <MdWarningAmber size={26} />
                        <h4 className="tracking-tight">Compliance Alerts</h4>
                    </div>

                    <div className="space-y-2.5 text-xs">
                        {/* Alert 1 */}
                        <div className="bg-amber-50 border border-amber-100 rounded-full p-4.5 flex items-start space-x-3">
                            <RiShieldCheckLine size={22} className='text-amber-500' />
                            <div className="space-y-0.5">
                                <h5 className="font-bold text-amber-900">NDIS Check Renewal</h5>
                                <p className="text-[11px] text-amber-700/80 font-medium">Due in 12 days • Needs Review</p>
                            </div>
                        </div>
                        {/* Alert 2 */}
                        <div className="bg-rose-50 border border-rose-100 rounded-full p-4.5 flex items-start space-x-3">
                            <MdGavel size={22} className='text-rose-500' />
                            <div className="space-y-0.5">
                                <h5 className="font-bold text-rose-900">Professional Indemnity</h5>
                                <p className="text-[11px] text-rose-600 font-medium">Expires Oct 30 • Immediate Attention</p>
                            </div>
                        </div>
                    </div>

                    <button class="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-3xs">
                        View All Compliance
                    </button>
                </div>

                {/* Support overview */}
                <div className="space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Support Overview</h4>

                    <div className="space-y-2 text-xs">
                        {/* Metric 1 */}
                        <div className="bg-white border border-slate-100 rounded-xl p-3.5 flex items-center justify-between shadow-3xs">
                            <div className="flex items-center space-x-3">
                                <div class="bg-teal-50 text-teal-600 p-2 rounded-lg text-sm"><LuCalendarCheck size={24} /></div>
                                <div>
                                    <span className="text-slate-400 font-medium block">Total Sessions</span>
                                    <span className="text-base font-black text-slate-900 tracking-tight block mt-0.5">18</span>
                                </div>
                            </div>
                            <span className="bg-emerald-50 text-emerald-600 font-bold text-[10px] px-2 py-0.5 rounded-sm">+12%</span>
                        </div>
                        {/* Metric 2 */}
                        <div className="bg-white border border-slate-100 rounded-xl p-3.5 flex items-center justify-between shadow-3xs">
                            <div className="flex items-center space-x-3">
                                <div class="bg-amber-50 text-amber-600 p-2 rounded-lg text-sm"><TbClipboardSearch size={24} /></div>
                                <div>
                                    <span className="text-slate-400 font-medium block">Pending Notes</span>
                                    <span className="text-base font-black text-slate-900 tracking-tight block mt-0.5">4</span>
                                </div>
                            </div>
                            <span className="bg-amber-50 text-amber-600 font-bold text-[10px] px-2 py-0.5 rounded-sm">Action</span>
                        </div>
                    </div>

                    {/* Training progress sub-section */}
                    <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-3.5 space-y-3 text-xs">
                        <div className="flex justify-between font-bold text-slate-500">
                            <span className="uppercase text-[10px] tracking-wider text-slate-400">Training Progress</span>
                            <span class="text-indigo-600">72%</span>
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <div className="flex justify-between text-[11px] text-slate-500 font-medium"><span>Policy Acknowledgements</span><span>4/5</span></div>
                                <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden"><div className="bg-[#1E5A54] h-full w-[80%]" /></div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-[11px] text-slate-500 font-medium"><span>Training Modules</span><span>9/12</span></div>
                                <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden"><div className="bg-indigo-900/60 h-full w-[75%]" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coming up */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-xs space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-black text-slate-900 tracking-tight">Coming Up</h4>
                            <span className="bg-slate-100 text-slate-500 text-[9px] font-extrabold tracking-wider px-2 py-0.5 rounded-sm uppercase">3 New</span>
                        </div>

                        {/* Task checklist */}
                        <div className="space-y-2 text-xs font-semibold text-slate-600">
                            {['Complete intake review', 'Submit monthly invoice', 'Review compliance update'].map((task, idx) => (
                                <label key={idx} className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-50/60 cursor-pointer transition-colors">
                                    <input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300 text-[#1E5A54] focus:ring-[#1E5A54]/20 accent-[#1E5A54]" />
                                    <span className="tracking-tight">{task}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer mt-4">
                        See All Tasks
                    </button>
                </div>

            </div>

        </div>
    )
}

export default WorkerDashboard