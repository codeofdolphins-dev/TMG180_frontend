import React, { useState } from 'react'
import {
    Filter, Download, ListChecks, ChevronLeft, ChevronRight,
    Calendar, ArrowRight, ExternalLink, AlertTriangle, Clock,
    UserCheck
} from 'lucide-react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdCloudOff, MdOutlineLoop } from 'react-icons/md'
import { BsClipboard2Check } from 'react-icons/bs'
import { FaRegBell, FaRegQuestionCircle } from 'react-icons/fa'
import { TbCalendarShare } from 'react-icons/tb'
import BasicStatCard from '../../components/admin/BasicStatCard'

/* ─────────────────────────── data ─────────────────────────── */

const statCards = [
    {
        id: 'verified',
        value: '142',
        label: 'Verified',
        badge: '+12%',
        icon: IoCheckmarkCircle,
        iconColor: 'text-emerald-500',
        iconBg: 'bg-emerald-100',
        valueColor: 'text-emerald-800',
        labelColor: 'text-emerald-400',
        bgColor: 'bg-emerald-50',
        border: 'border-emerald-100',
    },
    {
        id: 'requires-update',
        value: '18',
        label: 'Requires Update',
        icon: MdOutlineLoop,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-100',
        valueColor: 'text-amber-800',
        labelColor: 'text-amber-400',
        bgColor: 'bg-amber-50',
        border: 'border-amber-100',
    },
    {
        id: 'expiring-soon',
        value: '24',
        label: 'Expiring Soon',
        icon: FaRegBell,
        iconColor: 'text-orange-500',
        iconBg: 'bg-orange-100',
        valueColor: 'text-orange-800',
        labelColor: 'text-orange-400',
        bgColor: 'bg-orange-50',
        border: 'border-orange-100',
    },
    {
        id: 'not-uploaded',
        value: '07',
        label: 'Not Uploaded',
        icon: MdCloudOff,
        iconColor: 'text-slate-400',
        iconBg: 'bg-slate-100',
        valueColor: 'text-slate-800',
        labelColor: 'text-slate-400',
        bgColor: 'bg-slate-50',
        border: 'border-slate-200',
    },
    {
        id: 'under-review',
        value: '31',
        label: 'Under Review',
        icon: BsClipboard2Check,
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-100',
        valueColor: 'text-blue-800',
        labelColor: 'text-blue-400',
        bgColor: 'bg-blue-50',
        border: 'border-blue-100',
    },
]

const workers = [
    {
        id: 1,
        name: 'Dr. Michael Chen',
        facility: 'St. Jude Medical',
        avatar: 'MC',
        avatarBg: 'bg-teal-600',
        insurance: { label: 'CURRENT', date: '12 Oct 2024', color: 'text-emerald-600' },
        checks: { label: 'DUE SOON', date: '15 May 2024', color: 'text-amber-500' },
        certs: { label: 'CURRENT', date: '01 Jan 2025', color: 'text-emerald-600' },
        conduct: { label: 'REVIEW', date: 'Pending', color: 'text-blue-500' },
        status: 'Good',
        statusColor: 'text-emerald-600',
        statusDot: 'bg-emerald-500',
        statusBadge: null,
    },
    {
        id: 2,
        name: 'Elena Rodriguez',
        facility: 'Metro Care Facility',
        avatar: 'ER',
        avatarBg: 'bg-rose-400',
        insurance: { label: 'REQUIRED', date: 'Expired', color: 'text-rose-500', dateColor: 'text-rose-500' },
        checks: { label: 'CURRENT', date: '22 Nov 2024', color: 'text-emerald-600' },
        certs: { label: 'MISSING', date: 'Not Uploaded', color: 'text-rose-500' },
        conduct: { label: 'SIGNED', date: '10 Feb 2024', color: 'text-emerald-600' },
        status: 'Critical',
        statusColor: 'text-rose-600',
        statusDot: 'bg-rose-500',
        statusBadge: 'bg-rose-100 text-rose-600 border border-rose-200',
    },
    {
        id: 3,
        name: 'James Wilson',
        facility: 'Summit Physio',
        avatar: 'JW',
        avatarBg: 'bg-slate-500',
        insurance: { label: 'CURRENT', date: '30 Jun 2024', color: 'text-emerald-600' },
        checks: { label: 'CURRENT', date: '15 Mar 2025', color: 'text-emerald-600' },
        certs: { label: 'CURRENT', date: '22 Dec 2024', color: 'text-emerald-600' },
        conduct: { label: 'SIGNED', date: '05 Jan 2024', color: 'text-emerald-600' },
        status: 'Good',
        statusColor: 'text-emerald-600',
        statusDot: 'bg-emerald-500',
        statusBadge: null,
    },
]

const expiryAlerts = [
    {
        id: 'today',
        icon: Clock,
        iconColor: 'text-rose-500',
        title: 'Expires Today',
        desc: 'Professional Indemnity – M. Chen',
        bgColor: "bg-red-100",
        borderBg: "border-red-800",
    },
    {
        id: '7days',
        icon: TbCalendarShare,
        iconColor: 'text-amber-500',
        title: 'Expires in 7 Days',
        desc: '3 workers require renewal',
        bgColor: "bg-orange-100",
        borderBg: "border-orange-400",
    },
    {
        id: '30days',
        icon: Calendar,
        iconColor: 'text-gray-500',
        title: '30 Day Horizon',
        desc: '8 documents approaching expiry',
        bgColor: "bg-gray-100",
        borderBg: "border-gray-400",
    },
]

const criticalIssues = [
    {
        id: 'missing',
        icon: AlertTriangle,
        iconColor: 'text-red-800',
        iconBg: 'bg-red-200',
        title: 'Missing Documents',
        desc: '7 profiles incomplete',
    },
    {
        id: 'update',
        icon: MdOutlineLoop,
        iconColor: 'text-orange-500',
        iconBg: 'bg-orange-100',
        title: 'Requires Update',
        desc: '18 flags detected',
    },
]

const quickActions = [
    { id: 'expiring', label: 'Review Expiring', icon: ArrowRight },
    { id: 'pending', label: 'Verify Pending', icon: UserCheck },
    { id: 'workers', label: 'Open Workers', icon: ExternalLink },
]

/* ─────────────────────────── component ─────────────────────────── */

const AdminCompliance = () => {
    const [activeStatus, setActiveStatus] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className="p-8 max-w-350 mx-auto">
            <div className="space-y-6">
                {/* ── Header ── */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Practice Standing
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 max-w-md leading-relaxed">
                            Review compliance status, expiry timelines, and documentation
                            verification for all active healthcare workers.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-1">
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                            <Filter size={15} />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                            <Download size={15} />
                            Export Report
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 shadow-md shadow-teal-200/50 hover:shadow-none transition-all cursor-pointer">
                            <ListChecks size={15} />
                            Review Queue
                        </button>
                    </div>
                </div>

                {/* ── Stat Cards ── */}
                <div className="grid grid-cols-5 gap-6">
                    {statCards.map((card) => {
                        const Icon = card.icon
                        return <BasicStatCard
                            key={card.id}
                            Icon={Icon}
                            {...card}
                        />
                    })}
                </div>

                {/* ── main content ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* ════════ Left Sidebar ════════ */}
                    <div className="lg:col-span-8 space-y-6">

                        <div className="space-y-6">

                            {/* ── Filter Bar ── */}
                            <div className="bg-white rounded-full flex justify-between items-center gap-4 px-6 py-4 border-b border-slate-100">

                                {/* Status tabs */}
                                <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                                        STATUS
                                    </span>
                                    {['All', 'Critical', 'Warning'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveStatus(tab)}
                                            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeStatus === tab
                                                ? 'bg-teal-700 text-white shadow-sm'
                                                : 'text-slate-500 hover:bg-slate-100'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="h-5 w-px bg-slate-200 mx-1" />

                                <div className="flex items-center gap-4">
                                    {/* Document type */}
                                    <select className="text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 bg-white appearance-none cursor-pointer outline-none hover:border-slate-300 transition-colors">
                                        <option>Document Type</option>
                                        <option>Insurance</option>
                                        <option>Certification</option>
                                        <option>Checks</option>
                                        <option>Conduct</option>
                                    </select>

                                    {/* Expiry */}
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer hover:border-slate-300 transition-colors">
                                        <span>Expiry: All</span>
                                        <Calendar size={13} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* ── Table ── */}
                            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-200 border-b border-slate-200">
                                            {['WORKER', 'INSURANCE', 'CHECKS', 'CERTS', 'CONDUCT', 'STATUS'].map((col) => (
                                                <th
                                                    key={col}
                                                    className="text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider px-5 py-3"
                                                >
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {workers.map((worker) => (
                                            <tr
                                                key={worker.id}
                                                className="hover:bg-slate-50/70 transition-colors group cursor-pointer border-b border-slate-200 last:border-none"
                                            >
                                                {/* Worker */}
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-9 h-9 rounded-full ${worker.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                                                            {worker.avatar}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-800 text-xs whitespace-nowrap">
                                                                {worker.name}
                                                            </p>
                                                            <p className="text-[10px] text-slate-400 mt-0.5">
                                                                {worker.facility}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Insurance */}
                                                <td className="px-5 py-4">
                                                    <DocCell cell={worker.insurance} />
                                                </td>

                                                {/* Checks */}
                                                <td className="px-5 py-4">
                                                    <DocCell cell={worker.checks} />
                                                </td>

                                                {/* Certs */}
                                                <td className="px-5 py-4">
                                                    <DocCell cell={worker.certs} />
                                                </td>

                                                {/* Conduct */}
                                                <td className="px-5 py-4">
                                                    <DocCell cell={worker.conduct} />
                                                </td>

                                                {/* Status */}
                                                <td className="px-5 py-4">
                                                    {worker.statusBadge ? (
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${worker.statusBadge}`}>
                                                            <span className={`w-1.5 h-1.5 rounded-full ${worker.statusDot}`} />
                                                            {worker.status}
                                                        </span>
                                                    ) : (
                                                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${worker.statusColor}`}>
                                                            <span className={`w-2 h-2 rounded-full ${worker.statusDot}`} />
                                                            {worker.status}
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* ── Pagination ── */}
                                <div className="bg-slate-200 flex items-center justify-between px-5 py-3.5">
                                    <p className="text-xs font-medium">
                                        Showing 3 of 198 workers
                                    </p>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all cursor-pointer"
                                        >
                                            <ChevronLeft size={14} />
                                        </button>
                                        {[1, 2].map((page) => (
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
                                        <button
                                            onClick={() => setCurrentPage(p => Math.min(2, p + 1))}
                                            className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 transition-all cursor-pointer"
                                        >
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ════════ Right Sidebar ════════ */}
                    <div className="lg:col-span-4 space-y-2">

                        {/* ── Expiry Alerts ── */}
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">
                                    Expiry Alerts
                                </h3>
                                <span className="text-xs font-bold bg-sky-200 text-primary px-2 py-0.5 rounded-full">
                                    Total 12
                                </span>
                            </div>
                            <div className="space-y-3">
                                {expiryAlerts.map((alert) => {
                                    const Icon = alert.icon
                                    return (
                                        <div
                                            key={alert.id}
                                            className={`flex items-start gap-3 py-3 rounded-e-4xl transition-colors cursor-pointer border-s-4 ${alert.borderBg} ${alert.bgColor}`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}>
                                                <Icon size={20} className={alert.iconColor} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-slate-800">{alert.title}</p>
                                                <p className="text-xs text-slate-400 mt-0.5 leading-snug">{alert.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── Critical Issues ── */}
                        <div className="p-5">
                            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-4">
                                Critical Issues
                            </h3>
                            <div className="space-y-3 bg-slate-100 rounded-3xl p-2">
                                {criticalIssues.map((issue) => {
                                    const Icon = issue.icon
                                    return (
                                        <div key={issue.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                                            <div className={`w-8 h-8 rounded-full ${issue.iconBg} flex items-center justify-center shrink-0`}>
                                                <Icon size={20} className={issue.iconColor} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">{issue.title}</p>
                                                <p className="text-xs text-slate-400 mt-0.5">{issue.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── Quick Actions ── */}
                        <div className="p-5">
                            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-4">
                                {quickActions.map((action, idx) => {
                                    const Icon = action.icon
                                    return (
                                        <div
                                            key={action.id}
                                            className='bg-white rounded-full border border-slate-200 py-2 px-4'
                                        >
                                            <button className="flex items-center justify-between w-full px-2 py-2.5 rounded-xl transition-colors group cursor-pointer">
                                                <span className="text-sm font-bold text-slate-700">
                                                    {action.label}
                                                </span>
                                                <Icon size={20} className="group-hover:text-teal-600 transition-colors" />
                                            </button>
                                            {idx < quickActions.length - 1 && (
                                                <div className="h-px bg-slate-100 mx-2" />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* ── Compliance Support ── */}
                        <div className="bg-primary/10 text-primary rounded-2xl p-5 relative overflow-hidden space-y-3">
                            <FaRegQuestionCircle size={80} className='absolute -bottom-6 -right-4 text-primary/10' />

                            <h3 className="text-sm font-bold text-secondary">Compliance Support</h3>
                            <p className="text-xs leading-relaxed">
                                Need help with document verification standards?
                            </p>
                            <button className="flex items-center gap-1.5 text-xs font-bold hover:gap-2.5 transition-all cursor-pointer">
                                Read Guidelines
                                <ExternalLink size={12} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

/* ── Reusable table cell for doc columns ── */
const DocCell = ({ cell }) => (
    <div>
        <p className={`text-[10px] font-bold uppercase tracking-wide ${cell.color}`}>
            {cell.label}
        </p>
        <p className={`text-[11px] mt-0.5 ${cell.dateColor || 'text-slate-500'}`}>
            {cell.date}
        </p>
    </div>
)

export default AdminCompliance