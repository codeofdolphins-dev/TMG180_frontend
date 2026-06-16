import React, { useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight, Upload, UserPlus, SlidersHorizontal, CloudOff } from 'lucide-react'
import { MdGroups, MdCloudDone, MdOutlineFactCheck } from 'react-icons/md'
import { GiSandsOfTime } from 'react-icons/gi'
import { RxCountdownTimer } from 'react-icons/rx'
import WorkerCard from '../../components/admin/WorkerCard'

/* ──────────────────────── data ──────────────────────── */

const statCards = [
    {
        label: 'TOTAL WORKERS',
        value: '1,284',
        icon: MdGroups,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        barColor: 'bg-blue-500',
    },
    {
        label: 'PUBLISHED',
        value: '1,102',
        icon: MdCloudDone,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        barColor: 'bg-teal-500',
    },
    {
        label: 'PENDING ONBOARDING',
        value: '42',
        icon: GiSandsOfTime,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        barColor: 'bg-amber-400',
    },
    {
        label: 'REQUIRES UPDATE',
        value: '18',
        icon: RxCountdownTimer,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-500 -scale-x-100',
        barColor: 'bg-red-400',
    },
    {
        label: 'COMPLIANCE REVIEW',
        value: '64',
        icon: MdOutlineFactCheck,
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        barColor: 'bg-indigo-400',
    },
    {
        label: 'NOT PUBLISHED',
        value: '58',
        icon: CloudOff,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-500',
        barColor: 'bg-slate-400',
    },
]

const workersData = [
    {
        id: 'W-98621',
        name: 'Sarah Mitchell',
        company: 'Prime Logistics Ltd.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
        contractType: 'Full-Time',
        subscription: '',
        onboarding: { status: 'Done', variant: 'success' },
        compliance: { status: 'Verified', variant: 'success' },
        policy: { status: 'Signed', variant: 'success' },
        publishStatus: 'PUBLISHED',
        statusDate: 'Since Jan 12, 2024',
    },
    {
        id: 'W-77210',
        name: 'Marcus Thompson',
        company: 'Skyline Construction',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
        contractType: 'Contractor',
        subscription: '',
        onboarding: { status: 'Pending', variant: 'danger' },
        compliance: { status: 'Missing Docs', variant: 'danger' },
        policy: { status: 'Unsigned', variant: 'neutral' },
        publishStatus: 'DRAFT',
        statusDate: 'Created 2 days ago',
    },
    {
        id: 'W-98621',
        name: 'Sarah Mitchell',
        company: 'Prime Logistics Ltd.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
        contractType: 'Full-Time',
        subscription: '',
        onboarding: { status: 'Done', variant: 'success' },
        compliance: { status: 'Verified', variant: 'success' },
        policy: { status: 'Signed', variant: 'success' },
        publishStatus: 'PUBLISHED',
        statusDate: 'Since Jan 12, 2024',
    },
    {
        id: 'W-98621',
        name: 'Sarah Mitchell',
        company: 'Prime Logistics Ltd.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
        contractType: 'Full-Time',
        subscription: '',
        onboarding: { status: 'Done', variant: 'success' },
        compliance: { status: 'Verified', variant: 'success' },
        policy: { status: 'Signed', variant: 'success' },
        publishStatus: 'PUBLISHED',
        statusDate: 'Since Jan 12, 2024',
    },
]

/* ──────────────────────── component ──────────────────────── */

const AdminWorker = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="p-8 max-w-350 mx-auto space-y-6">

            {/* ───── Header ───── */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Workers</h1>
                    <p className="text-slate-500 text-sm mt-1 max-w-md">
                        Manage worker profiles, onboarding workflows, and audit publication status across the entire network.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-full hover:bg-teal-100 transition-all cursor-pointer">
                        <Upload size={16} />
                        Export List
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-700 rounded-full hover:bg-teal-800 transition-all cursor-pointer shadow-sm">
                        <UserPlus size={16} />
                        Register Worker
                    </button>
                </div>
            </div>

            {/* ───── Stat Cards ───── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {statCards.map((card) => {
                    const Icon = card.icon
                    return (
                        <div
                            key={card.label}
                            className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                        >
                            <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
                                <Icon size={26} />
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">{card.label}</p>
                            <p className="text-3xl font-extrabold text-slate-800">{card.value}</p>
                            {/* Colored bar */}
                            <div className={`w-12 h-1 rounded-full ${card.barColor} group-hover:w-16 transition-all duration-300`} />
                        </div>
                    )
                })}
            </div>

            {/* ───── Search & Filters ───── */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 space-y-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Quick search..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-slate-300 focus:bg-white transition-all text-slate-700"
                    />
                </div>

                {/* Filter pills */}
                <div className="flex items-center gap-3 flex-wrap">
                    <FilterPill label="Publish Status" />
                    <FilterPill label="Onboarding" />
                    <FilterPill label="Compliance" />
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 transition-all cursor-pointer ml-auto">
                        <SlidersHorizontal size={14} />
                        Sort: Recent
                    </button>
                </div>
            </div>

            {/* ───── Worker List ───── */}
            <div className="space-y-4">
                {workersData.map((worker, idx) => (
                    <WorkerCard key={idx} worker={worker} />
                ))}
            </div>

            {/* ───── Pagination ───── */}
            <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-slate-500">
                    Showing <span className="font-semibold text-slate-700">1</span> to <span className="font-semibold text-slate-700">10</span> of <span className="font-semibold text-slate-700">1,284</span> workers
                </p>
                <div className="flex items-center gap-1">
                    <button className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all cursor-pointer">
                        <ChevronLeft size={18} />
                    </button>
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${currentPage === page
                                    ? 'bg-teal-700 text-white shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <span className="text-slate-400 text-sm px-1">...</span>
                    <button
                        onClick={() => setCurrentPage(128)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${currentPage === 128
                                ? 'bg-teal-700 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        128
                    </button>
                    <button className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all cursor-pointer">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}


/* ──────────────────────── sub-components ──────────────────────── */

const FilterPill = ({ label }) => (
    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all cursor-pointer">
        {label}
        <ChevronDown size={14} className="text-slate-400" />
    </button>
)

export default AdminWorker