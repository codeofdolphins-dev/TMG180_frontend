import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

const statsData = [
    { label: "REQUIRED", count: "12", sub: "Core Modules" },
    { label: "COMPLETED", count: "8", sub: "88% Complete" },
    { label: "IN PROGRESS", count: "2", sub: "Active sessions" },
    { label: "READINESS", count: "75%", isProgress: true }
];

// Mock data - Learning course cards
const initialCourses = [
    {
        id: 1,
        title: "Relational Discipline Foundations",
        desc: "Exploring the core principles of human-centered support within structured...",
        duration: "5 min",
        status: "IN PROGRESS",
        statusStyle: "bg-sky-500/20 text-sky-300",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        actionText: "Resume Lesson",
        isLocked: false
    },
    {
        id: 2,
        title: "Psychosocial Complexity",
        desc: "Understanding multifaceted trauma-informed care and psychological safety...",
        duration: "7 min",
        status: "NOT STARTED",
        statusStyle: "bg-slate-700 text-slate-300",
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
        actionText: "Locked",
        isLocked: true
    },
    {
        id: 3,
        title: "Maintaining Boundaries",
        desc: "Professional conduct guidelines for sustainable and safe worker-participant...",
        duration: "3 min",
        status: "COMPLETED",
        statusStyle: "bg-emerald-500/20 text-emerald-400",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
        actionText: "Review Lesson",
        isLocked: false
    },
    {
        id: 4,
        title: "Documentation Standards",
        desc: "Accurate and empathetic record keeping within the Sanctuary portal ecosystem.",
        duration: "6 min",
        status: "NOT STARTED",
        statusStyle: "bg-slate-700 text-slate-300",
        img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400",
        actionText: "Start Module",
        isLocked: false
    }
];


const LearningHub = () => {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [courses, setCourses] = useState(initialCourses);

    // Filtering logic
    const filteredCourses = currentFilter === 'All'
        ? courses
        : courses.filter(course => course.status.toLowerCase().replace(' ', '') === currentFilter.toLowerCase().replace(' ', ''));



    return (
        <div className="flex-1 flex overflow-hidden">

            {/* learning content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">

                {/* title */}
                <div className="space-y-0.5">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Learning Hub</h1>
                    <p className="text-slate-400 text-xs font-light">Expand your professional expertise and maintain care compliance.</p>
                </div>

                {/* module stat card */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {statsData.map((stat, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs flex flex-col justify-between min-h-[100px]">
                            <span className="text-[10px] font-bold text-slate-400 block tracking-tight uppercase">{stat.label}</span>
                            <div className="space-y-1 mt-2">
                                <span className="text-3xl font-black text-slate-900 block tracking-tight leading-none">{stat.count}</span>
                                {stat.isProgress ? (
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                                        <div className="bg-[#1E5A54] h-full w-[75%]" />
                                    </div>
                                ) : (
                                    <span className="text-[10px] text-slate-400 font-medium block">{stat.sub}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* activation widget */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-1.5 max-w-xl">
                        <h3 className="text-base font-black text-slate-900 tracking-tight">Activation Progress</h3>
                        <p className="text-slate-500 text-xs font-light leading-relaxed">
                            You're almost there! Complete the final modules to activate your full profile and start receiving participant matches. <span className="font-bold text-[#1E5A54]">You can continue at your own pace.</span>
                        </p>
                    </div>
                    <div className="w-full md:w-56 space-y-2 shrink-0">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            <span>Step 4 of 6</span>
                            <span className="text-[#1E5A54]">66%</span>
                        </div>
                        {/* Step dot indicator */}
                        <div className="flex space-x-1.5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 4 ? 'bg-[#1E5A54]' : 'bg-slate-100'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* filter & search bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="bg-slate-100/70 p-1 rounded-xl flex flex-wrap gap-1 text-xs font-bold shadow-3xs">
                        {['All', 'Required', 'In Progress', 'Completed', 'Policies'].map((filter) => {
                            const isSelected = currentFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setCurrentFilter(filter)}
                                    className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${isSelected
                                        ? 'bg-white text-slate-800 shadow-3xs'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>

                    {/* Module search input */}
                    <div className="relative w-full sm:w-64">
                        <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                        <input
                            type="text"
                            placeholder="Search modules..."
                            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-[#1E5A54]"
                        />
                    </div>
                </div>

                {/* COURSE CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                    {filteredCourses.map((course) => {


                        return <div key={course.id} className={`bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${course.isLocked ? 'opacity-80' : ''}`}>

                            {/* image */}
                            <div className="h-44 overflow-hidden relative bg-slate-900">
                                <img src={course.img} alt={course.title} className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500" />
                                <span className={`absolute top-4 left-4 text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase ${course.statusStyle}`}>
                                    {course.status}
                                </span>
                            </div>

                            {/* course text detail */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#1E5A54] transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs font-light leading-relaxed">
                                        {course.desc}
                                    </p>
                                </div>

                                {/* footer card */}
                                <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-xs font-bold">
                                    <span className="text-slate-400 flex items-center gap-1.5"><i className="fa-regular fa-clock text-slate-400 text-xs"></i> {course.duration}</span>

                                    <button
                                        disabled={course.isLocked}
                                        className={`flex items-center gap-1.5 transition-colors focus:outline-none ${course.isLocked
                                            ? 'text-slate-300 cursor-not-allowed'
                                            : 'text-[#1E5A54] hover:text-secondary cursor-pointer'
                                            }`}
                                    >
                                        <span>{course.actionText}</span>
                                        {course.actionText === "Resume Lesson" && <FaArrowRight size={18} />}
                                    </button>
                                </div>
                            </div>

                        </div>
                    })}
                </div>

            </div>

            {/* RIGHT SIDEBAR WIDGETS */}
            <div className="w-80 bg-white border-l border-slate-100 flex flex-col overflow-y-auto p-6 space-y-6 shrink-0 h-full">

                {/* Resume learning widget */}
                <div className="bg-[#10443E] rounded-2xl p-5 text-white space-y-4 shadow-sm relative overflow-hidden">
                    {/* Background decoration glow */}
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />

                    <div className="space-y-1">
                        <span className="text-[9px] font-extrabold text-slate-300 uppercase tracking-widest block">Resume Learning</span>
                        <h4 className="text-base font-black tracking-tight pt-1">Relational Discipline</h4>
                        <p className="text-[11px] text-slate-200 font-light truncate">Next: Lesson 2 - The Mirror Effect</p>
                    </div>

                    <button className="w-full bg-white hover:bg-slate-50 text-[#10443E] font-bold text-xs py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                        <i className="fa-solid fa-circle-play text-sm"></i>
                        <span>Resume Now</span>
                    </button>
                </div>

                {/* Policy acknowledgement widget */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-3xs space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black text-slate-800 tracking-tight uppercase">Policy Acknowledgement</h4>
                        <span className="bg-rose-50 text-rose-600 text-[8px] font-black tracking-wider px-2 py-0.5 rounded-sm uppercase">Required</span>
                    </div>

                    <div className="space-y-3 text-xs">
                        {/* Item 1 */}
                        <div className="flex items-center justify-between border-b border-slate-50 pb-2.5">
                            <div>
                                <h5 className="font-bold text-slate-800">Code of Conduct</h5>
                                <span className="text-[9px] text-emerald-600 font-bold block mt-0.5 uppercase tracking-wide">Acknowledged</span>
                            </div>
                            <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-[10px] px-3 py-1.5 rounded-lg border border-slate-200/50 cursor-pointer">Read</button>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center justify-between border-b border-slate-50 pb-2.5">
                            <div>
                                <h5 className="font-bold text-slate-800">Privacy & GDPR Policy</h5>
                                <span className="text-[9px] text-emerald-600 font-bold block mt-0.5 uppercase tracking-wide">Acknowledged</span>
                            </div>
                            <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-[10px] px-3 py-1.5 rounded-lg border border-slate-200/50 cursor-pointer">Read</button>
                        </div>
                        {/* Item 3 - Action required */}
                        <div className="flex items-center justify-between pt-1">
                            <div>
                                <h5 className="font-bold text-slate-800">Incident Reporting</h5>
                                <span className="text-[9px] text-rose-500 font-black block mt-0.5 uppercase tracking-wide">Action Needed</span>
                            </div>
                            <button className="bg-[#1E5A54] hover:bg-secondary text-white font-bold text-[10px] px-3 py-2 rounded-lg shadow-2xs cursor-pointer transition-colors">Acknowledge</button>
                        </div>
                    </div>
                </div>

                {/* Onboarding readiness widget */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-3xs space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h4 className="text-xs font-black text-slate-800 tracking-tight uppercase">Onboarding Readiness</h4>

                        {/* Checklist tracker */}
                        <div className="space-y-3.5 text-xs font-semibold text-slate-600">
                            <div className="flex items-start space-x-3">
                                <i className="fa-solid fa-circle-check text-emerald-500 text-base mt-0.5"></i>
                                <div>
                                    <h5 className="text-slate-800 leading-none">Background Verification</h5>
                                    <p className="text-[10px] text-slate-400 font-light mt-1">Fully verified on Oct 12</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <i className="fa-solid fa-circle-check text-emerald-500 text-base mt-0.5"></i>
                                <div>
                                    <h5 className="text-slate-800 leading-none">Insurance Coverage</h5>
                                    <p className="text-[10px] text-slate-400 font-light mt-1">Active professional indemnity</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center text-[6px] text-slate-400 bg-slate-50 mt-0.5"><i className="fa-solid fa-circle"></i></div>
                                <div>
                                    <h5 className="text-slate-800 leading-none">Mandatory Training</h5>
                                    <p className="text-[10px] text-slate-400 font-light mt-1">2 modules remaining for "Ready"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activation status bottom bar */}
                    <div className="border-t border-slate-100 pt-4 mt-4 space-y-3">
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-400 uppercase tracking-wider">Profile Status</span>
                            <span className="bg-amber-50 text-amber-600 font-black text-[9px] tracking-wider px-2 py-0.5 rounded-sm uppercase border border-amber-100/50">Pending Activation</span>
                        </div>
                        <div className="bg-[#FAFAFA] rounded-xl p-3 border border-slate-100 text-[11px] font-medium text-slate-400 leading-relaxed">
                            Your "Ready to Publish" status will automatically toggle once all training is complete.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LearningHub