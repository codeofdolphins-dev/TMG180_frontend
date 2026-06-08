import React, { useState } from 'react';
import { LiaIdCardAltSolid } from 'react-icons/lia';
import { LuSlidersHorizontal, LuUserSearch } from 'react-icons/lu';

export default function ChooseWorkspace() {
    //   STATE
    const [selectedWorkspace, setSelectedWorkspace] = useState('Worker');

    const handleContinue = () => {
        alert(`🎉 Moving forward with the "${selectedWorkspace}" workspace experience!`);
    };

    const workspaces = [
        {
            id: 'Participant',
            title: 'Participant',
            desc: 'Engage with programs, track your progress, and manage your personal profile.',
            icon: LuUserSearch,
            size: 18,
            color: 'bg-sky-200 text-sky-600 border-sky-100/50'
        },
        {
            id: 'Worker',
            title: 'Worker',
            desc: 'Manage daily tasks, view assigned caseloads, and collaborate with your team.',
            icon: LiaIdCardAltSolid,
            size: 30,
            color: 'bg-[#B9EBE6] text-primary border-[#A2DFD8]'
        },
        {
            id: 'Admin',
            title: 'Admin',
            desc: 'Full system control, user management, and organizational analytics reporting.',
            icon: LuSlidersHorizontal,
            size: 18,
            color: 'bg-purple-200 text-purple-600 border-purple-100/50'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F9F9FB] flex flex-col justify-between text-xs sm:text-sm text-slate-700 antialiased">

            {/* MAIN SPLIT LAYOUT AREA */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-12">

                {/* LEFT BANNER PANEL */}
                <div className="bg-[#EAEFF4] lg:col-span-5 flex flex-col justify-start items-center px-8 sm:px-16 lg:px-20 py-20">

                    <div className="max-w-md space-y-8 relative z-10">
                        {/* ONBOARDING CAPSULE TAG */}
                        <div>
                            <span className="bg-[#B9EBE6] text-[#134741] text-[10px] font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-3xs">
                                Onboarding
                            </span>
                        </div>

                        {/* MAIN HEADLINE */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase leading-16">
                                Choose your <br />workspace
                            </h1>
                            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                                Select the experience that matches how you'll use the platform. Your workspace defines your dashboard, tools, and permissions.
                            </p>
                        </div>

                        {/* SMALL CHECKLIST GUIDE */}
                        <div className="space-y-3.5 pt-2 text-xs font-semibold text-slate-500">
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-white border border-slate-200 rounded-md flex items-center justify-center text-emerald-500 shadow-3xs">
                                    <i className="fa-solid fa-check text-[10px]"></i>
                                </div>
                                <span>Tailored features for your specific role.</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-white border border-slate-200 rounded-md flex items-center justify-center text-emerald-500 shadow-3xs">
                                    <i className="fa-solid fa-check text-[10px]"></i>
                                </div>
                                <span>Focused interface for maximum productivity.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SELECTION WINDOW */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative">

                    {/* WORKSPACE CARDS CONTAINER */}
                    <div className="w-full max-w-xl bg-white p-2 space-y-4">

                        {workspaces.map((ws) => {
                            const isSelected = selectedWorkspace === ws.id;
                            const Icon = ws.icon;
                            return (
                                <div
                                    key={ws.id}
                                    onClick={() => setSelectedWorkspace(ws.id)}
                                    className={`w-full rounded-2xl p-5 border flex items-start gap-4 transition-all duration-300 cursor-pointer relative ${isSelected
                                        ? 'border-[#1E5A54] bg-white ring-1 ring-[#1E5A54] shadow-md'
                                        : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-2xs'
                                        }`}
                                >
                                    {/* ICON BOX */}
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border text-base shadow-3xs ${ws.color}`}>
                                        <Icon size={ws.size} />
                                    </div>

                                    {/* TEXT DESCRIPTION */}
                                    <div className="flex-1 min-w-0 space-y-1 pr-6">
                                        <h3 className="text-sm font-black text-slate-900 tracking-tight leading-none">
                                            {ws.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs font-bold leading-relaxed">
                                            {ws.desc}
                                        </p>
                                    </div>

                                    {/* CUSTOM RADIO BUTTON INDICATOR */}
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-[#1E5A54]' : 'border-slate-200'
                                            }`}>
                                            {isSelected && (
                                                <div className="w-2 h-2 bg-[#1E5A54] rounded-full" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CONTINUE BUTTON */}
                        <div className="pt-4 space-y-4">
                            <button
                                onClick={handleContinue}
                                className="w-full bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold py-4 rounded-full shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer text-xs sm:text-sm"
                            >
                                <span>Continue</span>
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </button>

                            {/* BACK TO LOGIN LINK */}
                            <div className="text-center">
                                <a href="#login" className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
                                    <i className="fa-solid fa-arrow-left text-[10px]"></i>
                                    <span>Back to login</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM FOOTER */}
                    <div className="absolute bottom-8 w-full max-w-xl px-4 flex items-center justify-between text-[11px] font-bold text-slate-400/80 select-none">
                        <div>&copy; 2026 The Breathable Interface</div>
                        <div className="flex space-x-4">
                            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
}