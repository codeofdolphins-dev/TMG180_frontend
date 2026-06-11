import React from 'react'
import { Users, Clock, CheckCircle2, ChevronRight } from 'lucide-react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { GiScrollQuill } from 'react-icons/gi'
import { AiFillBell, AiOutlineWarning } from 'react-icons/ai'
import { FaStarOfLife, FaUserPlus } from 'react-icons/fa'
import { PiSealCheckFill } from 'react-icons/pi'
import { TbBellPlusFilled } from 'react-icons/tb'
import { MdNoteAdd, MdOutlineChecklistRtl } from 'react-icons/md'
import { HiCheckBadge } from 'react-icons/hi2'
import { RxCountdownTimer } from 'react-icons/rx'

/* ──────────────────────── data ──────────────────────── */

const statCards = [
    {
        label: 'Total Workers',
        value: '1,284',
        icon: Users,
        iconBg: 'bg-teal-700',
        iconColor: 'text-white',
        badge: '+12%',
        badgeBg: 'bg-teal-100 text-teal-700',
    },
    {
        label: 'Pending Onboarding',
        value: '42',
        icon: Clock,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
    },
    {
        label: 'Ready to Publish',
        value: '18',
        icon: IoMdCheckmarkCircleOutline,
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
    {
        label: 'Requires Compliance',
        value: '7',
        icon: AiOutlineWarning,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500',
    },
    {
        label: 'Policies Pending',
        value: '3',
        icon: GiScrollQuill,
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-500',
    },
    {
        label: 'Incidents Open',
        value: '5',
        icon: AiOutlineWarning,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
    },
]

const quickActions = [
    { label: 'Review Onboarding', icon: FaUserPlus, bg: 'bg-teal-50' },
    { label: 'Verify Compliance', icon: PiSealCheckFill, bg: 'bg-emerald-50' },
    { label: 'Log Incident', icon: TbBellPlusFilled, bg: 'bg-amber-50' },
    { label: 'Issue Policy', icon: MdNoteAdd, bg: 'bg-blue-50' },
]

const activityItems = [
    {
        icon: HiCheckBadge,
        iconBg: 'bg-emerald-50',
        iconColor: 'text-primary',
        title: 'Worker compliance verified',
        time: '2 mins ago',
        desc: 'System administrator verified the quarterly compliance documents for Sector 7 workers.',
    },
    {
        icon: RxCountdownTimer,
        iconBg: 'bg-blue-50',
        iconColor: 'text-gray-600 -scale-x-100',
        title: 'Policy updated',
        time: '1 hour ago',
        desc: 'Health and Safety Policy (v2.4) has been updated and sent for group distribution.',
    },
    {
        icon: AiFillBell,
        iconBg: 'bg-red-50',
        iconColor: 'text-red-500',
        title: 'New Incident Reported',
        time: '3 hours ago',
        desc: 'High severity equipment failure reported at Central Distribution Hub.',
    },
]

const complianceAlerts = [
    { label: 'Update Required', value: '7 Workers Expired', color: 'border-red-400', textColor: 'text-red-500' },
    { label: 'Expiry (7 Days)', value: '14 Pending Renewals', color: 'border-amber-400', textColor: 'text-amber-500' },
    { label: 'Expiry (30 Days)', value: '32 Approaching Audit', color: 'border-blue-400', textColor: 'text-blue-500' },
]

const onboardingSteps = [
    { label: 'DRAFT', count: '12', sub: 'Workers in Draft' },
    { label: 'IN PROGRESS', count: '24', sub: 'Active Application' },
    { label: 'READY', count: '18', sub: 'Final Review' },
    { label: 'PUBLISHED', count: '1,230', sub: 'Live in System' },
]


/* ──────────────────────── component ──────────────────────── */

const AdminDashboard = () => {
    return (
        <div className="p-8 max-w-350 mx-auto space-y-6">

            {/* ───── Header ───── */}
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                <p className="text-slate-500 text-sm mt-1">System health and worker lifecycle governance</p>
            </div>

            {/* ───── Stat Cards Row ───── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {statCards.map((card) => {
                    const Icon = card.icon
                    return (
                        <div
                            key={card.label}
                            className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        >
                            {/* subtle gradient shimmer on hover */}
                            <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="flex items-center justify-between">
                                <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
                                    <Icon size={24} />
                                </div>
                                {card.badge && (
                                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${card.badgeBg}`}>
                                        {card.badge}
                                    </span>
                                )}
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{card.value}</p>
                                <p className="text-xs text-slate-400 mt-0.5 font-medium">{card.label}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* ───── Middle Section: Onboarding + Quick Actions ───── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Onboarding Status Overview */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-6 flex flex-col gap-16 h-fit">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-slate-800">Onboarding Status Overview</h2>
                        <button className="text-sm text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1 transition-colors">
                            View Detailed Flow
                        </button>
                    </div>

                    {/* Step labels */}
                    <div className="flex items-center justify-between px-2">
                        {onboardingSteps.map((step, i) => (
                            <span
                                key={step.label}
                                className={`text-xs font-bold tracking-wide ${i === onboardingSteps.length - 1 ? 'text-teal-600' : 'text-slate-500'}`}
                            >
                                {step.label}
                            </span>
                        ))}
                    </div>

                    {/* Progress Line */}
                    <div className="relative flex items-center px-2">
                        {/* background line */}
                        <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-1 bg-slate-200 rounded-full" />
                        {/* active line (75% for 3 of 4 steps) */}
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 h-1 bg-teal-600 rounded-full" style={{ width: '72%' }} />

                        <div className="relative flex items-center justify-between w-full">
                            {onboardingSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-3 transition-all
                                        ${i < 3
                                            ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-200'
                                            : 'bg-white text-slate-400 border-slate-200'
                                        }
                                    `}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Counts row */}
                    <div className={`grid grid-cols-${onboardingSteps.length} px-2`}>
                        {onboardingSteps.map((step, idx) => (
                            <div key={step.sub} className="text-center border-r-2 border-slate-100 last:border-r-0 px-5">
                                <p className={`text-2xl font-extrabold ${onboardingSteps.length === idx + 1 ? "text-primary" : "text-slate-800"}`}>{step.count}</p>
                                <p className="text-xs text-slate-400 font-medium mt-0.5">{step.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-100 rounded-xl border border-slate-200 p-6">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Actions</h3>
                    <div className="space-y-4">
                        {quickActions.map((action) => {
                            const Icon = action.icon
                            return (
                                <button
                                    key={action.label}
                                    className="flex items-center gap-3 w-full px-4 py-3 bg-white rounded-full transition-all group text-left cursor-pointer hover:shadow"
                                >
                                    <div className={`w-9 h-9 text-primary flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                        <Icon size={22} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{action.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* ───── Activity + Right Panel ───── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Recent System Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-10">Recent System Activity</h2>
                    <div className="space-y-10">
                        {activityItems.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <div key={idx} className="flex gap-4 group border-b border-slate-100 pb-10 last:border-0 last:pb-0 h-fit">
                                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0 group-hover:scale-105 transition-transform`}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                                            <span className="text-xs text-slate-400 font-medium shrink-0 ml-3">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right Sidebar: Compliance Alerts + Incidents */}
                <div className="space-y-6">

                    {/* Compliance Alerts */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-sm font-extrabold text-slate-800">Compliance Alerts</h3>
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        </div>
                        <div className="space-y-3">
                            {complianceAlerts.map((alert) => (
                                <div key={alert.label} className={`flex items-center gap-3 border-l-5 ${alert.color} pl-5 py-1`}>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">{alert.label}</p>
                                        <p className={`text-xs font-medium ${alert.textColor}`}>{alert.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Incidents */}
                    <div className="bg-white rounded-xl border border-slate-100 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-extrabold text-slate-800">Incidents</h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">Real-Time</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between rounded-full bg-rose-50 border border-rose-100 px-5 py-2">
                                <div className="flex items-center gap-2">
                                    <FaStarOfLife size={16} className="text-red-500" />
                                    <span className="text-sm font-medium text-slate-600">High Severity</span>
                                </div>
                                <span className="text-2xl font-bold text-red-500">02</span>
                            </div>
                            <div className="h-px bg-slate-100" />
                            <div className="flex items-center justify-between rounded-full bg-slate-100 border border-slate-200 px-5 py-2">
                                <div className="flex items-center gap-2">
                                    <MdOutlineChecklistRtl size={24} />
                                    <span className="text-sm font-medium text-slate-600">Moderate</span>
                                </div>
                                <span className="text-2xl font-bold">03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ───── Bottom Row: Publish Readiness + Learning Audits + Policy & Learning ───── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Publish Readiness */}
                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white relative overflow-hidden group hover:shadow-lg hover:shadow-teal-200/40 transition-all duration-300">
                    {/* decorative circle */}
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/10 group-hover:scale-110 transition-transform" />
                    <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-white/10" />

                    <h3 className="text-lg font-bold mb-2">Publish Readiness</h3>
                    <p className="text-sm text-teal-100 leading-relaxed mb-5">
                        18 workers have completed all mandatory checks and are ready for system activation.
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all cursor-pointer">
                        Process Batch <ChevronRight size={16} />
                    </button>
                </div>

                {/* Learning Audits */}
                <div className="bg-white rounded-xl border border-slate-100 p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    {/* decorative checkmark */}
                    <div className="absolute -right-4 -bottom-4 text-teal-100 opacity-60 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 size={80} strokeWidth={1} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2">Learning Audits</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">
                        3 learning modules are pending administrative sign-off for the next quarter.
                    </p>
                    <div className="flex items-center gap-3">
                        {/* avatar stack */}
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-teal-200 border-2 border-white overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                                +2
                            </div>
                        </div>
                        <button className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">Sign-off All</button>
                    </div>
                </div>

                {/* Policy & Learning */}
                <div className="bg-gray-200 rounded-xl p-6 text-primary relative overflow-hidden group hover:shadow-lg hover:shadow-slate-400/30 transition-all duration-300">
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5 group-hover:scale-125 transition-transform" />

                    <h3 className="text-sm font-bold mb-4">Policy & Learning</h3>

                    {/* System Completion */}
                    <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">System Completion</span>
                            <span className="text-lg font-bold">94.2%</span>
                        </div>
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-1000"
                                style={{ width: '94.2%' }}
                            />
                        </div>
                    </div>

                    <p className="text-xs leading-relaxed">
                        System-wide learning modules have seen a +2.2% increase in completion rates this month.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard