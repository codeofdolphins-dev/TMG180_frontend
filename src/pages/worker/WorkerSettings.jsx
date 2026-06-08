import React, { useState } from 'react'
import { BsPatchCheck } from 'react-icons/bs';
import { CiCamera, CiLock } from 'react-icons/ci';
import { LiaIdCardSolid } from 'react-icons/lia';
import { MdBusiness, MdOutlineAccountBalanceWallet, MdOutlineDeleteForever, MdOutlineHelpCenter, MdOutlineSupportAgent } from 'react-icons/md';
import uploadBgIcon from "/images/uploadBG.jpg"
import { PiShieldCheckeredFill } from 'react-icons/pi';
import { LuBellRing, LuShieldCheck } from 'react-icons/lu';
import { TbShieldSearch } from 'react-icons/tb';
import { RiGraduationCapLine } from 'react-icons/ri';
import { FaArrowRightFromBracket, FaUserGear } from 'react-icons/fa6';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const WorkerSettings = () => {
    // State Management for Toggle Switches
    const [toggles, setToggles] = useState({
        automaticLogout: true,
        complianceDeadlines: true,
        learningHubUpdates: true,
        policyAcknowledgements: false,
        sessionReminders: true
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };



    return (
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6">

            {/* title & buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Settings</h1>
                    <p className="text-slate-500 text-lg font-light">Manage your account, preferences, and business details with ease and clarity.</p>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <button className="bg-blue-200 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                        Reset
                    </button>
                    <button className="bg-primary hover:bg-secondary text-white font-bold px-6 py-2.5 rounded-full shadow-md shadow-primary/10 transition-all transform active:scale-98 cursor-pointer">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* subscription status bar widget */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6 md:gap-12 text-xs font-medium">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-sky-100 text-primary rounded-full border border-green-100 flex items-center justify-center text-sm">
                            <MdBusiness size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Rivera Care Services</h4>
                            <span className="text-[10px] text-slate-400 block font-medium mt-0.5">Business ID: #4492-AX</span>
                        </div>
                    </div>

                    <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Subscription</span>
                        <span className="text-slate-800 font-bold flex items-center gap-1">
                            Professional Plan
                            <BsPatchCheck size={18} className='text-teal-600' />
                        </span>
                    </div>

                    <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Account Status</span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ACTIVE</span>
                    </div>
                </div>

                <button className="text-xs font-bold text-primary hover:text-secondary hover:underline cursor-pointer transition-colors">
                    View Subscription Detail
                </button>
            </div>

            {/* Main grid layout: 2-column split (Left side: Content Modules, Right side: Quick Widgets) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Left main module panel (column 7) */}
                <div className="lg:col-span-7 space-y-6">

                    {/* Business Identity */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-slate-900">
                                <LiaIdCardSolid size={28} className='text-primary' />
                                <h3 className="text-base font-black tracking-tight">Business Identity</h3>
                            </div>
                            <button className="text-base font-bold text-primary hover:underline cursor-pointer">Edit Details</button>
                        </div>

                        {/* Logo Upload Section */}
                        <div className="relative flex items-center space-x-4">

                            <div className="relative w-22 h-22">
                                <div className="w-full h-full rounded-2xl bg-slate-50 flex items-center justify-center relative shadow-3xs overflow-hidden">
                                    <img
                                        src={uploadBgIcon}
                                        alt="UploadBgIcon"
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className="absolute -bottom-2 -right-2 z-9 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-3xl">
                                    <CiCamera size={20} className='text-primary' />
                                </div>
                            </div>


                            <div className="space-y-1.5">
                                <h4 className="text-sm font-bold text-slate-800 leading-none">Rivera Care Services</h4>
                                <p className="text-[11px] text-slate-400 font-medium">Principal: Alex Rivera</p>
                                <button className="border border-slate-200 hover:border-slate-300 px-3 py-1 rounded-full text-sm font-bold text-primary transition-colors cursor-pointer bg-white shadow-3xs">
                                    Update Logo
                                </button>
                            </div>
                        </div>

                        {/* Form Fields Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business Name</label>
                                <input type="text" readOnly value="Rivera Care Services" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">ABN</label>
                                <input type="text" readOnly value="54 123 456 789" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact Email</label>
                                <input type="email" readOnly value="alex@riveracare.com" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</label>
                                <input type="text" readOnly value="+61 400 123 456" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Role Type</label>
                                <input type="text" readOnly value="Support Worker" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Member Since</label>
                                <input type="text" readOnly value="October 2023" className="w-full bg-slate-50/70 border border-slate-200/50 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-800 outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Account Security */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs space-y-4">
                        <div className="flex items-center space-x-2 text-slate-900">
                            <div className="p-2.5 bg-green-50 rounded-full">
                                <FaUserGear size={16} className='text-primary' />
                            </div>
                            <h3 className="text-base font-black tracking-tight">Account Security</h3>
                        </div>

                        <div className="space-y-3.5 text-xs">
                            {/* Login Email */}
                            <div className="bg-slate-50/50 border border-slate-100 rounded-full p-5 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Login Email</span>
                                    <span className="text-slate-800 font-bold">alex.rivera@tmg180.com</span>
                                </div>
                                <button className="text-base font-bold text-[#1E5A54] hover:underline cursor-pointer">Update</button>
                            </div>

                            {/* Security Password */}
                            <div className="bg-slate-50/50 border border-slate-100 rounded-full p-5 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Security Password</span>
                                    <span className="text-slate-400 tracking-widest block font-sans font-bold">••••••••••••••••••••</span>
                                </div>
                                <button className="bg-white border border-slate-200 px-3 py-2 text-sm rounded-full font-bold text-slate-700 hover:border-slate-300 shadow-3xs transition-all cursor-pointer">
                                    Reset Password
                                </button>
                            </div>

                            {/* Session Management */}
                            <div className="bg-slate-50 border border-slate-100 rounded-full p-6 flex items-start space-x-2">
                                <IoMdInformationCircleOutline size={22} className='text-gray-500' />
                                <div className="space-y-3 flex-1">
                                    <div>
                                        <h5 className="text-base font-bold text-slate-800">Session Management</h5>
                                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                                            You are currently logged in on 3 devices. Sessions expire automatically after 24 hours of inactivity.
                                        </p>
                                    </div>
                                    <button className="text-sm font-bold text-[#9F403D] flex items-center gap-1.5 cursor-pointer">
                                        <span>Logout All Sessions</span>
                                        <i className="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finance Preferences */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs space-y-5">
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-slate-900">
                                <MdOutlineAccountBalanceWallet size={20} className='text-primary' />
                                <h3 className="text-lg font-black tracking-tight">Finance Preferences</h3>
                            </div>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">No obligation. Just structure, if you want it. These values help generate your monthly business projections.</p>
                        </div>

                        <div className="space-y-5 pt-1 text-sm text-slate-600">
                            {/* Tax Set-aside Slider */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-800 text-base">Tax Set-aside</span>
                                    <span className="bg-teal-100 text-teal-700 font-extrabold px-2 py-0.5 rounded-full border border-sky-100/50">30%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full relative">
                                    <div className="bg-[#1E5A54] h-full rounded-full w-[30%]" />
                                    <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#1E5A54] rounded-full shadow-sm" />
                                </div>
                                <div className="flex justify-between text-slate-500 font-bold">
                                    <span>0%</span>
                                    <span className="font-normal">Conservative (30%)</span>
                                    <span>50%</span>
                                </div>
                            </div>

                            {/* Superannuation Goal Slider */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-800 text-base">Superannuation Goal</span>
                                    <span className="bg-teal-100 text-teal-700 font-extrabold px-2 py-0.5 rounded-full border border-sky-100/50">11.5%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full relative">
                                    <div className="bg-[#1E5A54] h-full rounded-full w-[46%]" />
                                    <div className="absolute top-1/2 left-[46%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#1E5A54] rounded-full shadow-sm" />
                                </div>
                                <div className="flex justify-between text-slate-500 font-bold">
                                    <span>0%</span>
                                    <span className="font-normal">Current SGC (11.5%)</span>
                                    <span>25%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right quick widgets panel (column 5) */}
                <div className="lg:col-span-5 space-y-6">

                    {/* Privacy & Security Widget */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="p-1 bg-teal-50 rounded-full">
                                <CiLock size={20} className='text-primary' />
                            </div>
                            <h4 className="text-sm font-black tracking-tight uppercase">Privacy & Security</h4>
                        </div>

                        <div className="space-y-4 text-xs">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-bold text-slate-800">Automatic Logout</h5>
                                    <p className="text-[10px] text-slate-400 font-light mt-0.5">Log out after 30 mins of inactivity</p>
                                </div>
                                {/* Toggle Switch */}
                                <button
                                    onClick={() => handleToggle('automaticLogout')}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles.automaticLogout ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                >
                                    <div className={`bg-white w-5 h-5 rounded-full shadow-3xs transform duration-200 ${toggles.automaticLogout ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            <div className="h-px bg-slate-50" />

                            {/* Disclaimer Info Notice 1 */}
                            <div className="bg-slate-50 border border-slate-100/70 rounded-xl p-3 flex items-start space-x-2.5 text-slate-500 leading-relaxed text-[11px] font-medium">
                                <PiShieldCheckeredFill size={24} className='text-primary' />
                                <p><span className="font-bold text-slate-700">Encrypted Storage:</span> All participant data and session notes are encrypted at rest using AES-256 standards.</p>
                            </div>
                            {/* Disclaimer Info Notice 2 */}
                            <div className="bg-slate-50 border border-slate-100/70 rounded-xl p-3 flex items-start space-x-2.5 text-slate-500 leading-relaxed text-[11px] font-medium">
                                <i className="fa-regular fa-eye-slash text-primary text-xs mt-0.5 shrink-0"></i>
                                <p><span className="font-bold text-slate-700">Privacy Note:</span> Admins can access status metadata (e.g., log frequency), not private participant content.</p>
                            </div>
                        </div>
                    </div>

                    {/* Reminders Widget */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs space-y-4">
                        <div className="flex items-center space-x-2 text-slate-900">
                            <div className="p-2 bg-teal-50 rounded-full">
                                <LuBellRing size={18} className='text-primary' />
                            </div>
                            <h4 className="text-sm font-black tracking-tight uppercase">Reminders</h4>
                        </div>

                        <div className="space-y-3.5 text-xs font-bold text-slate-700">
                            {[
                                { key: 'complianceDeadlines', label: 'Compliance Deadlines' },
                                { key: 'learningHubUpdates', label: 'Learning Hub Updates' },
                                { key: 'policyAcknowledgements', label: 'Policy Acknowledgements' },
                                { key: 'sessionReminders', label: 'Participant Session Reminders' }
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between">
                                    <span className="tracking-tight">{item.label}</span>
                                    <button
                                        onClick={() => handleToggle(item.key)}
                                        className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles[item.key] ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                    >
                                        <div className={`bg-white w-5 h-5 rounded-full shadow-3xs transform duration-200 ${toggles[item.key] ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access Widget */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-2xs space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Access</h4>
                        <div className="space-y-1">
                            {[
                                { label: "Practice Standing", icon: LuShieldCheck, color: "text-emerald-500" },
                                { label: "Learning Hub", icon: RiGraduationCapLine, color: "text-indigo-500" },
                                { label: "Policies Library", icon: TbShieldSearch, color: "text-amber-500" },
                                { label: "Help Center", icon: MdOutlineHelpCenter, color: "text-sky-500" }
                            ].map((item, idx) => {
                                const Icon = item.icon;

                                return <button key={idx} className="w-full p-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors text-left cursor-pointer group">
                                    <div className="flex items-center space-x-3">
                                        <Icon size={22} className={item.color} />
                                        <span className="tracking-tight group-hover:text-slate-900">{item.label}</span>
                                    </div>
                                    <i className="fa-solid fa-chevron-right text-slate-300 text-[10px] transform group-hover:translate-x-0.5 transition-transform"></i>
                                </button>
                            })}
                        </div>
                    </div>

                    {/* Danger Zone & Support Widget */}
                    <div className="bg-[#F9EEEE] border border-rose-200 rounded-3xl p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                        <h4 className="text-sm font-bold text-[#9F403D] uppercase tracking-wider">Danger Zone & Support</h4>
                        <div className="space-y-3 px-4">
                            <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-[13px] px-4 py-3 rounded-full shadow-3xs flex items-center justify-start space-x-2 transition-colors cursor-pointer">
                                <MdOutlineSupportAgent size={24} className='text-primary' />
                                <span>Contact Support Team</span>
                            </button>
                            <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-[13px] px-4 py-3 rounded-full shadow-3xs flex items-center justify-start space-x-2 transition-colors cursor-pointer">
                                <FaArrowRightFromBracket size={20} />
                                <span>Log Out</span>
                            </button>
                            <button className="w-full bg-rose-500/5 border border-rose-200/50 text-[#9F403D] font-bold text-[13px] px-4 py-3 rounded-full shadow-3xs flex items-center justify-start space-x-2 transition-colors cursor-pointer">
                                <MdOutlineDeleteForever size={24} color='#9F403D' />
                                <span>Deactivate Account</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default WorkerSettings