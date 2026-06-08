import React, { useState } from 'react'
import { BsExclamationLg, BsPiggyBank } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { HiOutlineArrowUpOnSquare } from 'react-icons/hi2';
import { MdOutlineEditNote } from 'react-icons/md';
import { TbMailForward } from 'react-icons/tb';


const invoiceStats = [
    { label: "TOTAL", count: "24", meta: "+3 this month", metaColor: "text-teal-600", icon: GrDocumentText, bgColor: "bg-teal-100", iconColor: "text-teal-600", size: 18 },
    { label: "DRAFT", count: "08", meta: "Awaiting completion", metaColor: "text-slate-400", icon: MdOutlineEditNote, bgColor: "bg-slate-100", iconColor: "text-slate-500", size: 25 },
    { label: "SENT", count: "12", meta: "$4,250 pending", metaColor: "text-slate-400", icon: TbMailForward, bgColor: "bg-sky-100", iconColor: "text-sky-600", size: 22 },
    { label: "OVERDUE", count: "04", meta: "Action required", metaColor: "text-rose-600 font-bold", icon: BsExclamationLg, bgColor: "bg-rose-100", iconColor: "text-rose-800", size: 22 }
];

// Mock data - Invoice table data
const initialInvoices = [
    {
        id: "INV-2024-081",
        participant: "Elliot Jameson",
        initials: "EJ",
        avatarBg: "bg-purple-100 text-purple-700",
        date: "Oct 12, 2023",
        amount: "$1,240.00",
        status: "PAID",
        statusStyle: "bg-emerald-50 text-emerald-600 font-bold border border-emerald-100",
        isLocked: false
    },
    {
        id: "INV-2024-079",
        participant: "Sarah Higgins",
        initials: "SH",
        avatarBg: "bg-sky-100 text-sky-700",
        date: "Oct 01, 2023",
        amount: "$840.00",
        status: "OVERDUE",
        statusStyle: "bg-rose-50 text-rose-600 font-bold border border-rose-100",
        isLocked: false
    },
    {
        id: "INV-2024-085",
        participant: "Marcus Peterson",
        initials: "MP",
        avatarBg: "bg-slate-100 text-slate-500",
        date: "",
        amount: "$0.00",
        status: "INTAKE PENDING",
        statusStyle: "text-slate-400 text-[10px] font-bold block mt-0.5",
        isLocked: true,
        lockMessage: "Available after intake"
    },
    {
        id: "INV-2024-082",
        participant: "Liam Wright",
        initials: "LW",
        avatarBg: "bg-indigo-100 text-indigo-700",
        date: "Oct 14, 2023",
        amount: "$2,105.00",
        status: "SENT",
        statusStyle: "bg-blue-50 text-blue-600 font-bold border border-blue-100",
        isLocked: false
    }
];


const Resource = () => {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [invoices, setInvoices] = useState(initialInvoices);

    // Invoice filtering logic
    const filteredInvoices = currentFilter === 'All'
        ? invoices
        : invoices.filter(inv => inv.status.toLowerCase().includes(currentFilter.toLowerCase()));


    return (
        <div className="flex-1 flex overflow-hidden">

            {/* Scrollable middle panel - Resources & Invoice management */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">

                {/* Title and top action buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Resources</h1>
                        <p className="text-slate-400 text-xs font-light">Create, track, and export worker-branded invoices. Maintain professional financial records with ease.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-colors cursor-pointer shadow-3xs">
                            <HiOutlineArrowUpOnSquare size={22} />
                            <span>Export Summary</span>
                        </button>
                        <button className="bg-primary hover:bg-secondary text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-primary/10 flex items-center space-x-1.5 transition-all transform active:scale-98 cursor-pointer">
                            <i className="fa-solid fa-plus text-xs"></i>
                            <span>Create Invoice</span>
                        </button>
                    </div>
                </div>

                {/* 4-column invoice status summary cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {invoiceStats.map((stat, idx) => {
                        const Icon = stat.icon

                        return <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs space-y-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${stat.bgColor} ${stat.iconColor}`}>
                                <Icon size={stat.size || 18} />
                            </div>
                            <div className="space-y-0.5">
                                <span className="text-[10px] font-bold text-slate-400 block tracking-tight uppercase">{stat.label}</span>
                                <span className="text-2xl font-black text-slate-900 block tracking-tight leading-none">{stat.count}</span>
                                <span className={`text-[10px] block pt-0.5 ${stat.metaColor}`}>{stat.meta}</span>
                            </div>
                        </div>
                    })}
                </div>

                {/* Filter tab and date/sort settings bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-2 pt-2">
                    <div className="bg-slate-100/60 p-1 rounded-xl flex flex-wrap gap-1 text-xs font-bold shadow-3xs">
                        {['All', 'Draft', 'Sent', 'Paid'].map((filter) => {
                            const isSelected = currentFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setCurrentFilter(filter)}
                                    className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${isSelected
                                        ? 'bg-white text-slate-800 shadow-3xs'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 text-xs self-end sm:self-auto">
                        <button className="bg-white border border-slate-200 px-3 py-2 rounded-xl font-bold text-slate-600 flex items-center space-x-2 hover:border-slate-300 shadow-3xs transition-all cursor-pointer">
                            <i className="fa-regular fa-calendar-lines text-slate-400"></i>
                            <span>Last 30 Days</span>
                            <i className="fa-solid fa-chevron-down text-slate-400 text-[9px]"></i>
                        </button>
                        <button className="bg-white border border-slate-200 px-3 py-2 rounded-xl font-bold text-slate-600 flex items-center space-x-2 hover:border-slate-300 shadow-3xs transition-all cursor-pointer">
                            <i className="fa-solid fa-arrow-down-wide-short text-slate-400"></i>
                            <span>Newest First</span>
                        </button>
                    </div>
                </div>

                {/* Invoice data table container */}
                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/40 text-[10px] font-black text-slate-400 tracking-wider uppercase border-b border-slate-100 select-none">
                                    <th className="p-4 pl-6">Invoice #</th>
                                    <th className="p-4">Participant</th>
                                    <th className="p-4">Issue Date</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4 pr-6 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                                {filteredInvoices.map((invoice, idx) => (
                                    <tr key={idx} className={`hover:bg-slate-50/30 transition-colors ${invoice.status === 'OVERDUE' ? 'bg-rose-50/10' : ''}`}>

                                        {/* Invoice ID */}
                                        <td className="p-4 pl-6 font-bold text-slate-900">{invoice.id}</td>

                                        {/* Participant name & badge */}
                                        <td className="p-4">
                                            <div className="flex items-center space-x-2.5">
                                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 select-none ${invoice.avatarBg}`}>
                                                    {invoice.initials}
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-slate-800">{invoice.participant}</span>
                                                    {invoice.status === 'INTAKE PENDING' && (
                                                        <span className="text-[9px] text-amber-500 font-extrabold uppercase tracking-wide bg-amber-50 px-1 py-0.5 rounded-sm border border-amber-100/50">Intake Pending</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Issue date */}
                                        <td className="p-4 text-slate-400">{invoice.date || "—"}</td>

                                        {/* Total amount */}
                                        <td className="p-4 font-bold text-slate-900">{invoice.amount}</td>

                                        {/* Status & lock conditional element */}
                                        <td className="p-4 pr-6 text-center">
                                            {invoice.isLocked ? (
                                                <div className="flex items-center justify-center space-x-1.5 text-slate-400 font-medium">
                                                    <i className="fa-regular fa-lock-keyhole text-[10px]"></i>
                                                    <span className="text-[10px]">{invoice.lockMessage}</span>
                                                </div>
                                            ) : (
                                                <span className={`inline-block text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase ${invoice.statusStyle}`}>
                                                    {invoice.status}
                                                </span>
                                            )}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Right financial planning panel */}
            <div className="w-80 bg-white border-l border-slate-100 flex flex-col overflow-y-auto p-6 space-y-6 shrink-0 h-full">

                {/* Financial planning card */}
                <div className="space-y-5">
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Financial Planning</h3>

                    {/* Month-to-date stats */}
                    <div className="space-y-1">
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Month-To-Date</span>
                        <span className="text-3xl font-black text-slate-900 tracking-tight block">$8,120.40</span>
                        <span className="text-[10px] text-slate-400 font-medium block pt-0.5">68% of monthly target ($12k)</span>
                    </div>

                    {/* Year-to-date stats */}
                    <div className="space-y-1 pt-1">
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block">Year-To-Date</span>
                        <span className="text-xl font-black text-slate-800 tracking-tight block">$92,450.00</span>
                    </div>
                </div>

                {/* Suggested set-asides widget */}
                <div className="bg-slate-50/40 border border-slate-100 rounded-2xl p-4 space-y-3.5 shadow-3xs">
                    <div className="flex items-center space-x-2 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                        <BsPiggyBank size={18} />
                        <h4 className="tracking-tight">Suggested Set-Asides</h4>
                    </div>

                    <div className="space-y-2 text-xs font-semibold">
                        {/* Tax provision */}
                        <div className="bg-white border border-slate-100/70 rounded-xl p-3 flex items-center justify-between shadow-3xs">
                            <div className="space-y-0.5 min-w-0 flex-1">
                                <h5 className="font-bold text-slate-800 truncate">Tax Provision (30%)</h5>
                                <p className="text-[10px] text-slate-400 font-light leading-tight">Estimate for your next quarterly installment.</p>
                            </div>
                            <span className="text-sm font-black text-slate-900 shrink-0 ml-3">$2,436</span>
                        </div>

                        {/* Superannuation */}
                        <div className="bg-white border border-slate-100/70 rounded-xl p-3 flex items-center justify-between shadow-3xs">
                            <div className="space-y-0.5 min-w-0 flex-1">
                                <h5 className="font-bold text-slate-800 truncate">Super (11.5%)</h5>
                                <p className="text-[10px] text-slate-400 font-light leading-tight">Voluntary contribution for long-term growth.</p>
                            </div>
                            <span className="text-sm font-black text-slate-900 shrink-0 ml-3">$933</span>
                        </div>
                    </div>
                </div>

                {/* Legal disclaimer info note */}
                <div className="bg-sky-50/40 border border-sky-100/50 rounded-2xl p-4 text-sky-900 space-y-2 shadow-3xs flex-1 flex flex-col justify-end min-h-[140px]">
                    <p className="text-slate-500 font-light leading-relaxed tracking-tight text-[11px]">
                        <span className="font-bold text-slate-700 block mb-1">Note:</span>
                        No obligation. Just structure. If you want it, TMG180 provides these estimates to help you manage your business cash flow effectively.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Resource