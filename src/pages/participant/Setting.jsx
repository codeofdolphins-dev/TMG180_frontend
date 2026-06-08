import React, { useState } from 'react'
import { BiShieldQuarter } from 'react-icons/bi';
import { IoPerson } from 'react-icons/io5';
import { PiBellSimpleRingingBold } from 'react-icons/pi';
import { VscLock } from 'react-icons/vsc';
import { SlidersHorizontal } from 'lucide-react';

const subMenu = [
    { id: 'Account', label: 'Account', icon: IoPerson },
    { id: 'Security', label: 'Security', icon: BiShieldQuarter },
    { id: 'Notifications', label: 'Notifications', icon: PiBellSimpleRingingBold },
    { id: 'Privacy', label: 'Privacy', icon: VscLock },
    { id: 'Preferences', label: 'Preferences', icon: SlidersHorizontal }
]

const Setting = () => {
    const [activeSubTab, setActiveSubTab] = useState('Account');

    // Toggles State Management
    const [toggles, setToggles] = useState({
        twoFactor: true,
        emailNotify: true,
        inAppMsg: true,
        requestUpdate: false,
        publicProfile: false,
        dataSharing: true
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };


    return (
        <div className="w-full pl-10">

            <div className="py-6">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Settings</h1>
                <p className="text-slate-400 text-base font-light mt-0.5">Manage your account and personal preferences for a better health journey.</p>
            </div>

            <div className="flex">

                {/* settings sub-menu panel */}
                <div className="w-64 pr-6 space-y-6 shrink-0">

                    <nav className="space-y-1">
                        {subMenu.map((tab) => {
                            const isSelected = activeSubTab === tab.id;
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveSubTab(tab.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${isSelected
                                        ? 'bg-slate-50 text-[#1E5A54] border border-slate-100/80 shadow-2xs'
                                        : 'text-slate-500 hover:bg-slate-50/60 hover:text-slate-800'
                                        }`}
                                >
                                    <Icon
                                        size={18}
                                        className={`${isSelected ? 'text-[#1E5A54]' : 'text-slate-400'}`}
                                    />
                                    <span className='font-medium text-sm tracking-tight'>{tab.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* main settings SCROLLABLE AREA */}
                <div className="flex-1 px-10 space-y-6">

                    {/* section 1: Account Information */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">

                        <div className="flex items-center space-x-2.5 text-slate-800">
                            <div className="bg-sky-50 text-sky-600 p-2 rounded-full text-xs border border-sky-100/50"><i className="fa-regular fa-user"></i></div>
                            <h3 className="text-xl tracking-tight font-bold">Account Information</h3>
                        </div>

                        <div className="divide-y divide-slate-50 text-xs font-medium space-y-4">
                            <div className="flex items-center justify-between pt-1">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Full Name</span>
                                    <span className="text-slate-800 text-sm font-bold">David Richardson</span>
                                </div>
                                <button className="text-xs font-bold text-[#1E5A54] hover:text-[#16433F] cursor-pointer">Edit</button>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Email Address</span>
                                    <span className="text-slate-800 text-sm font-bold">d.richardson@example.com</span>
                                </div>
                                <button className="text-xs font-bold text-[#1E5A54] hover:text-[#16433F] cursor-pointer">Edit</button>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Phone Number</span>
                                    <span className="text-slate-800 text-sm font-bold">+1 (555) 012-3456</span>
                                </div>
                                <button className="text-xs font-bold text-[#1E5A54] hover:text-[#16433F] cursor-pointer">Edit</button>
                            </div>
                        </div>
                    </div>

                    {/* section 2: Security Settings */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                        <div className="flex items-center space-x-2.5 text-slate-800">
                            <div className="bg-slate-50 text-slate-600 p-2 rounded-xl text-xs border border-slate-200/50"><i className="fa-regular fa-shield-halved"></i></div>
                            <h3 className="text-sm font-black tracking-tight">Security Settings</h3>
                        </div>

                        <div className="space-y-4 text-xs">
                            <div className="flex items-center justify-between">
                                <div className="flex items-start space-x-3">
                                    <i className="fa-regular fa-ellipsis-stroke text-slate-400 text-base mt-0.5"></i>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Password</h4>
                                        <p className="text-[11px] text-slate-400 font-light mt-0.5">Last changed 3 months ago</p>
                                    </div>
                                </div>
                                <button className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold px-4 py-2.5 rounded-xl shadow-2xs transition-colors cursor-pointer">
                                    Change Password
                                </button>
                            </div>

                            <div className="h-px bg-slate-50 my-2"></div>

                            <div class="flex items-center justify-between">
                                <div className="flex items-start space-x-3">
                                    <i className="fa-regular fa-shield-check text-slate-400 text-base mt-0.5"></i>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Two-factor Authentication</h4>
                                        <p className="text-[11px] text-slate-400 font-light mt-0.5">Add an extra layer of security to your account</p>
                                    </div>
                                </div>
                                {/* Custom Toggle Switch */}
                                <button
                                    onClick={() => handleToggle('twoFactor')}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles.twoFactor ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                >
                                    <div className={`bg-white w-5 h-5 rounded-full shadow-xs transform duration-200 ${toggles.twoFactor ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* section 3: Notification Preferences */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                        <div className="flex items-center space-x-2.5 text-slate-800">
                            <div className="bg-slate-50 text-slate-600 p-2 rounded-xl text-xs border border-slate-200/50"><i className="fa-regular fa-bell"></i></div>
                            <h3 className="text-sm font-black tracking-tight">Notification Preferences</h3>
                        </div>

                        <div className="space-y-3">
                            {[
                                { key: 'emailNotify', label: 'Email Notifications', icon: 'fa-envelope' },
                                { key: 'inAppMsg', label: 'In-App Messages', icon: 'fa-comment-dots' },
                                { key: 'requestUpdate', label: 'Request Updates', icon: 'fa-clipboard-list' }
                            ].map((item) => (
                                <div key={item.key} className="bg-slate-50/50 border border-slate-100/70 rounded-2xl p-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <i className={`fa-regular ${item.icon} text-slate-400 text-base`}></i>
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">{item.label}</span>
                                    </div>
                                    {/* Dynamic Toggle Switch */}
                                    <button
                                        onClick={() => handleToggle(item.key)}
                                        className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles[item.key] ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                    >
                                        <div className={`bg-white w-5 h-5 rounded-full shadow-xs transform duration-200 ${toggles[item.key] ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* section 4: Privacy Control */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-5">
                        <div className="flex items-center space-x-2.5 text-slate-800">
                            <div className="bg-slate-50 text-slate-600 p-2 rounded-xl text-xs border border-slate-200/50"><i className="fa-regular fa-lock"></i></div>
                            <h3 className="text-sm font-black tracking-tight">Privacy Control</h3>
                        </div>

                        <div className="space-y-4 text-xs divide-y divide-slate-50">
                            <div className="flex items-center justify-between pt-1">
                                <div className="space-y-0.5 max-w-xl">
                                    <h4 className="font-bold text-slate-800 text-sm">Public Profile Visibility</h4>
                                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">Allow other community members to see your progress and achievements.</p>
                                </div>
                                <button
                                    onClick={() => handleToggle('publicProfile')}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles.publicProfile ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                >
                                    <div className={`bg-white w-5 h-5 rounded-full shadow-xs transform duration-200 ${toggles.publicProfile ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-0.5 max-w-xl">
                                    <h4 className="font-bold text-slate-800 text-sm">Anonymized Data Sharing</h4>
                                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">Help us improve by sharing anonymized health data with our research partners.</p>
                                </div>
                                <button
                                    onClick={() => handleToggle('dataSharing')}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer ${toggles.dataSharing ? 'bg-[#1E5A54]' : 'bg-slate-200'}`}
                                >
                                    <div className={`bg-white w-5 h-5 rounded-full shadow-xs transform duration-200 ${toggles.dataSharing ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* section 5: Danger Zone */}
                    <div className="bg-rose-50/30 border border-rose-100/60 rounded-3xl p-6 shadow-xs space-y-5">
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-rose-600 font-black text-sm">
                                <i class="fa-regular fa-triangle-exclamation"></i>
                                <h3 className="tracking-tight">Danger Zone</h3>
                            </div>
                            <p className="text-slate-400 text-xs font-light leading-relaxed">These actions are permanent and cannot be undone. Please proceed with caution.</p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-1">
                            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold px-6 py-3 rounded-xl shadow-2xs transition-colors cursor-pointer">
                                Sign Out from All Devices
                            </button>
                            <button className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-xs shadow-rose-600/10 transition-colors cursor-pointer">
                                Delete My Account
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Setting