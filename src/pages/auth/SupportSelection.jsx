import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GiThreeLeaves } from 'react-icons/gi';
import { GoLightBulb } from 'react-icons/go';
import { useNavigate } from 'react-router';


const supportAreas = [
  {
    title: "Mental clarity",
    desc: "Reducing mental fog and finding focus through guided exercises.",
    icon: GoLightBulb,
    color: "bg-white text-primary"
  },
  {
    title: "Emotional support",
    desc: "Tools to help navigate complex emotions and find inner balance.",
    icon: FaRegHeart,
    color: "bg-white text-primary"
  },
  {
    title: "Personal growth",
    desc: "Structured paths for self-discovery and long-term development.",
    icon: FaArrowTrendUp,
    color: "bg-white text-primary"
  },
  {
    title: "Quiet reflection",
    desc: "Creating space for stillness and mindfulness in a busy world.",
    icon: GiThreeLeaves,
    color: "bg-white text-primary"
  }
];


export default function SupportSelection() {
  const navigate = useNavigate();

  // Array State
  const [selectedAreas, setSelectedAreas] = useState(['Mental clarity']);

  // card select toggle function
  const handleCardSelect = (title) => {
    if (selectedAreas.includes(title)) {
      setSelectedAreas(selectedAreas.filter(item => item !== title));
    } else {
      setSelectedAreas([...selectedAreas, title]);
    }
  };

  const handleContinue = () => {
    navigate("/auth/onboarding");
  };


  return (
    <div className="min-h-screen bg-white flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

      {/* MAIN SPLIT LAYOUT AREA */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12">

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
                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  What areas of support <br />are you looking for today?
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
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

        {/* RIGHT SELECTION WINDOW */}
        <div className="relative md:col-span-7 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16">

          {/* cards matrix container */}
          <div className="w-full max-w-xl bg-white p-2 space-y-6 mb-5">

            {/* 4 cards grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportAreas.map((area) => {
                const isSelected = selectedAreas.includes(area.title);
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    onClick={() => handleCardSelect(area.title)}
                    className={`bg-gray-100 rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all duration-300 cursor-pointer relative min-h-[140px] select-none shadow ${isSelected
                      ? 'border-[#1E5A54] ring-1 ring-[#1E5A54]'
                      : 'hover:border-slate-300 hover:shadow-2xs'
                      }`}
                  >
                    {/* ICON BOX AND CHECK MARK TOGGLE */}
                    <div className="flex items-center justify-between w-full">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow ${area.color}`}>
                        <Icon size={24} />
                      </div>

                      {/* CHECK CIRCLE INDICATOR */}
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-[#1E5A54]' : 'border-slate-200'
                        }`}>
                        {isSelected && (
                          <div className="w-2 h-2 bg-[#1E5A54] rounded-full" />
                        )}
                      </div>
                    </div>

                    {/* TITLE AND DESC */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-black text-slate-900 tracking-tight leading-none">
                        {area.title}
                      </h3>
                      <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONTINUE & SKIP BUTTONS */}
            <div className="pt-2 space-y-4 text-center">
              <button
                onClick={handleContinue}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-full shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Continue</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>

              <button
                onClick={() => alert('⏩ Onboarding step skipped.')}
                className="text-xs font-extrabold tracking-widest text-slate-300 hover:text-slate-500 uppercase transition-colors cursor-pointer py-2 px-4"
              >
                Skip <i className="fa-solid fa-forward text-[10px] ml-0.5"></i>
              </button>
            </div>

          </div>

          {/* FOOTER COPYRIGHT & LINKS */}
          <div className="md:absolute bottom-8 w-full max-w-xl px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] font-bold text-slate-400/80 select-none">
            <div>&copy; 2026 The Breathable Interface</div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}