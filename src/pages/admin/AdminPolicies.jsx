import React, { useState } from 'react'
import {
    Filter, Download, Plus, ArrowRight, Archive,
    MoreVertical, Clock, Pencil, ChevronDown,
    Search, UserCheck, Send, FileText
} from 'lucide-react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { MdOutlineLoop, MdOutlinePeople } from 'react-icons/md'
import { LuFileText } from 'react-icons/lu'
import { AiOutlineWarning } from 'react-icons/ai'
import BasicStatCard from '../../components/admin/BasicStatCard'

/* ─────────────────────────── data ─────────────────────────── */

const statCards = [
    {
        id: 'total',
        value: '12',
        label: 'Total Policies',
        icon: LuFileText,
        iconColor: 'text-teal-600',
        iconBg: 'bg-teal-100',
    },
    {
        id: 'active',
        value: '10',
        label: 'Active Policies',
        icon: IoCheckmarkCircleOutline,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100',
    },
    {
        id: 'acks',
        value: '85%',
        label: 'Acknowledgements',
        icon: MdOutlinePeople,
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100',
    },
    {
        id: 'updated',
        value: '2',
        label: 'Recently Updated',
        icon: MdOutlineLoop,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-100',
    },
    {
        id: 'review',
        value: '1',
        label: 'Requires Review',
        icon: AiOutlineWarning,
        iconColor: 'text-rose-500',
        iconBg: 'bg-rose-100',
    },
]

const policies = [
    {
        id: 1,
        title: 'Worker Code of Conduct v2.4',
        icon: FileText,
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-500',
        tags: [
            { label: 'ACTIVE', color: 'bg-teal-100 text-teal-700' },
            { label: 'MANDATORY', color: 'bg-amber-100 text-amber-700' },
        ],
        meta: { icon: Clock, text: 'Updated 2 days ago' },
        progress: 92,
        progressLabel: 'ACKNOWLEDGED',
        progressColor: 'bg-teal-600',
    },
    {
        id: 2,
        title: 'Privacy & Data Handling v1.1',
        icon: FileText,
        iconBg: 'bg-teal-50',
        iconColor: 'text-teal-500',
        tags: [
            { label: 'ACTIVE', color: 'bg-teal-100 text-teal-700' },
            { label: 'MANDATORY', color: 'bg-amber-100 text-amber-700' },
        ],
        meta: { icon: Clock, text: 'Updated 14 days ago' },
        progress: 78,
        progressLabel: 'ACKNOWLEDGED',
        progressColor: 'bg-teal-600',
    },
    {
        id: 3,
        title: 'Conflict of Interest Declaration v1.0',
        icon: FileText,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-400',
        tags: [
            { label: 'DRAFT', color: 'bg-slate-100 text-slate-500' },
            { label: 'REQUIRED', color: 'bg-amber-100 text-amber-700' },
        ],
        meta: { icon: Pencil, text: 'Edited 3 hours ago' },
        progress: null,
        progressLabel: 'Not Published',
        progressColor: null,
    },
]

const quickActions = [
    { id: 'create', label: 'Create Policy', icon: ArrowRight },
    { id: 'review', label: 'Review Pending', icon: ArrowRight },
    { id: 'archive', label: 'Archive Policies', icon: ArrowRight },
]

const pendingAcks = [
    {
        id: 1,
        name: 'Marcus Thorne',
        policy: 'Code of Conduct v2.4',
        avatar: null,
        avatarBg: 'bg-amber-500',
        initials: 'MT',
        imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60',
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        policy: 'Privacy & Data v1.1',
        avatar: null,
        avatarBg: 'bg-rose-400',
        initials: 'SJ',
        imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60',
    },
    {
        id: 3,
        name: 'Robert Hayes',
        policy: 'Code of Conduct v2.4',
        avatar: null,
        avatarBg: 'bg-slate-500',
        initials: 'RH',
        imgSrc: null,
    },
]

const recentActivity = [
    {
        id: 1,
        date: 'Today, 10:45 AM',
        active: true,
        content: (
            <span className="text-xs text-slate-700">
                <span className="font-bold">Code of Conduct</span> updated to{' '}
                <span className="font-bold text-teal-600">v2.4</span>
            </span>
        ),
    },
    {
        id: 2,
        date: 'Yesterday',
        active: false,
        content: (
            <span className="text-xs text-slate-500">
                Privacy & Data Handling review completed
            </span>
        ),
    },
    {
        id: 3,
        date: 'Oct 12, 2023',
        active: false,
        content: (
            <span className="text-xs text-slate-500">
                New draft created: Conflict of Interest
            </span>
        ),
    },
]

/* ─────────────────────────── component ─────────────────────────── */

const AdminPolicies = () => {
    const [activeTab, setActiveTab] = useState('All Status')
    const [search, setSearch] = useState('')

    const tabs = ['All Status', 'Active', 'Drafts']

    return (
        <div className="p-8 max-w-350 mx-auto space-y-6">

            {/* ── Header ── */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Policies</h1>
                    <p className="text-slate-500 text-sm mt-1 max-w-sm leading-relaxed">
                        Manage policies, versions, and worker acknowledgements
                    </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                        <Filter size={14} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                        <Download size={14} />
                        Export Report
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 shadow-md shadow-teal-200/50 hover:shadow-none transition-all cursor-pointer">
                        <Plus size={16} />
                        Create Policy
                    </button>
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

            {/* Search + Filter bar */}
            <div className="bg-slate-100 p-4 rounded-full flex items-center justify-between gap-3">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or keyword..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                </div>

                {/* Status tabs */}
                <div className="flex items-center gap-4 p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === tab
                                ? 'bg-teal-700 text-white shadow-sm'
                                : 'bg-white text-slate-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Sort by */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer shrink-0">
                    <span className="text-xs font-medium text-slate-400">SORT BY</span>
                    <span className="text-xs font-bold text-teal-600">Last Updated</span>
                    <ChevronDown size={13} className="text-slate-400" />
                </div>
            </div>

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* ════ Left: Policy List ════ */}
                <div className="lg:col-span-7 space-y-5">

                    {/* ── Recent Policies ── */}
                    <div>
                        <h2 className="text-base font-bold text-slate-800 mb-3">Recent Policies</h2>

                        <div className="space-y-3">
                            {policies.map((policy) => {
                                const PolicyIcon = policy.icon
                                const MetaIcon = policy.meta.icon
                                return (
                                    <div
                                        key={policy.id}
                                        className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                                    >
                                        {/* Icon */}
                                        <div className={`w-10 h-10 rounded-xl ${policy.iconBg} flex items-center justify-center shrink-0`}>
                                            <PolicyIcon size={18} className={policy.iconColor} />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-slate-800 truncate">
                                                {policy.title}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                                {policy.tags.map((tag) => (
                                                    <span
                                                        key={tag.label}
                                                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tag.color}`}
                                                    >
                                                        {tag.label}
                                                    </span>
                                                ))}
                                                <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                                                    <MetaIcon size={10} />
                                                    {policy.meta.text}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Progress / Status */}
                                        <div className="w-32 shrink-0 text-right">
                                            {policy.progress !== null ? (
                                                <div>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[10px] font-bold text-slate-500">
                                                            {policy.progressLabel}
                                                        </span>
                                                        <span className="text-sm font-bold text-slate-800">
                                                            {policy.progress}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full ${policy.progressColor} rounded-full transition-all duration-700`}
                                                            style={{ width: `${policy.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-xs font-semibold text-slate-400">
                                                    {policy.progressLabel}
                                                </span>
                                            )}
                                        </div>

                                        {/* 3-dot menu */}
                                        <button className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all cursor-pointer shrink-0 opacity-0 group-hover:opacity-100">
                                            <MoreVertical size={15} />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>

                        {/* View All */}
                        <button className="w-full mt-4 py-2.5 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-colors cursor-pointer">
                            View All Policies (12)
                        </button>
                    </div>
                </div>

                {/* ════ Right Sidebar ════ */}
                <div className="lg:col-span-5 space-y-4">

                    {/* ── Quick Actions ── */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                            Quick Actions
                        </h3>
                        <div className="space-y-1">
                            {quickActions.map((action, idx) => (
                                <React.Fragment key={action.id}>
                                    <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                                            {action.label}
                                        </span>
                                        <ArrowRight size={15} className="text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                                    </button>
                                    {idx < quickActions.length - 1 && (
                                        <div className="h-px bg-slate-100 mx-3" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* ── Pending Acks ── */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-extrabold text-slate-800">Pending Acks</h3>
                            <span className="text-xs font-bold bg-red-100 text-red-800 px-2.5 py-1 rounded-full">
                                12 Workers
                            </span>
                        </div>

                        <div className="space-y-3">
                            {pendingAcks.map((ack) => (
                                <div key={ack.id} className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div className={`w-8 h-8 rounded-full ${ack.avatarBg} flex items-center justify-center shrink-0 overflow-hidden`}>
                                        {ack.imgSrc ? (
                                            <img src={ack.imgSrc} alt={ack.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-white text-[10px] font-bold">{ack.initials}</span>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold text-slate-800 truncate">{ack.name}</p>
                                        <p className="text-[10px] text-slate-400 truncate">{ack.policy}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer tracking-widest uppercase">
                            <Send size={12} />
                            Send Reminders
                        </button>
                    </div>

                    {/* ── Recent Activity ── */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <MdOutlineLoop size={16} className="text-teal-600" />
                            <h3 className="text-sm font-extrabold text-slate-800">Recent Activity</h3>
                        </div>

                        <div className="relative">
                            {/* Vertical timeline line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />

                            <div className="space-y-5">
                                {recentActivity.map((item) => (
                                    <div key={item.id} className="flex gap-4 relative">
                                        {/* Dot */}
                                        <div className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 mt-0.5 z-10 ${item.active
                                            ? 'bg-teal-600 border-teal-600'
                                            : 'bg-white border-slate-300'
                                            }`} />
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-medium mb-0.5">
                                                {item.date}
                                            </p>
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPolicies