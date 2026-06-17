import React, { useState } from 'react'
import {
    Save, RotateCcw, User, Shield, Clock, Wifi,
    ChevronRight, ChevronDown, LogOut, HelpCircle,
    AlertTriangle, Info, Monitor, Key, Bell, Globe,
    CalendarDays, Pencil, ToggleLeft, ToggleRight
} from 'lucide-react'
import { MdInsertChartOutlined, MdOutlineLoop } from 'react-icons/md'
import { LuShieldCheck } from 'react-icons/lu'
import { GoRocket } from 'react-icons/go'
import { IoMdWarning } from 'react-icons/io'

/* ─────────────────────────── sub-components ─────────────────────────── */

const SectionCard = ({ children, className = '' }) => (
    <div className={`bg-white rounded-2xl border border-slate-100 p-6 ${className}`}>
        {children}
    </div>
)

const SectionTitle = ({ icon: Icon, children }) => (
    <div className="flex items-center gap-2 mb-5">
        {Icon && <Icon size={16} className="text-teal-600 shrink-0" />}
        <h2 className="text-base font-bold text-slate-800">{children}</h2>
    </div>
)

const Toggle = ({ enabled, onToggle }) => (
    <button
        onClick={onToggle}
        className={`relative inline-flex w-10 h-5.5 shrink-0 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${enabled ? 'bg-teal-600' : 'bg-slate-200'}`}
        style={{ height: '22px', width: '40px' }}
    >
        <span
            className={`inline-block w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 mt-[3px] ${enabled ? 'translate-x-5' : 'translate-x-1'}`}
        />
    </button>
)

const SelectRow = ({ label, value }) => (
    <div className="flex items-center justify-between py-3.5 border-b border-slate-100 last:border-0">
        <span className="text-sm text-slate-600">{label}</span>
        <button className="flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
            {value}
            <ChevronDown size={13} />
        </button>
    </div>
)

/* ─────────────────────────── data ─────────────────────────── */

const infoStats = [
    { id: 'name', icon: User, label: 'Admin Name', value: 'Sarah Jenkins', iconBg: 'bg-teal-50', iconColor: 'text-teal-600' },
    { id: 'role', icon: Shield, label: 'Role', value: 'Global Controller', iconBg: 'bg-purple-50', iconColor: 'text-purple-500' },
    { id: 'login', icon: Clock, label: 'Last Login', value: '24m ago', iconBg: 'bg-amber-50', iconColor: 'text-amber-500' },
    { id: 'status', icon: Wifi, label: 'System Status', value: 'Online & Secure', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
]

const permissionTags = ['LOG VIEW', 'SYS CONFIG', 'USR AUTH', 'ARCHIVAL MGTS']

const notifications = [
    { id: 'incident', label: 'Incident alerts', desc: 'Critical system breaches or failures', defaultOn: true },
    { id: 'compliance', label: 'Compliance alerts', desc: 'Periodic regulatory check updates', defaultOn: true },
    { id: 'policy', label: 'Policy updates', desc: 'Internal procedure modifications', defaultOn: false },
    { id: 'system', label: 'System alerts', desc: 'General maintenance and uptime info', defaultOn: true },
]

/* ─────────────────────────── component ─────────────────────────── */

const AdminSettings = () => {
    const [fullName, setFullName] = useState('Sarah Jenkins')
    const [email, setEmail] = useState('s.jenkins@tmg180.com')
    const [notifState, setNotifState] = useState(
        Object.fromEntries(notifications.map(n => [n.id, n.defaultOn]))
    )
    const [betaFeatures, setBetaFeatures] = useState(false)
    const [autoReporting, setAutoReporting] = useState(true)

    const toggleNotif = (id) =>
        setNotifState(prev => ({ ...prev, [id]: !prev[id] }))

    return (
        <div className="p-8 max-w-350 mx-auto space-y-6">

            {/* ── Header ── */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
                    <p className="text-slate-500 text-sm mt-1.5 max-w-lg leading-relaxed">
                        Manage system configuration, access control, and preferences. Your environment is
                        calibrated to support your organizational workflow.
                    </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-1">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
                        Reset
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 shadow-md shadow-teal-200/50 hover:shadow-none transition-all cursor-pointer">
                        <Save size={14} />
                        Save Changes
                    </button>
                </div>
            </div>

            {/* ── Info Bar ── */}
            <div className="grid grid-cols-4 gap-4">
                {infoStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div
                            key={stat.id}
                            className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-3 hover:shadow-sm transition-all"
                        >
                            <div className={`w-9 h-9 rounded-full ${stat.iconBg} flex items-center justify-center shrink-0`}>
                                <Icon size={16} className={stat.iconColor} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{stat.label}</p>
                                <p className="text-sm font-bold text-slate-800 truncate">{stat.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* ── Main 2-column Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                {/* ════ Left Column ════ */}
                <div className="space-y-5">

                    {/* ── Admin Profile ── */}
                    <SectionCard>
                        <div className="flex items-start gap-4 mb-5">
                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-teal-400 to-teal-700 overflow-hidden flex items-center justify-center">
                                    <User size={28} className="text-white/80" />
                                </div>
                                <button className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-900 transition-colors">
                                    <Pencil size={9} className="text-white" />
                                </button>
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-slate-800">Admin Profile</h2>
                                <p className="text-xs text-slate-400 mt-0.5">Personalize your administrative identity</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                                />
                            </div>
                        </div>
                    </SectionCard>

                    {/* ── Access Control ── */}
                    <SectionCard>
                        <SectionTitle icon={Key}>Access Control</SectionTitle>

                        <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-700">Role Permissions</span>
                                <span className="text-[10px] font-bold bg-teal-700 text-white px-2.5 py-0.5 rounded-full">
                                    LEVEL 4 ADMIN
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-3">
                                You have unrestricted access to all regional clusters, system logs, and security
                                protocols. Changes to this level require Board oversight.
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {permissionTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full uppercase tracking-wide"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SectionCard>

                    {/* ── System Preferences ── */}
                    <SectionCard>
                        <SectionTitle icon={Globe}>System Preferences</SectionTitle>
                        <SelectRow label="Language" value="English (US)" />
                        <SelectRow label="Timezone" value="GMT -5:00 (EST)" />
                        <SelectRow label="Date Format" value="MM/DD/YYYY" />
                    </SectionCard>

                    {/* ── Notifications ── */}
                    <SectionCard>
                        <SectionTitle icon={Bell}>Notifications</SectionTitle>
                        <div className="space-y-1">
                            {notifications.map((notif, idx) => (
                                <div
                                    key={notif.id}
                                    className={`flex items-center justify-between py-3 ${idx < notifications.length - 1 ? 'border-b border-slate-100' : ''}`}
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">{notif.label}</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">{notif.desc}</p>
                                    </div>
                                    <Toggle
                                        enabled={notifState[notif.id]}
                                        onToggle={() => toggleNotif(notif.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* ── Bottom links ── */}
                    <div className="flex flex-col justify-center items-start gap-5 px-1 mt-10">
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-teal-600 transition-colors cursor-pointer">
                            <HelpCircle size={20} />
                            Support
                        </button>
                        <button className="flex items-center gap-2 text-sm font-semibold text-rose-800 hover:text-rose-900 transition-colors cursor-pointer">
                            <LogOut size={20} />
                            Logout
                        </button>
                    </div>
                </div>

                {/* ════ Right Column ════ */}
                <div className="space-y-5">

                    {/* ── Security Settings ── */}
                    <SectionCard>
                        <SectionTitle icon={LuShieldCheck}>Security Settings</SectionTitle>

                        {/* Password Reset */}
                        <button className="w-full flex items-center justify-between p-4 px-8 bg-gray-100 rounded-full transition-all cursor-pointer group mb-3">
                            <div className="text-left">
                                <p className="text-sm font-semibold text-slate-700">Password Reset</p>
                                <p className="text-[11px] text-slate-400 mt-0.5">Reset your credentials regularly</p>
                            </div>
                            <ChevronRight size={15} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
                        </button>

                        {/* Session Timeout */}
                        <div className="flex items-center justify-between p-4 px-8 rounded-full bg-gray-100 mb-4">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">Session Timeout</p>
                                <p className="text-[11px] text-slate-400 mt-0.5">Duration of inactivity before logout</p>
                            </div>
                            <button className="flex items-center gap-1.5 text-sm font-semibold text-primary border border-slate-200 rounded-lg px-3 py-1.5  cursor-pointer">
                                15 Minutes
                                <ChevronDown size={12} />
                            </button>
                        </div>

                        {/* Active Sessions */}
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                Active Sessions
                            </p>
                            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                                        <Monitor size={14} className="text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Chrome on macOS Monterey</p>
                                        <p className="text-[10px] text-slate-400 mt-0.5">Current session • 192.168.1.1</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    Active Now
                                </span>
                            </div>
                        </div>
                    </SectionCard>

                    {/* ── Data & Privacy ── */}
                    <SectionCard>
                        <SectionTitle>Data & Privacy</SectionTitle>

                        {/* Info box */}
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4 flex gap-3">
                            <Info size={15} className="text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Your administrative account uses <strong>metadata-only access</strong>. Actual patient
                                or client data remains encrypted and invisible unless a specific audit key is authorized.
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">Data visibility rules</p>
                                <p className="text-[11px] text-slate-400 mt-0.5">Define how sensitive fields are masked</p>
                            </div>
                            <button className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
                                Configure
                            </button>
                        </div>
                    </SectionCard>

                    {/* ── System Configuration ── */}
                    <SectionCard>
                        <SectionTitle>System Configuration</SectionTitle>

                        <div className="space-y-4">
                            {/* Beta Features */}
                            <div className="bg-slate-50 flex items-center justify-between p-3.5 rounded-3xl border-2 border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <GoRocket size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Beta Features</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">Enable early access to performance modules</p>
                                    </div>
                                </div>
                                <Toggle enabled={betaFeatures} onToggle={() => setBetaFeatures(p => !p)} />
                            </div>

                            {/* Auto-Reporting */}
                            <div className="bg-slate-50 flex items-center justify-between p-3.5 rounded-3xl border-2 border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <MdInsertChartOutlined size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Auto-Reporting</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5">Generate weekly compliance briefs automatically</p>
                                    </div>
                                </div>
                                <Toggle enabled={autoReporting} onToggle={() => setAutoReporting(p => !p)} />
                            </div>
                        </div>
                    </SectionCard>

                    {/* ── Danger Zone ── */}
                    <div className="bg-rose-100 border border-rose-200 rounded-3xl p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-6">
                            <IoMdWarning size={20} className="text-rose-800" />
                            <h2 className="text-base font-bold text-rose-700">Danger Zone</h2>
                        </div>

                        {/* Reset all preferences */}
                        <div className="flex items-center justify-between p-4 bg-rose-50 rounded-full">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">Reset all preferences</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                    Reset the UI and notifications to factory state
                                </p>
                            </div>
                            <button className="px-3 py-1.5 rounded-full border border-rose-800 text-xs font-bold text-rose-800 hover:bg-rose-100 transition-colors cursor-pointer whitespace-nowrap">
                                Reset Settings
                            </button>
                        </div>

                        {/* Deactivate account */}
                        <div className="flex items-center justify-between p-4 bg-rose-50 rounded-full">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">Deactivate account</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                    Immediately suspend administrative access
                                </p>
                            </div>
                            <button className="px-3 py-1.5 rounded-full bg-rose-800 text-xs font-bold text-white hover:bg-rose-700 shadow-md shadow-rose-200/50 hover:shadow-none transition-all cursor-pointer whitespace-nowrap">
                                Deactivate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSettings