import React, { useState } from 'react';
import { Link } from 'react-router';
import {
    MdOutlinePerson,
    MdOutlineFavorite,
    MdOutlineChatBubbleOutline,
    MdOutlineShield,
    MdOutlineLock,
    MdOutlinePhotoCamera,
    MdOutlineInfo,
    MdKeyboardArrowRight,
} from 'react-icons/md';
import { RiShieldCheckLine } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { FiMonitor } from 'react-icons/fi';
import { TbCircleCheck, TbCircle } from 'react-icons/tb';
import { LuBadgeCheck } from 'react-icons/lu';
import { BsCheckCircleFill, BsThreeDots } from 'react-icons/bs';
import Breadcrumb from '../../components/Breadcrumb';
import { FaCheckCircle, FaPlus, FaRegCheckCircle, FaRegHeart, FaRegSave } from 'react-icons/fa';
import { BiShieldQuarter } from 'react-icons/bi';
import ImageComponent from '../../components/ImageComponent';
import { GoLightBulb } from 'react-icons/go';

// ── Support preference tag ─────────────────────────────────────────────────
const PreferenceTag = ({ label, active, onRemove }) => (
    <span
        className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all tracking-wide
            ${active
                ? 'bg-sky-200 text-primary border border-[#b3e6e0]'
                : 'bg-slate-100 text-slate-500 border border-slate-200 hover:border-slate-300'
            }`}
    >
        {label}
        {active && (
            <FaRegCheckCircle className="text-primary" size={16} />
        )}
    </span>
);

// ── Communication style card ───────────────────────────────────────────────
const CommCard = ({ icon: Icon, title, desc, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 flex flex-col items-start gap-2 p-4 rounded-2xl border text-left transition-all cursor-pointer
            ${active
                ? 'bg-white border-[#1E5A54] shadow-sm'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
    >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center
            ${active ? 'bg-[#e0f5f3] text-[#1E5A54]' : 'bg-slate-100 text-slate-500'}`}>
            <Icon size={16} />
        </div>
        <div>
            <p className={`text-xs font-bold ${active ? 'text-slate-800' : 'text-slate-500'}`}>{title}</p>
            {desc && <p className="text-[11px] text-slate-400 font-light leading-snug mt-0.5">{desc}</p>}
        </div>
    </button>
);

// ── Boundary checkbox row ─────────────────────────────────────────────────
const BoundaryRow = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer select-none">
        <button
            type="button"
            onClick={onChange}
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all focus:outline-none ${checked ? "" : "border"}`}
        >
            {checked ? <FaCheckCircle size={18} className='text-primary' /> : <div className="w-full h-full rounded-full"></div>}
        </button>
        <span className="text-sm text-slate-700 font-medium">{label}</span>
    </label>
);

const HEADER_LINKS = [
    { label: "My Profile", endpoint: "/participant/profile" },
    { label: "Edit Profile" }
]

// ═══════════════════════════════════════════════════════════════════════════
const EditProfile = () => {

    /* ── form state ────────────────────────────────────────────────────── */
    const [form, setForm] = useState({
        fullName: 'Elena Rodriguez',
        email: 'elena.r@tmg180.org',
        phone: '+1 (555) 012-3456',
        location: 'San Francisco, CA',
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    /* ── support preferences ───────────────────────────────────────────── */
    const ALL_PREFS = [
        'Mental Health Support',
        'Emotional Well-being',
        'Creative Expression',
        'Career Guidance',
        'Physical Mobility',
        'Peer Mentorship',
    ];
    const [activePrefs, setActivePrefs] = useState([
        'Mental Health Support', 'Emotional Well-being', 'Physical Mobility',
    ]);

    const togglePref = (pref) =>
        setActivePrefs((prev) =>
            prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
        );

    /* ── communication style ───────────────────────────────────────────── */
    const [commStyle, setCommStyle] = useState('Text Messaging');

    /* ── comfort & boundaries ──────────────────────────────────────────── */
    const [boundaries, setBoundaries] = useState({
        'Needs quiet environment': true,
        'Prefers 60min sessions': false,
        'Wheelchair accessible routes': true,
        'Sensitive to bright lights': false,
    });

    const toggleBoundary = (key) =>
        setBoundaries((prev) => ({ ...prev, [key]: !prev[key] }));

    /* ── profile photo ─────────────────────────────────────────────────── */
    const profilePhoto = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80';

    /* ── security ──────────────────────────────────────────────────────── */
    const [twoFAEnabled] = useState(false);

    return (
        <main className="flex-1 overflow-y-auto p-8 lg:p-10 bg-slate-50/50 min-h-screen">

            {/* ── Breadcrumb + header ─────────────────────────────────── */}
            <div className="mb-6">
                <Breadcrumb
                    options={HEADER_LINKS}
                />
                <h1 className="text-xl font-black text-slate-900 tracking-tight">Edit Profile</h1>
                <p className="text-sm text-slate-500 font-medium mt-0.5">
                    Manage your personal information and support preferences.
                </p>
            </div>

            {/* ── Main grid: left column (forms) + right column (photo/security) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ━━━━━━━━━━━━━━━━━━━━ LEFT COLUMN ━━━━━━━━━━━━━━━━━━━━━━ */}
                <div className="lg:col-span-2 space-y-6">

                    {/* ── Personal Information ──────────────────────────── */}
                    <section className="bg-white border border-slate-100 rounded-4xl p-6 shadow-xs">
                        <div className="flex items-center gap-2 mb-5">
                            <MdOutlinePerson size={20} className="text-[#1E5A54]" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">
                                Personal Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Full Name', name: 'fullName', placeholder: 'Elena Rodriguez' },
                                { label: 'Email Address', name: 'email', placeholder: 'elena.r@tmg180.org', type: 'email' },
                                { label: 'Phone Number', name: 'phone', placeholder: '+1 (555) 012-3456', type: 'tel' },
                                { label: 'Location', name: 'location', placeholder: 'San Francisco, CA' },
                            ].map(({ label, name, placeholder, type = 'text' }) => (
                                <div key={name} className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor={`ep-${name}`}
                                        className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider"
                                    >
                                        {label}
                                    </label>
                                    <input
                                        id={`ep-${name}`}
                                        type={type}
                                        name={name}
                                        value={form[name]}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1E5A54]/20 focus:border-[#1E5A54] transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Support Preferences ───────────────────────────── */}
                    <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <FaRegHeart size={18} className="text-primary" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">
                                Support Preferences
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 font-normal mb-4 tracking-wide">
                            Select the areas where you'd like the most support. We'll use this to match you with compatible workers.
                        </p>

                        <div className="flex flex-col gap-3">
                            {/* Preference tags */}
                            <div className="flex flex-wrap gap-2">
                                {ALL_PREFS.map((pref) => (
                                    <button key={pref} onClick={() => togglePref(pref)} className="cursor-pointer">
                                        <PreferenceTag label={pref} active={activePrefs.includes(pref)} />
                                    </button>
                                ))}
                            </div>

                            {/* Add Preference — separate line */}
                            <button className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-sm font-semibold text-slate-400 border-2 border-dashed border-slate-300 hover:border-slate-400 hover:text-slate-500 transition-all cursor-pointer w-fit tracking-wide">
                                <FaPlus size={12} />Add Preference
                            </button>
                        </div>
                    </section>

                    {/* ── Communication Style ───────────────────────────── */}
                    {/* <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs">
                        <div className="flex items-center gap-2 mb-5">
                            <MdOutlineChatBubbleOutline size={18} className="text-[#1E5A54]" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">
                                Communication Style
                            </h2>
                        </div>

                        <div className="flex gap-3">
                            {[
                                { icon: FiMonitor, title: 'Text Messaging', desc: 'Quick updates and check-ins.' },
                                { icon: IoCallOutline, title: 'Voice Calls', desc: 'Deeper discussions via phone.' },
                                { icon: HiOutlineUserGroup, title: 'In-person', desc: 'Face-to-face sessions.' },
                            ].map(({ icon, title, desc }) => (
                                <CommCard
                                    key={title}
                                    icon={icon}
                                    title={title}
                                    desc={desc}
                                    active={commStyle === title}
                                    onClick={() => setCommStyle(title)}
                                />
                            ))}
                        </div>
                    </section> */}

                    {/* ── Comfort & Boundaries ──────────────────────────── */}
                    <section className="bg-white border border-slate-100 rounded-3xl p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <BiShieldQuarter size={24} className="text-[#1E5A54]" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">
                                Comfort &amp; Boundaries
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(boundaries).map(([key, checked]) => (
                                <BoundaryRow
                                    key={key}
                                    label={key}
                                    checked={checked}
                                    onChange={() => toggleBoundary(key)}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                {/* ━━━━━━━━━━━━━━━━━━━━ RIGHT COLUMN ━━━━━━━━━━━━━━━━━━━━━ */}
                <div className="space-y-5">

                    {/* ── Profile Photo card ────────────────────────────── */}
                    <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col items-center gap-4">
                        {/* Avatar */}
                        <div className="relative">
                            <ImageComponent
                                src={profilePhoto}
                                alt="Profile"
                                lowerIcon={true}
                            />
                        </div>

                        {/* Name & location */}
                        <div className="text-center">
                            <p className="text-sm font-black text-slate-900">{form.fullName}</p>
                            <p className="text-xs text-slate-400 font-medium mt-0.5">{form.location}</p>
                        </div>

                        {/* Actions */}
                        <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer">
                            Change Photo
                        </button>
                        <button className="text-xs text-danger font-semibold hover:opacity-80 transition-opacity cursor-pointer">
                            Remove Current
                        </button>
                    </section>

                    {/* ── Security card ─────────────────────────────────── */}
                    <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-1">
                        <div className="flex items-center gap-2 mb-3">
                            <MdOutlineLock size={18} className="text-primary" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight">Security</h2>
                        </div>

                        <div className="space-y-4">
                            {/* Change Password */}
                            <button className="w-full flex items-center justify-between py-3 px-5 rounded-full bg-slate-100 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <span className="border-b-2"><BsThreeDots size={24} /></span>
                                    <span className="text-sm font-bold text-slate-700">Change Password</span>
                                </div>
                                <MdKeyboardArrowRight size={24} />
                            </button>

                            {/* 2FA */}
                            <button className="w-full flex items-center justify-between py-3 px-5 rounded-full bg-slate-100 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <RiShieldCheckLine size={20} />
                                    <div className="text-left">
                                        <p className="text-xs font-bold text-slate-700">Two-Factor Auth</p>
                                        <p className={`text-[11px] font-semibold ${twoFAEnabled ? 'text-success' : 'text-danger'}`}>
                                            {twoFAEnabled ? 'Enabled' : 'Currently Disabled'}
                                        </p>
                                    </div>
                                </div>
                                <MdKeyboardArrowRight size={24} />
                            </button>
                        </div>
                    </section>

                    {/* ── Profile Transparency tip ──────────────────────── */}
                    <section className="bg-[#f0faf9] border border-[#c8ebe7] rounded-3xl p-5 space-y-2 relative overflow-hidden">
                        <GoLightBulb size={24} className="text-[#1E5A54]" />
                        <h3 className="text-sm font-black text-[#1E5A54] tracking-tight">Profile Transparency</h3>
                        <p className="text-xs text-[#2a756d] font-medium leading-relaxed">
                            Updating your support preferences helps our matching algorithm find workers who truly align with your needs.
                        </p>
                        {/* Decorative circle */}
                        <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-[#1E5A54]/10" />
                    </section>

                </div>
            </div>

            {/* ── Footer Actions ─────────────────────────────────────────── */}
            <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
                <Link
                    to="/participant/profile"
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                    Discard Changes
                </Link>
                <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2">
                    <FaRegSave size={20} />
                    Save Changes
                </button>
            </div>

        </main>
    );
};

export default EditProfile;