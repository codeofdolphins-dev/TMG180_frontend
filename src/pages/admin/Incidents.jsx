import React, { useState } from 'react'
import {
    Filter, Download, ListChecks, Search, ChevronDown,
    ChevronLeft, ChevronRight, ArrowRight, MoreHorizontal,
    AlertTriangle, ShieldAlert, ClipboardList, Eye,
    FileText, UserPlus, History, BookOpen, Info
} from 'lucide-react'
import { LuFileText } from 'react-icons/lu'
import { MdGavel } from 'react-icons/md'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { AiOutlineWarning } from 'react-icons/ai'
import BasicStatCard from '../../components/admin/BasicStatCard'
import { TbRosetteDiscountCheck } from 'react-icons/tb'

/* ─────────────────────────── data ─────────────────────────── */

const statCards = [
    {
        id: 'total',
        value: '1,284',
        label: 'Total Reports',
        icon: LuFileText,
        iconColor: 'text-teal-600',
        iconBg: 'bg-teal-50',
    },
    {
        id: 'open',
        value: '42',
        label: 'Open Incidents',
        icon: AiOutlineWarning,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50',
    },
    {
        id: 'high',
        value: '08',
        label: 'High Severity',
        icon: MdGavel,
        iconColor: 'text-rose-500',
        iconBg: 'bg-rose-50',
    },
    {
        id: 'review',
        value: '15',
        label: 'Under Review',
        icon: Eye,
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-50',
    },
    {
        id: 'resolved',
        value: '1,219',
        label: 'Resolved',
        icon: IoCheckmarkCircleOutline,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
    },
]

const incidents = [
    {
        id: 'INC-9281-B',
        type: 'Safety Violation',
        typeIcon: ShieldAlert,
        typeIconColor: 'text-rose-500',
        severity: 'CRITICAL',
        severityColor: 'bg-rose-100 text-rose-600 border border-rose-200',
        worker: '#WRK-402',
        workerBg: 'bg-teal-600',
        status: 'Urgent Action',
        statusColor: 'text-rose-600',
        statusDot: 'bg-rose-500',
    },
    {
        id: 'INC-9275-C',
        type: 'Policy Breach',
        typeIcon: ShieldAlert,
        typeIconColor: 'text-amber-500',
        severity: 'MEDIUM',
        severityColor: 'bg-amber-100 text-amber-600 border border-amber-200',
        worker: '#WRK-812',
        workerBg: 'bg-purple-500',
        status: 'In Review',
        statusColor: 'text-amber-600',
        statusDot: 'bg-amber-400',
    },
    {
        id: 'INC-9270-A',
        type: 'Site Feedback',
        typeIcon: ClipboardList,
        typeIconColor: 'text-slate-500',
        severity: 'LOW',
        severityColor: 'bg-emerald-100 text-emerald-600 border border-emerald-200',
        worker: '#WRK-221',
        workerBg: 'bg-rose-400',
        status: 'Acknowledged',
        statusColor: 'text-slate-500',
        statusDot: 'bg-slate-400',
    },
    {
        id: 'INC-9265-M',
        type: 'Operational Issue',
        typeIcon: AlertTriangle,
        typeIconColor: 'text-orange-500',
        severity: 'MEDIUM',
        severityColor: 'bg-amber-100 text-amber-600 border border-amber-200',
        worker: '#WRK-992',
        workerBg: 'bg-slate-500',
        status: 'In Investigation',
        statusColor: 'text-blue-600',
        statusDot: 'bg-blue-500',
    },
]

const pendingReviews = [
    {
        id: 1,
        icon: FileText,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-500',
        title: 'Worker Incident Report #8821',
        desc: 'Reported 2 hours ago by site lead',
    },
    {
        id: 2,
        icon: ShieldAlert,
        iconBg: 'bg-teal-50',
        iconColor: 'text-teal-600',
        title: 'Safety Protocol Update',
        desc: 'Requires admin sign-off',
    },
    {
        id: 3,
        icon: TbRosetteDiscountCheck,
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-500',
        title: 'Onboarding Certification',
        desc: '5 documents pending validation',
    },
]

const quickActions = [
    { id: 'onboarding', label: 'Review Onboarding', icon: UserPlus },
    { id: 'incidents', label: 'Open Incidents', icon: History },
    { id: 'policies', label: 'Manage Policies', icon: BookOpen },
]

/* ─────────────────────────── component ─────────────────────────── */

const Incidents = () => {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 11

    return (
        <div className="p-8 space-y-6">

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* ════ Left: Incidents Table ════ */}
                <div className="lg:col-span-8 space-y-4">

                    {/* ── Header ── */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                                Incidents &<br />Feedback
                            </h1>
                            <p className="text-slate-500 text-sm mt-2 max-w-xs leading-relaxed">
                                Review reported incidents and maintain governance oversight
                            </p>
                        </div>

                        <div className="flex items-start gap-4 mt-1">
                            {/* Action buttons */}
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                                    <Filter size={14} />
                                    Filter
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                                    <Download size={14} />
                                    Export Report
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 shadow-md shadow-teal-200/50 hover:shadow-none transition-all cursor-pointer">
                                    <ListChecks size={15} />
                                    Review Queue
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Stat Cards ── */}
                    <div className="grid grid-cols-5 gap-4">
                        {statCards.map((card) => {
                            const Icon = card.icon
                            return <BasicStatCard
                                key={card.id}
                                Icon={Icon}
                                {...card}
                            />
                        })}
                    </div>

                    {/* Filter bar */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Search */}
                        <div className="relative flex-1 min-w-48">
                            <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by ID or keywords..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                            />
                        </div>

                        {/* Dropdowns */}
                        {['Status: All', 'Severity: All', 'Type: All'].map((label) => (
                            <button
                                key={label}
                                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:border-slate-300 transition-colors cursor-pointer whitespace-nowrap"
                            >
                                {label}
                                <ChevronDown size={13} className="text-slate-400" />
                            </button>
                        ))}

                        <button className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                            <span className="text-teal-600 font-bold">↓</span> Sort: Newest
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    {['CASE ID', 'INCIDENT TYPE', 'SEVERITY', 'WORKER REFERENCE', 'STATUS'].map((col) => (
                                        <th
                                            key={col}
                                            className="text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider px-5 py-3.5"
                                        >
                                            {col}
                                        </th>
                                    ))}
                                    <th className="w-8" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {incidents.map((incident) => {
                                    const TypeIcon = incident.typeIcon
                                    return (
                                        <tr
                                            key={incident.id}
                                            className="hover:bg-slate-50/70 transition-colors group cursor-pointer"
                                        >
                                            {/* Case ID */}
                                            <td className="px-5 py-4">
                                                <span className="text-xs font-bold text-teal-600 font-mono">
                                                    {incident.id}
                                                </span>
                                            </td>

                                            {/* Incident Type */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <TypeIcon size={15} className={incident.typeIconColor} />
                                                    <span className="text-xs font-semibold text-slate-700">
                                                        {incident.type}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Severity */}
                                            <td className="px-5 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${incident.severityColor}`}>
                                                    {incident.severity}
                                                </span>
                                            </td>

                                            {/* Worker Reference */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-7 h-7 rounded-full ${incident.workerBg} flex items-center justify-center`}>
                                                        <span className="text-white text-[9px] font-bold">W</span>
                                                    </div>
                                                    <span className="text-xs font-semibold text-slate-600">
                                                        {incident.worker}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Status */}
                                            <td className="px-5 py-4">
                                                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${incident.statusColor}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${incident.statusDot}`} />
                                                    {incident.status}
                                                </span>
                                            </td>

                                            {/* Menu */}
                                            <td className="px-3 py-4">
                                                <button className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all cursor-pointer opacity-0 group-hover:opacity-100">
                                                    <MoreHorizontal size={13} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 bg-slate-50/50">
                            <p className="text-xs text-slate-400 font-medium">
                                Showing 1 to 4 of 42 active cases
                            </p>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all cursor-pointer"
                                >
                                    <ChevronLeft size={13} />
                                </button>

                                {[1, 2, 3].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-7 h-7 rounded-full text-xs font-bold transition-all cursor-pointer ${currentPage === page
                                            ? 'bg-teal-700 text-white shadow-sm'
                                            : 'border border-slate-200 text-slate-500 hover:border-slate-300'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <span className="text-slate-400 text-xs px-1">...</span>

                                <button
                                    onClick={() => setCurrentPage(11)}
                                    className={`w-7 h-7 rounded-full text-xs font-bold transition-all cursor-pointer ${currentPage === 11
                                        ? 'bg-teal-700 text-white shadow-sm'
                                        : 'border border-slate-200 text-slate-500 hover:border-slate-300'
                                        }`}
                                >
                                    11
                                </button>

                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all cursor-pointer"
                                >
                                    <ChevronRight size={13} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ════ Right Sidebar ════ */}
                <div className="lg:col-span-4 space-y-4">

                    {/* ── Critical Alert Card ── */}
                    <div className="w-52 bg-[#9F403D] rounded-2xl p-4 text-white relative overflow-hidden shrink-0">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10" />
                        <div className="flex items-center gap-1.5 mb-2">
                            <AlertTriangle size={18} className="text-rose-200" />
                            <span className="text-xs font-bold text-rose-200 uppercase tracking-widest">
                                Critical Alert
                            </span>
                        </div>
                        <h4 className="text-sm font-bold leading-snug mb-1.5">
                            Unresolved Compliance Breach
                        </h4>
                        <p className="text-[10px] text-rose-200 leading-relaxed mb-3">
                            Facility ID #310 requires immediate safety certification review.
                        </p>
                        <button className="w-full py-1.5 rounded-full text-xs font-bold text-[#9F403D] bg-white transition-colors cursor-pointer">
                            Resolve Now
                        </button>
                    </div>

                    {/* ── Pending Reviews ── */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-extrabold text-slate-800">Pending Reviews</h3>
                            <span className="flex items-center gap-1 text-[10px] font-bold bg-sky-500 text-white px-2 py-0.5 rounded-full">
                                04 <span className="font-normal">NEW</span>
                            </span>
                        </div>

                        <div className="space-y-3">
                            {pendingReviews.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                                    >
                                        <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                                            <Icon size={20} className={item.iconColor} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-slate-800 leading-snug">{item.title}</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button className="mt-4 w-full py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer">
                            View All Tasks
                        </button>
                    </div>

                    {/* ── Quick Actions ── */}
                    <div className="bg-white rounded-xl border-s-4 border-primary p-5">
                        <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                            Quick Actions
                        </h3>
                        <div className="space-y-1">
                            {quickActions.map((action, idx) => {
                                const Icon = action.icon
                                return (
                                    <React.Fragment key={action.id}>
                                        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                                                <Icon size={20} className="text-slate-500 group-hover:text-teal-600 transition-colors" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 flex-1 text-left">
                                                {action.label}
                                            </span>
                                            <ArrowRight size={13} className="text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                                        </button>
                                        {idx < quickActions.length - 1 && (
                                            <div className="h-px bg-slate-100 mx-3" />
                                        )}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>

                    {/* ── Governance Tip ── */}
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                        <div className="flex items-center gap-1.5 mb-2">
                            <Info size={20} className="text-teal-600 shrink-0" />
                            <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest">
                                Governance Tip
                            </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Maintaining a response time of under 4 hours for Critical incidents ensures{' '}
                            <span className="font-bold text-teal-700">99% compliance</span> with Tier 1 Safety Regulations.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Incidents