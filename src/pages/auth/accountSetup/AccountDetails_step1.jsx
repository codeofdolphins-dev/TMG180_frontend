import React, { useRef, useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdHiking } from 'react-icons/md';
import { RiCameraAiLine, RiShieldUserLine } from 'react-icons/ri';
import { TbBuildingBank } from 'react-icons/tb';


const INDICATION_LIST = [
    { id: 1, text: "Personal Profile", icon: MdHiking },
    { id: 2, text: "Business Context", icon: TbBuildingBank },
    { id: 3, text: "Verification", icon: RiShieldUserLine },
    { id: 4, text: "Finish", icon: IoMdCheckmarkCircleOutline },
]

export default function AccountDetails() {
    // ফর্ম স্টেট ম্যানেজমেন্ট
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [activeTab, setActiveTab] = useState(1);
    const avatarInputRef = useRef(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`🎉 Step 1 Complete!\nName: ${displayName}\nPhone: ${phoneNumber}\nLocation: ${location}`);
    };

    return (
        <div className="min-h-screen bg-[#F9F9FB] flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

            {/* MAIN SPLIT LAYOUT AREA */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-12">

                {/* LEFT STEP-TRACKER PANEL */}
                <div className="bg-[#EAEFF4] lg:col-span-5 flex flex-col justify-center items-start px-8 sm:px-16 lg:px-20 py-12">

                    {/* TOP LOGO */}
                    <div className="flex items-center space-x-2.5 text-slate-900 font-black relative z-10">
                        <div className="bg-[#1E5A54] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                            <i className="fa-solid fa-leaf text-xs"></i>
                        </div>
                        <span className="tracking-tight text-lg font-extrabold font-sans">TMG180</span>
                    </div>

                    {/* MIDDDLE CONTENT & 4 STEP INDICATOR */}
                    <div className="space-y-6 max-w-sm relative z-10 my-auto py-10">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest block">Step {activeTab} of 4</span>
                            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none pt-1">
                                Set up your account
                            </h1>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed pt-1">
                                Add a few details to personalize your workspace and continue onboarding.
                            </p>
                        </div>

                        {/* 4 STEP INDICATOR LIST */}
                        <div className="space-y-2.5 pt-2 text-base font-bold text-slate-400">
                            {INDICATION_LIST.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`px-5 py-3.5 flex items-center space-x-3 cursor-pointer ${activeTab === item.id ? 'bg-white rounded-full px-5 py-3.5 text-primary flex items-center space-x-3 shadow' : 'px-5 py-3.5 flex items-center space-x-3'}`}
                                    >
                                        <Icon size={28} className={activeTab === item.id ? 'text-primary' : 'text-slate-400'} />
                                        <span className="tracking-tight">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* MOTTO QUOTE NOTICE */}
                    <div className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
                        "The Human Sanctuary is a space for growth, connection, and purposeful work."
                    </div>
                </div>

                {/* RIGHT REGISTRATION WINDOW */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 relative">

                    {/* PROFILE INFORMATION INPUT CARD CONTAINER */}
                    <div className=" bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Account details</h2>
                            <p className="text-slate-600 text-sm font-light">Tell us a little about yourself</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-5">

                            {/* PROFILE PICTURE UPLOADER WIDGET */}
                            <div className="space-y-2">
                                <label className="block text-[13px] font-bold text-slate-600 uppercase tracking-wider">Profile Picture</label>
                                <div className="flex items-center space-x-4">

                                    {/* Hidden file input */}
                                    <input
                                        ref={avatarInputRef}
                                        type="file"
                                        accept="image/png, image/jpeg, image/webp"
                                        className="hidden"
                                        onChange={handleAvatarChange}
                                    />

                                    {/* Clickable avatar circle */}
                                    <button
                                        type="button"
                                        onClick={() => avatarInputRef.current?.click()}
                                        className="relative w-20 h-20 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center shadow-inner group cursor-pointer"
                                    >
                                        {/* Inner clip for image preview */}
                                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                                            {avatarPreview ? (
                                                <img
                                                    src={avatarPreview}
                                                    alt="Avatar preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <FaRegUser size={20} />
                                            )}
                                        </div>
                                        {/* Camera badge — outside overflow-hidden so it shows */}
                                        <div className="absolute bottom-0 -right-1 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center border border-white shadow-xs hover:bg-secondary transition-colors cursor-pointer">
                                            <RiCameraAiLine size={14} />
                                        </div>
                                    </button>

                                    <div className="space-y-0.5">
                                        <h4 className="text-[13px] font-bold text-slate-700 leading-none">Upload a photo</h4>
                                        <p className="text-[10px] text-slate-400 font-medium">PNG or JPG up to 5MB</p>
                                    </div>
                                </div>
                            </div>

                            {/* DISPLAY NAME & PHONE NUMBER (IN-LINE ROW GRID) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">Preferred display name</label>
                                    <input
                                        type="text"
                                        required
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                        placeholder="How should we call you?"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1E5A54] focus:bg-white focus:ring-2 focus:ring-[#1E5A54]/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">Phone number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1E5A54] focus:bg-white focus:ring-2 focus:ring-[#1E5A54]/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* LOCATION INPUT FIELD */}
                            <div className="space-y-1.5">
                                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">Location</label>
                                <div className="relative">
                                    <BsGeoAlt size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm' />
                                    <input
                                        type="text"
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="e.g. San Francisco, CA"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1E5A54] focus:bg-white focus:ring-2 focus:ring-[#1E5A54]/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* BUSINESS NAME OPTIONAL INPUT FIELD */}
                            <div className="space-y-1.5">
                                <div className="flex items-center space-x-2">
                                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">Business name</label>
                                    <span className="bg-sky-100 text-sky-600 font-extrabold text-[10px] tracking-wider px-1.5 py-0.5 rounded-full uppercase border border-sky-100/50 scale-95 origin-left">Optional</span>
                                </div>
                                <input
                                    type="text"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    placeholder="Organization or workspace name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1E5A54] focus:bg-white focus:ring-2 focus:ring-[#1E5A54]/10 transition-all"
                                />
                                <span className="text-[10px] text-slate-400 block font-medium leading-none pt-0.5">Required for Worker or Administrator roles.</span>
                            </div>

                            {/* button batch */}
                            <div className="flex items-center gap-4 pt-4">
                                <button type="submit" className="bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] cursor-pointer">
                                    Continue
                                </button>
                                <button type="button" className="bg-sky-100 hover:bg-sky-200 text-sky-700 font-bold text-xs px-6 py-3.5 rounded-xl transition-colors cursor-pointer">
                                    Save for later
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* BOTTOMLINKS (Faint text at the bottom of the card) */}
                    <div className="absolute bottom-8 text-[11px] font-bold text-slate-400/80 flex items-center space-x-6 select-none">
                        <a href="#support" className="hover:text-slate-600 transition-colors">Support</a>
                        <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                    </div>

                </div>
            </main>

        </div>
    );
}