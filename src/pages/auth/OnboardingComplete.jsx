import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineCalendarToday, MdOutlinePsychology } from 'react-icons/md';

const summaryItems = [
  {
    label: "ACCOUNT HOLDER",
    value: "Alex Thompson",
    icon: FaRegUser,
    size: 18,
    bgColor: "bg-sky-200 text-sky-900"
  },
  {
    label: "FOCUS AREA",
    value: "Mindful Presence",
    icon: MdOutlinePsychology,
    size: 26,
    bgColor: "bg-purple-200 text-purple-900"
  },
  {
    label: "SESSION FREQUENCY",
    value: "3 Times Weekly",
    icon: MdOutlineCalendarToday,
    size: 18,
    bgColor: "bg-teal-200 text-primary"
  }
];


export default function OnboardingComplete() {
  const handleDoneSubmit = () => {
    alert("🎉 Onboarding complete! Welcome to your new workspace.");
  };


  return (
    <div className="min-h-screen bg-white flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

      {/* MAIN SPLIT LAYOUT AREA */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12">

        {/* LEFT BANNER PANEL */}
        <div className="bg-[#EAEFF4] md:col-span-5 flex flex-col justify-start px-8 sm:px-16 lg:px-24 py-16">

          <div className="w-full flex flex-col justify-between h-full md:pb-30 space-y-10">
            <div className="space-y-4">
              {/* ONBOARDING CAPSULE TAG */}
              <div>
                <span className="bg-sky-200 text-primary text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Onboarding
                </span>
              </div>

              {/* MAIN HEADLINE */}
              <div className="mt-8 space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  You're all set.
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  We respect your boundaries. Let us know when you feel most present so we can match you with the right support window.
                </p>
              </div>
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

        {/* RIGHT WINDOW */}
        <div className="md:col-span-7 w-full flex flex-col items-start justify-start md:space-y-22 p-6 sm:p-12 lg:p-16 relative">

          {/* Header section */}
          <div className="w-full p-2">

            {/* TOP PROGRESS BAR (Onboarding Complete 100%) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-base font-medium uppercase tracking-wider text-primary">
                <span>Onboarding Complete</span>
                <span className="text-[#1E5A54]">100%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#1E5A54] h-full w-full rounded-full" />
              </div>
            </div>
          </div>

          {/* main section */}
          <div className="max-w-lg w-full space-y-10">

            {/* SAMARY CARDS LIST BUNCH */}
            <div className="space-y-3.5">
              {summaryItems.map((item, idx) => {
                const Icon = item.icon;

                return < div
                  key={idx}
                  className="w-full bg-white border border-slate-100/80 rounded-2xl p-4 flex items-center gap-4 shadow-3xs hover:border-slate-200/80 transition-colors"
                >
                  {/* ICON BOX */}
                  < div className={`w-10 h-10 rounded-full flex items-center justify-center text-base shadow-3xs ${item.bgColor}`}>
                    <Icon size={item.size} className='-scale-x-100' />
                  </div>

                  {/* TEXT DETAILS */}
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-slate-600 uppercase tracking-widest block">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-slate-800 tracking-tight block">
                      {item.value}
                    </span>
                  </div>
                </div>
              })}
            </div>

            {/* ACTION BUTTON SECTION */}
            <div className="pt-4">
              <button
                onClick={handleDoneSubmit}
                className="w-full bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold py-4 rounded-full shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Done</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>

          </div>

          {/* FOOTER COPYRIGHT & LINKS section */}
          <div className="absolute bottom-8 w-full max-w-xl px-4 flex items-center justify-between text-[11px] font-bold text-slate-400/80 select-none">
            <div>&copy; 2026 The Breathable Interface</div>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div >
      </main >

    </div >
  );
}