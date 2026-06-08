import React, { useState } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';
import { PiSunHorizonLight } from 'react-icons/pi';

export default function SessionTime() {
    // STATE
    const [selectedTime, setSelectedTime] = useState('Afternoon');

    const handleContinue = () => {
        alert(`🎉 Moving forward with the "${selectedTime}" session time preference!`);
    };

    const sessionOptions = [
        {
            id: 'Morning',
            label: 'Morning',
            icon: LuSun,
            size: 18,
            color: 'bg-sky-100 text-sky-500 border-sky-100/50',
        },
        {
            id: 'Afternoon',
            label: 'Afternoon',
            icon: LuSun,
            size: 18,
            color: 'bg-[#B9EBE6] text-primary border-[#A2DFD8]',
        },
        {
            id: 'Evening',
            label: 'Evening',
            icon: LuMoon,
            size: 16,
            color: 'bg-purple-100 text-purple-500 border-purple-100/50',
        },
    ];

    return (
        <div className="h-screen overflow-hidden bg-white flex flex-col text-xs sm:text-sm text-slate-700 antialiased">

            {/* MAIN SPLIT LAYOUT AREA */}
            <main className="flex-1 h-full grid grid-cols-1 lg:grid-cols-12">

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
                            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                                What are your<br />preferred session<br />times?
                            </h1>
                            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                                We respect your boundaries. Let us know when you feel most present so we can match you with the right support window.
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

                {/* RIGHT SELECTION PANEL */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative">

                    {/* SESSION TIME CARDS CONTAINER */}
                    <div className="w-full max-w-xl bg-white p-2 space-y-4">

                        {sessionOptions.map((option) => {
                            const isSelected = selectedTime === option.id;
                            const Icon = option.icon;
                            return (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedTime(option.id)}
                                    className={`w-full rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 cursor-pointer relative border-2 ${isSelected
                                        ? 'border-[#1E5A54] bg-white shadow-md'
                                        : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-2xs'
                                        }`}
                                >
                                    {/* ICON BOX */}
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border text-base shadow-3xs ${option.color}`}>
                                        <Icon size={option.size} />
                                    </div>

                                    {/* LABEL */}
                                    <span className="flex-1 text-sm font-black text-slate-900 tracking-tight">
                                        {option.label}
                                    </span>

                                    {/* CUSTOM RADIO BUTTON INDICATOR */}
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-[#1E5A54]' : 'border-slate-300'}`}>
                                        {isSelected && (
                                            <div className="w-2 h-2 bg-[#1E5A54] rounded-full" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {/* CONTINUE BUTTON */}
                        <div className="pt-4">
                            <button
                                onClick={handleContinue}
                                className="w-full bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold py-4 rounded-full shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer text-xs sm:text-sm"
                            >
                                <span>Continue</span>
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </button>
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