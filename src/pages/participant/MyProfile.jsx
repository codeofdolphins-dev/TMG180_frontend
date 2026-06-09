import React, { useState } from 'react'
import { BsStars } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { LuBellRing } from 'react-icons/lu';
import { MdLockOutline, MdOutlineDeleteForever, MdOutlineLogout } from 'react-icons/md';
import { RiShieldCheckLine } from 'react-icons/ri';
import ProfileCard from '../../components/participant/myprofile/ProfileCard';

const MyProfile = () => {
    const [notificationToggle, setNotificationToggle] = useState(true);


    return (
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-6">

            {/* Profile hero section / top card */}
            <ProfileCard
                profileImage='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
            />

            {/* Middle grid layout: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Column 1: Personal Details */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5 relative">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-slate-900 tracking-tight">Personal Details</h3>
                        <button className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                            <i className="fa-solid fa-pen-field text-sm"></i>
                        </button>
                    </div>
                    <div className="space-y-4 text-xs font-medium">
                        <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Full Name</span>
                            <span className="text-slate-800 text-sm font-bold">Alex Thompson</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Email Address</span>
                            <span className="text-slate-800 text-sm font-bold">alex.thompson@example.com</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Phone</span>
                            <span className="text-slate-800 text-sm font-bold">+61 412 345 678</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Location</span>
                            <span className="text-slate-800 text-sm font-bold">Sydney, NSW</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Support Preferences */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Support Preferences</h3>
                    <div className="flex flex-col gap-2.5 items-start">
                        {["Mental Health Support", "Emotional Well-being", "Creative Expression"].map((pref, idx) => (
                            <span key={idx} className="bg-sky-50 text-sky-700 text-xs font-bold px-4 py-2.5 rounded-xl block">
                                {pref}
                            </span>
                        ))}
                        <button className="w-10 h-10 border-2 border-dashed border-slate-300 hover:border-slate-400 text-slate-400 rounded-full flex items-center justify-center mt-1 transition-colors cursor-pointer">
                            <i className="fa-solid fa-plus text-sm"></i>
                        </button>
                    </div>
                </div>

                {/* Column 3: Communication Style */}
                {/* <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Communication Style</h3>
                    <div className="space-y-3">
                        {[
                            { label: "Text Messaging", icon: "fa-message" },
                            { label: "Voice Calls", icon: "fa-phone" },
                            { label: "In-person Sessions", icon: "fa-user-group" }
                        ].map((style, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-100/50 rounded-2xl p-3.5 flex items-center space-x-4">
                                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200/50 text-slate-500 shadow-2xs">
                                    <i className={`fa-regular ${style.icon} text-base`}></i>
                                </div>
                                <span className="text-sm font-bold text-slate-800 tracking-tight">{style.label}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Column 4: Comfort & Boundaries */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-4">
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Comfort & Boundaries</h3>
                    <ul className="space-y-3 text-xs font-semibold text-slate-600">
                        {[
                            "Needs quiet environment",
                            "Prefers 60min sessions",
                            "Structured communication"
                        ].map((boundary, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                                <i className="fa-regular fa-circle-check text-emerald-500 text-base"></i>
                                <span>{boundary}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 5: Availability */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Availability</h3>
                    <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-4 space-y-1">
                        <span className="text-[10px] text-sky-600 font-extrabold block uppercase tracking-wider">Preferred Window</span>
                        <span className="text-slate-800 text-sm font-black tracking-tight block">Weekdays (Morning)</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                        {["Mon", "Wed", "Fri"].map((day, idx) => (
                            <span key={idx} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${day === 'Wed' ? 'bg-[#1E5A54] text-white' : 'bg-slate-100 text-slate-500'}`}>
                                {day}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Column 6: Complete Onboarding */}
                <div className="bg-purple-50/30 border border-purple-100/60 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center border border-purple-200/50 shadow-2xs">
                            <BsStars size={20} />
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black text-slate-900 tracking-tight leading-none">Complete Onboarding</h4>
                            <p className="text-slate-500 text-xs font-light leading-relaxed">
                                You're almost there! Complete the remaining 30% to get matched with better workers.
                            </p>
                        </div>
                    </div>
                    <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs py-3.5 rounded-xl shadow-xs transition-colors w-full cursor-pointer">
                        Continue Onboarding
                    </button>
                </div>

            </div>

            {/* Bottom section: 2 columns (Account Settings & Safety) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">

                {/* Account Settings */}
                <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-4">
                    <h3 className="text-base font-black text-slate-900 tracking-tight mb-2">Account Settings</h3>
                    <div className="divide-y divide-slate-100 text-slate-700">

                        {/* Change Password */}
                        <button className="w-full py-4 flex items-center justify-between text-left hover:bg-slate-50/40 px-2 rounded-xl transition-colors cursor-pointer group">
                            <div className="flex items-center space-x-4">
                                <MdLockOutline size={20} />
                                <div>
                                    <h4 className="text-xs font-bold text-slate-800">Change Password</h4>
                                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Update your account security</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
                        </button>

                        {/* Privacy & Visibility */}
                        <button className="w-full py-4 flex items-center justify-between text-left hover:bg-slate-50/40 px-2 rounded-xl transition-colors cursor-pointer group">
                            <div className="flex items-center space-x-4">
                                <RiShieldCheckLine size={20} />
                                <div>
                                    <h4 className="text-xs font-bold text-slate-800">Privacy & Visibility</h4>
                                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Manage who can see your profile</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
                        </button>

                        {/* Notification Preferences */}
                        <div className="w-full py-4 flex items-center justify-between text-left px-2">
                            <div className="flex items-center space-x-4">
                                <LuBellRing size={20} />
                                <div>
                                    <h4 className="text-xs font-bold text-slate-800">Notification Preferences</h4>
                                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Configure email and push alerts</p>
                                </div>
                            </div>
                            {/* Custom toggle button */}
                            <button
                                onClick={() => setNotificationToggle(!notificationToggle)}
                                className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${notificationToggle ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                            >
                                <div className={`bg-white w-5 h-5 rounded-full shadow-xs transform duration-200 ${notificationToggle ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Safety & Logout */}
                <div className="lg:col-span-5 bg-slate-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow">
                    <div className="space-y-2">
                        <h3 className="text-base font-black text-slate-900 tracking-tight">Safety & Logout</h3>
                        <p className="text-slate-400 text-xs font-light leading-relaxed">
                            Manage your session or permanently remove your data from our sanctuary.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 text-sm font-bold py-3.5 rounded-xl shadow-2xs flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                            <MdOutlineLogout size={24} />
                            <span>Log out from all devices</span>
                        </button>
                        <button className="w-full text-center text-sm font-bold text-orange-800 hover:text-orange-900 transition-colors py-2 cursor-pointer flex items-center justify-center space-x-2">
                            <MdOutlineDeleteForever size={24} />
                            <span>Delete account</span>
                        </button>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default MyProfile