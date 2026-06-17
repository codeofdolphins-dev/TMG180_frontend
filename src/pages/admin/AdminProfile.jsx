import React from 'react'
import {
  ChevronRight, CheckCircle2,
  FileText, AlertTriangle, BarChart2, Pencil,
  LogOut, RotateCcw, Monitor, Smartphone
} from 'lucide-react'
import { LuShieldCheck } from 'react-icons/lu'
import { MdOutlinePeople } from 'react-icons/md'
import { TbLock } from 'react-icons/tb'
import { BiSolidCheckShield } from 'react-icons/bi'
import { TfiTimer } from 'react-icons/tfi'
import { LiaUserAltSlashSolid } from 'react-icons/lia'

/* ─────────────────────────── data ─────────────────────────── */

const permissions = [
  {
    id: 'full',
    label: 'Full System Access',
    desc: 'Unrestricted administrative rights',
    icon: LuShieldCheck,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'worker',
    label: 'Worker Management',
    desc: 'Create and modify worker profiles',
    icon: MdOutlinePeople,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'compliance',
    label: 'Compliance Verification',
    desc: 'Approve safety documentation',
    icon: CheckCircle2,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'policy',
    label: 'Policy Management',
    desc: 'Publish and retire system policies',
    icon: FileText,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'incident',
    label: 'Incident Governance',
    desc: 'Critical incident investigation',
    icon: AlertTriangle,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    id: 'audit',
    label: 'Audit Access',
    desc: 'View full system activity logs',
    icon: BarChart2,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
]

const activities = [
  {
    id: 1,
    active: true,
    text: 'Approved "Worker Onboarding" compliance policy',
    time: 'Today at 11:24 AM',
    category: 'Compliance',
  },
  {
    id: 2,
    active: false,
    text: "Created new entry in 'Incident Reports' for Site B",
    time: 'Yesterday at 04:15 PM',
    category: 'Incidents',
  },
  {
    id: 3,
    active: false,
    text: 'Modified system-wide worker verification scope',
    time: 'Oct 22 at 09:30 AM',
    category: 'System',
  },
]

const loginSessions = [
  {
    id: 1,
    icon: Monitor,
    device: 'macOS · Chrome',
    location: 'San Francisco, USA · 192.168.1.1',
    badge: 'Current Session',
    badgeColor: 'bg-teal-50 text-teal-700 border border-teal-200',
  },
  {
    id: 2,
    icon: Smartphone,
    device: 'iPhone 14 Pro · App',
    location: 'San Francisco, USA · 172.16.0.4',
    badge: '2h ago',
    badgeColor: 'bg-slate-100 text-slate-500',
  },
]

/* ─────────────────────────── component ─────────────────────────── */

const AdminProfile = () => {
  return (
    <div className="p-8 max-w-350 mx-auto space-y-6">

      {/* ── Main 2-column Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* ════ Left Column ════ */}
        <div className="lg:col-span-7 space-y-5">

          {/* ── Hero Profile Card ── */}
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-teal-800 to-teal-600 p-6 pb-7">
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute right-10 bottom-0 w-24 h-24 rounded-full bg-white/5" />

            <div className="flex items-start gap-5 relative z-10">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-teal-900/50 border-2 border-white/20 overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                  alt="Alex Thompson"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold text-white leading-tight">Alex Thompson</h1>
                  <span className="text-[10px] font-bold bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">
                    Super Admin
                  </span>
                </div>
                <p className="text-teal-200 text-sm mb-4">alex.thompson@tmg180.com</p>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[9px] font-bold text-teal-300 uppercase tracking-widest mb-1">Status</p>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Now
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-teal-300 uppercase tracking-widest mb-1">Last Login</p>
                    <p className="text-xs font-semibold text-white">Oct 24, 2023 · 09:42 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Personal Information ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-slate-800">Personal Information</h2>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
                <Pencil size={13} />
                Edit Details
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {[
                { label: 'Full Name', value: 'Alex Thompson' },
                { label: 'Email Address', value: 'alex.thompson@tmg180.com' },
                { label: 'Phone Number', value: '+1 (555) 902-4421' },
                { label: 'Official Role', value: 'Chief Technology Officer' },
              ].map((field) => (
                <div key={field.label}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {field.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── System Permissions ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <h2 className="text-base font-bold text-slate-800 mb-5">System Permissions</h2>

            <div className="grid grid-cols-2 gap-3">
              {permissions.map((perm) => {
                const Icon = perm.icon
                return (
                  <div
                    key={perm.id}
                    className={`${perm.bg} border ${perm.border} rounded-xl p-4 flex items-start gap-3 hover:shadow-sm transition-all cursor-default`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${perm.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon size={15} className={perm.iconColor} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 mb-0.5">{perm.label}</p>
                      <p className="text-[10px] text-slate-500 leading-snug">{perm.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Recent Activity ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <h2 className="text-base font-bold text-slate-800 mb-5">Recent Activity</h2>

            <div className="space-y-4">
              {activities.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 ${idx < activities.length - 1 ? 'pb-4 border-b border-slate-100' : ''}`}
                >
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.active ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                  <div>
                    <p className={`text-sm font-semibold ${item.active ? 'text-slate-800' : 'text-slate-500'}`}>
                      {item.text}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.time} · <span className="font-medium">{item.category}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════ Right Column ════ */}
        <div className="lg:col-span-5 space-y-5">

          {/* ── Security & Identity ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <LuShieldCheck size={16} className="text-teal-600" />
              <h3 className="text-base font-bold text-slate-800">Security & Identity</h3>
            </div>

            <div className="space-y-3">
              {/* Change Password */}
              <button className="w-full flex items-center justify-between p-3.5 bg-slate-100 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center">
                    <TbLock size={26} className="text-slate-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Change Password</span>
                </div>
                <ChevronRight size={15} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
              </button>

              {/* Two-Factor Auth */}
              <div className="flex items-center justify-between p-3.5 bg-slate-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center">
                    <BiSolidCheckShield size={26} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Two-Factor Authentication</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Enhanced protection enabled</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                  ACTIVE
                </span>
              </div>

              {/* Session Timeout */}
              <div className="flex items-center justify-between p-3.5 bg-slate-100 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center">
                    <TfiTimer size={26} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Session Timeout</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">System auto-lock after inactivity</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-700">30 min</span>
              </div>
            </div>
          </div>

          {/* ── Login Activity ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4">Login Activity</h3>

            <div className="space-y-3">
              {loginSessions.map((session, idx) => {
                const Icon = session.icon
                return (
                  <div
                    key={session.id}
                    className={`flex items-center justify-between ${idx < loginSessions.length - 1 ? 'pb-3 border-b border-slate-100' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{session.device}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{session.location}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${session.badgeColor}`}>
                      {session.badge}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Environment Scope ── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4">Environment Scope</h3>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Access Level</p>
                <p className="text-sm font-bold text-slate-800">Level 5 (Root)</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Environment</p>
                <p className="text-sm font-bold text-slate-800">Production</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Region Scope</p>
              <p className="text-sm font-bold text-slate-800">Global / All Jurisdictions</p>
            </div>
          </div>

          {/* ── Critical Actions ── */}
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-base font-bold text-rose-900">Critical Actions</h3>
            </div>

            <div className="space-y-2.5">
              {/* Logout all devices */}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full border border-rose-200 bg-white text-sm font-semibold text-rose-900 hover:bg-rose-100 transition-all cursor-pointer">
                <LogOut size={20} />
                Logout from all devices
              </button>

              {/* Reset Security Keys */}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full border border-rose-200 bg-white text-sm font-semibold text-rose-900 hover:bg-rose-100 transition-all cursor-pointer">
                <RotateCcw size={20} />
                Reset Security Keys
              </button>

              {/* Deactivate */}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-rose-700 text-white text-sm font-semibold hover:bg-rose-800 shadow-md shadow-rose-200/50 transition-all cursor-pointer">
                <LiaUserAltSlashSolid size={20} />
                Deactivate Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminProfile