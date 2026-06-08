import React, { useState } from 'react';

export default function CalendarPage() {
  const [activeMenu, setActiveMenu] = useState('Calendar');
  const [calendarView, setCalendarView] = useState('Week');

  // Calendar days data
  const days = [
    { name: "MON", date: "23", active: true },
    { name: "TUE", date: "24", active: false },
    { name: "WED", date: "25", active: false },
    { name: "THU", date: "26", active: false },
    { name: "FRI", date: "27", active: false }
  ];

  // Time slots data
  const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"];

  return (
    <div className="flex-1 flex overflow-hidden">

      {/* Scrollable middle calendar panel */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Calendar header controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Calendar</h1>
            <p className="text-slate-400 text-xs font-light">Manage your professional schedule with precision.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Day/Week/Month toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex space-x-1 text-xs font-bold shadow-3xs">
              {['Day', 'Week', 'Month'].map((v) => (
                <button
                  key={v}
                  onClick={() => setCalendarView(v)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${calendarView === v ? 'bg-white text-slate-800 shadow-3xs' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Month and year selector */}
            <div className="flex items-center bg-white border border-slate-200/80 rounded-xl p-1 shadow-3xs text-xs font-bold">
              <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400"><i className="fa-solid fa-chevron-left text-[10px]"></i></button>
              <span className="px-3 text-slate-800 text-center min-w-[90px]">October 2023</span>
              <button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400"><i className="fa-solid fa-chevron-right text-[10px]"></i></button>
            </div>

            <button className="bg-white border border-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl shadow-3xs hover:bg-slate-50 transition-colors cursor-pointer">
              Today
            </button>

            <button className="bg-[#1E5A54] hover:bg-secondary text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-[#1E5A54]/10 flex items-center space-x-1.5 transition-all transform active:scale-98 cursor-pointer">
              <i className="fa-solid fa-plus text-xs"></i>
              <span>Add Session</span>
            </button>
          </div>
        </div>

        {/* Calendar main grid layout (timeline grid) */}
        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs">

          {/* Day header row */}
          <div className="grid grid-cols-6 border-b border-slate-100 text-center bg-slate-50/40">
            <div className="p-4 border-r border-slate-100" /> {/* Time column blank space */}
            {days.map((day, idx) => (
              <div key={idx} className={`p-3 border-r border-slate-100/70 last:border-r-0 flex flex-col items-center justify-center space-y-1 ${day.active ? 'bg-slate-50/50' : ''}`}>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{day.name}</span>
                <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-black ${day.active ? 'bg-[#1E5A54] text-white shadow-sm shadow-[#1E5A54]/20' : 'text-slate-800'}`}>
                  {day.date}
                </span>
              </div>
            ))}
          </div>

          {/* Time slots and event grid rows */}
          <div className="divide-y divide-slate-100 relative">
            {timeSlots.map((time, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-6 min-h-[100px] relative">

                {/* Left time label */}
                <div className="p-3 text-right text-[10px] font-bold text-slate-400 border-r border-slate-100 tracking-wide select-none">
                  {time}
                </div>

                {/* 5-day grid cell columns */}
                {[...Array(5)].map((_, colIdx) => {
                  // Event placement positioning conditions (matching the image)
                  const isSupportCoordination = rowIdx === 1 && colIdx === 0; // Monday 09:00 AM
                  const isOccupationalTherapy = rowIdx === 2 && colIdx === 1; // Tuesday 10:00 AM
                  const isTeamSync = rowIdx === 1 && colIdx === 4;            // Friday 09:00 AM
                  const isProgressReview = rowIdx === 4 && colIdx === 2;       // Wednesday 12:00 PM

                  return (
                    <div key={colIdx} className="border-r border-slate-100/60 last:border-r-0 p-2 relative bg-white group hover:bg-slate-50/20 transition-colors">

                      {/* Event 1: Support Coordination */}
                      {isSupportCoordination && (
                        <div className="absolute inset-2 bg-linear-to-br from-emerald-50 to-teal-50/50 border-l-4 border-emerald-500 rounded-xl p-2.5 flex flex-col justify-between shadow-3xs group-hover:shadow-xs transition-all">
                          <div className="space-y-1">
                            <span className="text-[8px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-wide"><i className="fa-regular fa-video text-[7px]"></i> Online</span>
                            <span className="bg-emerald-500 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wide inline-block leading-none">Completed</span>
                            <h4 className="text-xs font-black text-slate-800 tracking-tight leading-snug pt-0.5">Support Coordination</h4>
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 block">09:00 - 10:30</span>
                        </div>
                      )}

                      {/* Event 2: Occupational Therapy */}
                      {isOccupationalTherapy && (
                        <div className="absolute inset-2 bg-linear-to-br from-blue-50 to-sky-50/50 border-l-4 border-blue-500 rounded-xl p-2.5 flex flex-col justify-between shadow-3xs group-hover:shadow-xs transition-all z-10">
                          <div className="space-y-1">
                            <span className="bg-blue-600 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wide inline-block leading-none">Ongoing</span>
                            <h4 className="text-xs font-black text-[#1E3A8A] tracking-tight leading-snug pt-0.5">Occupational Therapy</h4>
                          </div>
                          <span className="text-[10px] font-bold text-blue-700/80 block">10:30 - 12:30</span>
                          {/* Red dot & dashed line indicator */}
                          <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20">
                            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full ring-4 ring-rose-500/20 animate-ping absolute"></span>
                            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full ring-4 ring-rose-500/20"></span>
                            <div className="w-16 h-0.5 bg-rose-400/80 border-t border-dashed border-rose-500"></div>
                          </div>
                        </div>
                      )}

                      {/* Event 3: Progress Review */}
                      {isProgressReview && (
                        <div className="absolute inset-2 bg-linear-to-br from-purple-50 to-fuchsia-50/50 border-l-4 border-purple-500 rounded-xl p-2.5 flex flex-col justify-between shadow-3xs group-hover:shadow-xs transition-all">
                          <div className="space-y-1">
                            <span className="bg-purple-600 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wide inline-block leading-none">Upcoming</span>
                            <h4 className="text-xs font-black text-purple-900 tracking-tight leading-snug pt-0.5">Progress Review</h4>
                            <span className="text-[8px] font-bold text-purple-600 flex items-center gap-1 uppercase tracking-wide"><i className="fa-regular fa-video text-[7px]"></i> Online</span>
                          </div>
                          <span className="text-[10px] font-bold text-purple-700 block">12:15 - 01:15</span>
                        </div>
                      )}

                      {/* Event 4: Team Sync */}
                      {isTeamSync && (
                        <div className="absolute inset-2 bg-slate-50 border-l-4 border-slate-100 rounded-xl p-2.5 flex flex-col justify-between shadow-3xs border border-slate-100">
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-black text-slate-700 tracking-tight leading-snug">Team Sync</h4>
                            <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wide"><i className="fa-regular fa-users text-[8px]"></i> Meeting</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 block">09:00 - 10:00</span>
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right widget panel (sidebar) */}
      <div className="w-80 bg-white border-l border-slate-100 flex flex-col overflow-y-auto p-6 space-y-6 shrink-0 h-full">

        {/* Today's overview widget */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 space-y-4 shadow-3xs">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Overview</h4>

          <div className="space-y-3">
            {/* Sessions counter */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-between shadow-3xs">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-50 text-teal-600 p-2 rounded-xl border border-teal-100/50"><i className="fa-regular fa-calendar-lines"></i></div>
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">SESSIONS</span>
                  <span className="text-base font-black text-slate-900 tracking-tight block">04</span>
                </div>
              </div>
              <i className="fa-solid fa-trend-up text-emerald-500 text-sm px-1"></i>
            </div>

            {/* Billable hours */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-between shadow-3xs">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-50 text-amber-600 p-2 rounded-xl border border-amber-100/50"><i className="fa-regular fa-clock"></i></div>
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">BILLABLE</span>
                  <span className="text-base font-black text-slate-900 tracking-tight block">6.5h</span>
                </div>
              </div>
              <i className="fa-regular fa-circle-info text-slate-300 text-sm px-1"></i>
            </div>
          </div>

          {/* Next priority sub-section */}
          <div className="border-t border-slate-200/60 pt-3 space-y-1">
            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Next Priority</span>
            <h5 className="font-black text-slate-800 text-sm tracking-tight">Progress Review</h5>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 pt-0.5"><i className="fa-regular fa-hourglass-start text-[10px]"></i> Starts in 45 mins</p>
          </div>
        </div>

        {/* Upcoming events widget */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming</h4>
            <button className="text-[10px] font-black text-[#1E5A54] hover:underline uppercase tracking-wider cursor-pointer">View All</button>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-3xs space-y-3 relative group overflow-hidden">
            <span className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500"></span>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 block tracking-wide uppercase">Tomorrow, 10:00 AM</span>
              <h5 className="font-black text-slate-800 text-sm tracking-tight">Physiotherapy Support</h5>
            </div>

            {/* Participant assigned profile */}
            <div className="flex items-center space-x-2.5 pt-1">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                <img src="https://images.unsplash.com/photo-1594824813573-246434e3b96f?auto=format&fit=crop&q=80&w=100" alt="Participant" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-bold text-slate-600">Dr. Sarah Chen</span>
            </div>
          </div>
        </div>

        {/* Quick action: room booking widget */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-3xs space-y-2.5">
          <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs py-3 rounded-xl shadow-3xs flex items-center justify-center space-x-2 transition-colors cursor-pointer">
            <i className="fa-regular fa-door-open text-slate-400 text-sm"></i>
            <span>Book a Room</span>
          </button>
          <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs py-3 rounded-xl shadow-3xs flex items-center justify-center space-x-2 transition-colors cursor-pointer">
            <i className="fa-regular fa-calendar-xmark text-slate-400 text-sm"></i>
            <span>Block Time</span>
          </button>
        </div>

        {/* Productivity tip widget */}
        <div className="bg-[#1E5A54] rounded-2xl p-4 text-white space-y-3 shadow-xs relative overflow-hidden flex-1 flex flex-col justify-end min-h-[140px]">
          <div className="absolute -right-6 -top-6 text-white/5 text-7xl font-bold pointer-events-none"><i class="fa-solid fa-lightbulb"></i></div>
          <div className="space-y-1.5 relative z-10">
            <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center text-amber-300 shadow-3xs"><i className="fa-regular fa-lightbulb text-sm"></i></div>
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300 pt-1">Productivity Tip</h4>
            <p className="text-slate-100/90 text-xs font-light leading-relaxed tracking-tight">
              Friday afternoon looks clear. Ideal for finalizing your weekly clinical notes and NDIS reporting.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}