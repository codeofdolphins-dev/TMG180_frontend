import React, { useState } from 'react'
import {
    Star, MessageSquare, Heart, BadgeCheck, Info,
    ChevronRight, Brain, Globe, Activity, Zap, Accessibility
} from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'


const NAV_LINK = [
    { label: "Find Support", endpoint: '/participant/find-support' },
    { label: "Sarah" }
]


// ─── Static Data ─────────────────────────────────────────────────────────────
const worker = {
    name: 'Sarah Miller',
    role: 'Specialist Care Provider',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    sessions: '120+',
    experience: '8+',
    isVerified: true,
    isAvailable: true,
    about: [
        'With over 8 years of dedicated experience in clinical support and NDIS environments, I specialize in providing holistic, person-centered care for individuals with complex needs. My approach is rooted in empathy and evidence-based practice, ensuring that every participant feels empowered to achieve their personal goals.',
        'I am passionate about creating a safe, supportive sanctuary for my clients. Whether it\'s managing early intervention strategies or navigating mental health support, I bring a calm, professional presence to every session.',
    ],
    expertise: [
        { label: 'Autism Support', Icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100' },
        { label: 'NDIS Navigation', Icon: Globe, color: 'text-teal-600', bg: 'bg-teal-50 border-teal-100' },
        { label: 'Mental Health', Icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50 border-rose-100' },
        { label: 'Early Intervention', Icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100' },
        { label: 'Physical Disability', Icon: Accessibility, color: 'text-sky-600', bg: 'bg-sky-50 border-sky-100' },
    ],
}

// Calendar week data — two rows shown in the design
const calendarDays = [
    { label: 'MO' }, { label: 'TU' }, { label: 'WE' },
    { label: 'TH' }, { label: 'FR' }, { label: 'SA' }, { label: 'SU' },
]
const week1 = [14, 15, 16, 17, 18, 19, 20]
const week2 = [21, 22, 23, 24, 25, 26, 27]
const TODAY = 19          // highlighted date
const unavailable = [14, 16, 20, 23, 26]   // greyed out / unavailable slots

// ─── Sub-components ───────────────────────────────────────────────────────────

const CalendarDay = ({ date }) => {
    const isToday = date === TODAY
    const isUnavailable = unavailable.includes(date)
    return (
        <div
            className={`
                w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${isToday
                    ? 'bg-secondary text-white shadow-md shadow-secondary/30 scale-110'
                    : isUnavailable
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-700 hover:bg-[#E6F4F1] hover:text-secondary cursor-pointer'
                }
            `}
        >
            {date}
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const WorkerProfile = () => {
    const [isSaved, setIsSaved] = useState(false)

    return (
        <main className="min-h-screen bg-slate-50">

            {/* ── Hero Banner ───────────────────────────────────────────── */}
            <section className="bg-linear-to-br from-[#EAF5F3] via-[#F0F8F6] to-[#E8F4F1] px-8 pt-6 pb-14">

                {/* Breadcrumb */}
                <Breadcrumb
                    options={NAV_LINK}
                />

                {/* Profile card grid */}
                <div className="flex items-center gap-10 max-w-4xl">

                    {/* Avatar with verification badge */}
                    <div className="relative shrink-0">
                        {/* Outer ring decoration */}
                        <div className="w-64 h-64 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/80 shadow-2xl shadow-secondary/10 overflow-hidden">
                            <img
                                src={worker.avatar}
                                alt={worker.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Verified Expert badge */}
                        {worker.isVerified && (
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white text-secondary text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg border border-[#D1EAE7] whitespace-nowrap">
                                <BadgeCheck size={14} strokeWidth={2.5} className="text-secondary" />
                                VERIFIED EXPERT
                            </div>
                        )}
                    </div>

                    {/* Info panel */}
                    <div className="space-y-5 flex-1">
                        {/* Status chip */}
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
                                Available Now
                            </span>
                        </div>

                        {/* Name & role */}
                        <div>
                            <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                {worker.name}
                            </h1>
                            <p className="text-slate-500 font-medium mt-1">{worker.role}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <span className="text-sm font-extrabold text-slate-800">{worker.rating}</span>
                            <span className="text-xs text-slate-400 font-medium">
                                ({worker.sessions} Sessions)
                            </span>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex items-center gap-3 pt-1">
                            {/* <button className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 active:scale-95 transition-all text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-secondary/20">
                                <MessageSquare size={16} strokeWidth={2} />
                                Message Sarah
                            </button> */}
                            <button
                                onClick={() => setIsSaved(!isSaved)}
                                className={`flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2 transition-all active:scale-95
                                    ${isSaved
                                        ? 'bg-rose-50 border-rose-200 text-rose-500'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-rose-200 hover:text-rose-500 hover:bg-rose-50'
                                    }`}
                            >
                                <Heart
                                    size={16}
                                    strokeWidth={2}
                                    className={isSaved ? 'fill-rose-500 text-rose-500' : ''}
                                />
                                {isSaved ? 'Saved' : 'Save to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Content Body ──────────────────────────────────────────── */}
            <div className="px-8 -mt-6 space-y-6 pb-12">

                {/* About Section */}
                <section className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                    <h2 className="text-base font-extrabold text-slate-800 mb-4">About Sarah</h2>
                    <div className="space-y-3">
                        {worker.about.map((para, i) => (
                            <p key={i} className="text-sm text-slate-500 leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Expertise + Availability grid */}
                <div className="grid grid-cols-5 gap-5">

                    {/* Areas of Expertise — 3 cols */}
                    <section className="col-span-3 bg-white rounded-2xl p-7 shadow-sm border border-slate-100 space-y-5">
                        <h2 className="text-base font-extrabold text-slate-800">Areas of Expertise</h2>

                        {/* Tag pills */}
                        <div className="flex flex-wrap gap-2.5">
                            {worker.expertise.map(({ label, Icon, color, bg }) => (
                                <span
                                    key={label}
                                    className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl border ${bg} ${color}`}
                                >
                                    <Icon size={13} strokeWidth={2.2} />
                                    {label}
                                </span>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-0 pt-2 border-t border-slate-50">
                            {[
                                { value: `${worker.experience}+`, label: 'YEARS EXP' },
                                { value: worker.sessions, label: 'SESSIONS' },
                                { value: worker.rating, label: 'RATING', star: true },
                            ].map(({ value, label, star }, i) => (
                                <div
                                    key={label}
                                    className={`flex-1 text-center ${i !== 0 ? 'border-l border-slate-100' : ''}`}
                                >
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-2xl font-black text-slate-900">{value}</span>
                                        {star && <Star size={14} className="text-amber-400 fill-amber-400" />}
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-widest mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Availability Calendar — 2 cols */}
                    <section className="col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-extrabold text-slate-800">Availability</h2>
                            <span className="text-[10px] font-bold bg-[#E6F4F1] text-secondary px-2.5 py-1 rounded-full tracking-wider">
                                AVAILABLE TODAY
                            </span>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 gap-0">
                            {calendarDays.map(({ label }) => (
                                <div key={label} className="text-center text-[10px] font-bold text-slate-400 py-1">
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* Week 1 */}
                        <div className="grid grid-cols-7 gap-0">
                            {week1.map((date) => <CalendarDay key={date} date={date} />)}
                        </div>

                        {/* Week 2 */}
                        <div className="grid grid-cols-7 gap-0">
                            {week2.map((date) => <CalendarDay key={date} date={date} />)}
                        </div>

                        {/* Note */}
                        <div className="flex items-start gap-2 pt-1">
                            <Info size={13} className="text-slate-400 mt-0.5 shrink-0" strokeWidth={2} />
                            <p className="text-[11px] text-slate-500 leading-relaxed">
                                Sarah is currently accepting new NDIS participants.
                            </p>
                        </div>

                        {/* CTA */}
                        <button className="w-full mt-1 bg-slate-50 hover:bg-[#E6F4F1] hover:text-secondary border border-slate-200 hover:border-[#C8E8E3] transition-all text-slate-700 font-bold text-xs py-3 rounded-xl">
                            View Full Schedule
                        </button>
                    </section>
                </div>

            </div>
        </main>
    )
}

export default WorkerProfile