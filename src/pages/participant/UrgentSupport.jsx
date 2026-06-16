import React from 'react'
import { Phone, Info } from 'lucide-react'
import { FaStarOfLife } from 'react-icons/fa'

// ─── Data ────────────────────────────────────────────────────────────────────

const immediateSteps = [
    {
        number: 1,
        title: 'Breathe:',
        description: 'Inhale 4s, hold 4s, exhale 4s.',
    },
    {
        number: 2,
        title: 'Find Safety:',
        description: 'Move to a quiet, familiar space.',
    },
    {
        number: 3,
        title: 'Reach Out:',
        description: 'Tell someone you trust.',
    },
]

const helplines = [
    {
        name: 'Lifeline',
        description: 'Crisis support and suicide prevention.',
        number: '13 11 14',
        color: 'text-[#206A63]',
    },
    {
        name: 'Beyond Blue',
        description: 'Anxiety and depression support.',
        number: '1300 22 4636',
        color: 'text-[#206A63]',
    },
    {
        name: '1800RESPECT',
        description: 'Domestic and sexual violence support.',
        number: '1800 737 732',
        color: 'text-[#206A63]',
    },
]

// ─── Component ───────────────────────────────────────────────────────────────

const UrgentSupport = () => {
    return (
        <main className="p-8 space-y-8 max-w-5xl mx-auto">

            {/* ── Header ───────────────────────────────────────────────── */}
            <section className="space-y-2">
                {/* Badge */}
                <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full text-[#A63040] bg-[#ffdce1] shadow">
                    Urgent Assistance
                </span>

                {/* Hero text + decorative "Peace of Mind" side text */}
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <h1 className="text-xl font-extrabold text-slate-900">
                            You are not alone. Help is available right now.
                        </h1>
                        <p className="text-sm text-slate-500">
                            If you are in immediate danger or experiencing a crisis, please use the contacts below.
                        </p>
                    </div>

                    {/* Decorative side label */}
                    <div className="flex items-center gap-3 shrink-0 ml-12 mt-1">
                        <div className="w-px h-12 bg-slate-300 rounded-full" />
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
                            Peace of Mind
                        </span>
                    </div>
                </div>
            </section>

            {/* ── Emergency card + Immediate Steps ────────────────────── */}
            <section className="grid grid-cols-5 gap-6">

                {/* Emergency Services card — spans 3 cols */}
                <div className="col-span-3 bg-[#FDE8EA] rounded-3xl p-7 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
                    {/* Subtle circle decoration */}
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#F5C6CB]/40 pointer-events-none" />

                    <div className="flex items-start gap-4">
                        {/* Icon badge */}
                        <div className="w-11 h-11 rounded-full bg-[#A63040] flex items-center justify-center shrink-0 shadow-md">
                            <FaStarOfLife size={20} className="text-white" />
                        </div>

                        <div>
                            <h2 className="text-base font-extrabold text-[#7B2333]">
                                Emergency Services
                            </h2>
                            <p className="text-sm text-[#5C2028] mt-1 leading-relaxed max-w-xs">
                                If you or someone else is in immediate physical danger, call emergency services immediately.
                            </p>
                        </div>
                    </div>

                    {/* Call button */}
                    <div className="mt-6 flex justify-end relative z-10">
                        <a
                            href="tel:000"
                            className="flex items-center gap-2 bg-[#7B2333] hover:bg-[#6A1C2A] active:scale-95 transition-all text-white font-bold text-sm px-7 py-3 rounded-full shadow-lg shadow-[#A63040]/30"
                        >
                            <Phone size={15} strokeWidth={2.5} />
                            <span>Call 000</span>
                        </a>
                    </div>
                </div>

                {/* Immediate Steps card — spans 2 cols */}
                <div className="col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-5">
                        <Info size={17} className="text-[#206A63]" strokeWidth={2.2} />
                        <h3 className="text-sm font-extrabold text-slate-800">Immediate Steps</h3>
                    </div>

                    <ol className="space-y-4">
                        {immediateSteps.map((step) => (
                            <li key={step.number} className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {step.number}
                                </span>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    <span className="font-bold text-slate-800">{step.title}</span>{' '}
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── National Crisis Helplines ────────────────────────────── */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-extrabold text-slate-900">
                        National Crisis Helplines
                    </h2>
                    <span className="text-xs font-semibold text-slate-400">Available 24/7</span>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    {helplines.map((line) => (
                        <div
                            key={line.name}
                            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
                        >
                            <h4 className={`text-sm font-extrabold ${line.color}`}>
                                {line.name}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1.5 mb-4 leading-relaxed">
                                {line.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <a
                                    href={`tel:${line.number.replace(/\s/g, '')}`}
                                    className={`text-sm font-extrabold ${line.color} hover:underline`}
                                >
                                    {line.number}
                                </a>
                                <a
                                    href={`tel:${line.number.replace(/\s/g, '')}`}
                                    className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-[#E6F4F1] transition-colors flex items-center justify-center"
                                    aria-label={`Call ${line.name}`}
                                >
                                    <Phone size={14} className={line.color} strokeWidth={2.2} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}

export default UrgentSupport