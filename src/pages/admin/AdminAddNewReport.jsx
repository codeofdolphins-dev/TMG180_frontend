import React, { useState } from 'react'
import {
  RotateCcw, Zap, Filter, Users, ShieldCheck,
  FileCheck, GraduationCap, AlertTriangle, Sliders,
  Calendar, ChevronDown, Eye, Download, FileText,
  TableProperties, ArrowRight, Clock, Lightbulb, Mail
} from 'lucide-react'
import { MdOutlineGridView } from 'react-icons/md'
import { BsFiletypeCsv, BsFiletypeXlsx } from 'react-icons/bs'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { FaRegBookmark } from 'react-icons/fa'

/* ─────────────────────────── data ─────────────────────────── */

const reportTypes = [
  {
    id: 'worker',
    label: 'Worker Overview',
    desc: 'Comprehensive staff and contractor directory',
    icon: Users,
  },
  {
    id: 'compliance',
    label: 'Compliance',
    desc: 'Regulatory status and safety requirements',
    icon: ShieldCheck,
  },
  {
    id: 'policy',
    label: 'Policy Ack',
    desc: 'Tracking document signatures and reads',
    icon: FileCheck,
  },
  {
    id: 'learning',
    label: 'Learning',
    desc: 'Course completion and skill assessments',
    icon: GraduationCap,
  },
  {
    id: 'incidents',
    label: 'Incidents',
    desc: 'Oversight of reported safety hazards',
    icon: AlertTriangle,
  },
  {
    id: 'custom',
    label: 'Custom',
    desc: 'Build a tailored data view from scratch',
    icon: Sliders,
  },
]

const previewData = [
  {
    id: '#WRK-482',
    initials: 'JS',
    avatarBg: 'bg-blue-500',
    name: 'James Sterling',
    entity: 'Site Alpha-1',
    compliance: 'Compliant',
    complianceColor: 'text-emerald-600 bg-emerald-50',
    dot: 'bg-emerald-500',
    lastActive: 'Oct 12, 2023',
  },
  {
    id: '#WRK-105',
    initials: 'EM',
    avatarBg: 'bg-rose-400',
    name: 'Elena Martinez',
    entity: 'Logistics Hub',
    compliance: 'Pending',
    complianceColor: 'text-amber-600 bg-amber-50',
    dot: 'bg-amber-400',
    lastActive: 'Oct 11, 2023',
  },
  {
    id: '#WRK-992',
    initials: 'TH',
    avatarBg: 'bg-teal-600',
    name: 'Tobias Hoffmann',
    entity: 'Regional HQ',
    compliance: 'Compliant',
    complianceColor: 'text-emerald-600 bg-emerald-50',
    dot: 'bg-emerald-500',
    lastActive: 'Oct 10, 2023',
  },
]

const exportOptions = [
  {
    id: 'pdf',
    label: 'PDF Document',
    desc: 'Clean, formatted layout',
    icon: FileText,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
  {
    id: 'csv',
    label: 'CSV Spreadsheet',
    desc: 'Raw data for analysis',
    icon: BsFiletypeCsv,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'xlsx',
    label: 'Excel (.xlsx)',
    desc: 'Pivot-ready data',
    icon: LuFileSpreadsheet,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
]

const quickReports = [
  { id: 'audit', label: 'Weekly Worker Audit' },
  { id: 'compliance', label: 'Overdue Compliance' },
  { id: 'policy', label: 'Policy Sign-off Status' },
]

const savedReports = [
  {
    id: 1,
    title: 'Monthly Incident Log',
    time: '5H AGO',
    filter: 'Filtered by: Site Alpha-1, Type: Critical',
  },
  {
    id: 2,
    title: 'Contractor Certification',
    time: 'YESTERDAY',
    filter: 'Filtered by: Expiring within 30 days',
  },
  {
    id: 3,
    title: 'Onboarding Completion',
    time: 'OCT 05',
    filter: 'Filtered by: Global, Q3 2023',
  },
]

/* ─────────────────────────── component ─────────────────────────── */

const AdminAddNewReport = () => {
  const [selectedType, setSelectedType] = useState('worker')
  const [selectedExport, setSelectedExport] = useState('pdf')

  return (
    <div className="p-8 space-y-6">

      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Report</h1>
          <p className="text-slate-500 text-sm mt-1.5 max-w-md leading-relaxed">
            Generate custom reports and export system insights using real-time
            organizational data and compliance metrics.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-1">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
            <RotateCcw size={14} />
            Reset Filters
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 shadow-md shadow-teal-200/50 hover:shadow-none transition-all cursor-pointer">
            <Zap size={14} />
            Generate Report
          </button>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* ════ Left: Main Form ════ */}
        <div className="lg:col-span-8 space-y-5">

          {/* ── Report Type ── */}
          <div className="bg-slate-100 rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <MdOutlineGridView size={18} className="text-teal-600" />
              <h2 className="text-base font-bold text-slate-800">Report Type</h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {reportTypes.map((type) => {
                const Icon = type.icon
                const isSelected = selectedType === type.id
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer bg-white ${isSelected
                      ? 'border-teal-500 bg-teal-50/50 shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${isSelected ? 'bg-teal-100' : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                      <Icon size={16} className={isSelected ? 'text-teal-600' : 'text-slate-500'} />
                    </div>
                    <p className={`text-sm font-bold mb-0.5 ${isSelected ? 'text-teal-700' : 'text-slate-700'}`}>
                      {type.label}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-snug">{type.desc}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Filters ── */}
          <div className="bg-slate-100 rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Filter size={15} className="text-teal-600" />
              <h2 className="text-base font-bold text-slate-800">Filters</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Date Range */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Date Range
                </label>
                <button className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Calendar size={13} className="text-slate-400" />
                    Last 30 Days
                  </span>
                  <ChevronDown size={13} className="text-slate-400" />
                </button>
              </div>

              {/* Status */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Status
                </label>
                <button className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors cursor-pointer">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    All Statuses
                  </span>
                  <ChevronDown size={13} className="text-slate-400" />
                </button>
              </div>

              {/* Entity */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Entity
                </label>
                <button className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors cursor-pointer">
                  <span className="flex items-center gap-2">
                    <TableProperties size={13} className="text-slate-400" />
                    Global (All Units)
                  </span>
                  <ChevronDown size={13} className="text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Data Preview ── */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Eye size={15} className="text-teal-600" />
                <h2 className="text-base font-bold text-slate-800">Data Preview</h2>
              </div>
              <span className="text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full uppercase tracking-wide">
                Showing 3 of 1,268 Records
              </span>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  {['ID', 'NAME', 'ENTITY', 'COMPLIANCE', 'LAST ACTIVE'].map((col) => (
                    <th key={col} className="text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider px-5 py-3">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {previewData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/70 transition-colors cursor-pointer">
                    <td className="px-5 py-3.5">
                      <span className="text-xs font-bold text-teal-600 font-mono">{row.id}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full ${row.avatarBg} flex items-center justify-center shrink-0`}>
                          <span className="text-white text-[9px] font-bold">{row.initials}</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs text-slate-500">{row.entity}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${row.complianceColor}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
                        {row.compliance}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs text-slate-400">{row.lastActive}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Export Options ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Download size={15} className="text-teal-600" />
              <h2 className="text-base font-bold text-slate-800">Export Options</h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {exportOptions.map((opt) => {
                const Icon = opt.icon
                const isSelected = selectedExport === opt.id
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedExport(opt.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left group ${isSelected
                      ? 'border-teal-500 bg-teal-50/40 shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                      }`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${opt.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon size={18} className={opt.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-bold truncate ${isSelected ? 'text-teal-700' : 'text-slate-700'}`}>
                        {opt.label}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{opt.desc}</p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0 ml-auto">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ════ Right Sidebar ════ */}
        <div className="lg:col-span-4 space-y-4">

          {/* ── Quick Reports ── */}
          <div className="bg-slate-100 rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={14} className="text-teal-600" />
              <h3 className="text-sm font-extrabold text-slate-800">Quick Reports</h3>
            </div>
            <div className="space-y-2">
              {quickReports.map((qr, idx) => (
                <React.Fragment key={qr.id}>
                  <button className="bg-white flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                      {qr.label}
                    </span>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                  {idx < quickReports.length - 1 && <div className="h-px bg-slate-100 mx-3" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Saved Reports ── */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 shadow">
            <div className="flex items-center gap-2 mb-4">
              <FaRegBookmark size={18} className='text-primary' />
              <h3 className="text-sm font-extrabold text-slate-800">Saved Reports</h3>
            </div>
            <div className="space-y-4">
              {savedReports.map((report, idx) => (
                <div key={report.id} className={`${idx < savedReports.length - 1 ? 'pb-4 border-b border-slate-100' : ''}`}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold text-slate-800">{report.title}</p>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{report.time}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2 leading-snug">{report.filter}</p>
                  <div className="flex items-center gap-3">
                    <button className="text-[11px] font-bold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
                      Re-run
                    </button>
                    <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer">
              View All Saved Reports
            </button>
          </div>

          {/* ── Automate Exports ── */}
          <div className="bg-teal-700 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute -right-2 -top-4 w-14 h-14 rounded-full bg-white/5" />

            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center mb-3">
              <Lightbulb size={18} className="text-white" />
            </div>

            <h3 className="text-sm font-bold mb-2">Automate Exports</h3>
            <p className="text-xs text-teal-100 leading-relaxed mb-4">
              You can schedule these reports to be automatically emailed to stakeholders
              daily, weekly or monthly.
            </p>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-xs font-bold text-primary bg-white hover:text-secondary hover:shadow-2xl cursor-pointer">
              Setup Scheduling
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminAddNewReport