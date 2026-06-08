import React, { useState } from 'react';
import bgImage from "/images/createPasswordBackground.png";
import { BiCheckShield } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import { ImSpinner11 } from 'react-icons/im';
import { Link } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Modal from '../../utils/Modal';
import PasswordResetSuccessModal from './components/PasswordResetSuccessModal';
import { errorAlert } from '../../utils/alerts';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [showModal, setShowModal] = useState(false);

    // password validation rules check
    const hasChar = newPassword.length > 0;
    const hasMinLength = newPassword.length >= 8;
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(newPassword);

    // dynamic strength calculation
    const calculateStrength = () => {
        let score = 0;
        if (hasChar) score++;
        if (hasMinLength) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;

        if (score === 1) return { label: 'WEAK', color: 'bg-rose-500', bars: 1 };
        if (score === 2) return { label: 'WEAK', color: 'bg-rose-500', bars: 2 };
        if (score === 3) return { label: 'MEDIUM', color: 'bg-amber-500', bars: 3 };
        if (score === 4) return { label: 'STRONG', color: 'bg-emerald-500', bars: 4 };
        return { label: 'EMPTY', color: 'bg-slate-200', bars: 0 };
    };

    const strength = calculateStrength();

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            errorAlert("❌ Passwords do not match!");
            return;
        }
        if (!hasMinLength || !hasNumber) {
            errorAlert("❌ Please fulfill the core validation requirements.");
            return;
        }

        setShowModal(true);

        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

            {/* MAIN SPLIT LAYOUT AREA */}
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2">

                {/* LEFT BANNER PANEL */}
                <div className="relative flex flex-col justify-start items-start px-8 sm:px-16 lg:px-30 py-16 overflow-hidden gap-20">

                    {/* background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-xs"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />

                    {/* BRAND LOGO */}
                    <div className="top-4 left-4 z-50 flex items-center space-x-2.5 text-slate-900 font-black text-base">
                        <div className="bg-[#1E5A54] text-white w-8 h-8 rounded-xl flex items-center justify-center shadow-xs">
                            <i className="fa-solid fa-shield-heart text-sm"></i>
                        </div>
                        <span className="tracking-tight text-lg font-extrabold">Sanctuary</span>
                    </div>

                    <div className="space-y-5 z-9">

                        {/* MAIN HEADLINE */}
                        <div className="space-y-6">
                            <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                                Create a new <br />password
                            </h1>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Choose a strong password to secure your account and continue to your workspace.
                            </p>
                        </div>

                        {/* feature list  */}
                        <div className="space-y-4 pt-6 text-base font-semibold text-slate-800">
                            <div className="flex items-center space-x-3">
                                <div className="bg-teal-100 w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200/60 shadow-3xs text-teal-800"><BiCheckShield size={18} /></div>
                                <span>Secure account access</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-sky-100 w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200/60 shadow-3xs text-sky-800"><MdLockOutline size={18} /></div>
                                <span>Strong password protection</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-purple-100 w-9 h-9 rounded-xl flex items-center justify-center">
                                    <ImSpinner11 size={14} className='text-purple-800' />
                                </div>
                                <span>Easy recovery process</span>
                            </div>
                        </div>

                    </div>


                    {/* PROGRESS BAR */}
                    <div className="md:absolute bottom-10 space-y-3 z-10">
                        <div className="flex space-x-1.5 w-32">
                            <div className="h-1.5 flex-1 bg-[#1E5A54] rounded-full"></div>
                            <div className="h-1.5 flex-1 bg-[#1E5A54] rounded-full"></div>
                            <div className="h-1.5 flex-1 bg-[#1E5A54] rounded-full"></div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-800 tracking-wide block">
                            Step 3 of 3: Finalize Account
                        </span>
                    </div>

                </div>

                {/* RIGHT MAIN FORM WINDOW */}
                <div className="bg-[#F8F8FA] flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative">

                    {/* NEW PASSWORD CARD CONTAINER */}
                    <div className="w-full max-w-md p-6 sm:p-10 space-y-6">
                        <div className="space-y-1 text-center sm:text-left">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Reset password</h2>
                            <p className="text-slate-600 text-xs font-medium">Enter your new password below</p>
                        </div>

                        <form onSubmit={handleUpdatePassword} className="space-y-4">

                            {/* NEW PASSWORD FIELD */}
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">New password</label>
                                <div className="relative">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        required
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-white rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none ring-2 ring-slate-200 focus:ring-primary transition-all text-slate-800"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer p-1"
                                    >
                                        <i className={`fa-regular ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* CONFIRM PASSWORD FIELD */}
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">Confirm new password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-white rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none ring-2 ring-slate-300 focus:ring-primary transition-all text-slate-800"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer p-1"
                                    >
                                        <i className={`fa-regular ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* PASSWORD STRENGTH INDICATOR */}
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                    <span className="text-slate-600">Strength:</span>
                                    <span className={newPassword ? (strength.label === 'STRONG' ? 'text-emerald-600' : strength.label === 'MEDIUM' ? 'text-amber-500' : 'text-rose-500') : 'text-slate-400'}>
                                        {strength.label}
                                    </span>
                                </div>
                                {/* PASSWORD STRENGTH BARS */}
                                <div className="w-44 flex gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength.bars ? strength.color : 'bg-slate-400/40'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* PASSWORD REQUIREMENTS CHECKLIST */}
                            <div className="bg-gray-100 border border-gray-100 rounded-xl p-3.5 space-y-2 text-xs font-semibold text-slate-500">
                                <div className="flex items-center space-x-2.5">
                                    <i className={`fa-solid text-base ${hasMinLength ? 'fa-circle-check text-emerald-500' : 'fa-circle text-white pl-0.5'}`}></i>
                                    <span className={hasMinLength ? 'text-slate-700' : ''}>At least 8 characters</span>
                                </div>
                                <div className="flex items-center space-x-2.5">
                                    <i className={`fa-solid text-base ${hasNumber ? 'fa-circle-check text-emerald-500' : 'fa-circle text-white pl-0.5'}`}></i>
                                    <span className={hasNumber ? 'text-slate-700' : ''}>Includes a number</span>
                                </div>
                                <div className="flex items-center space-x-2.5">
                                    <i className={`fa-solid text-base ${hasSpecialChar ? 'fa-circle-check text-emerald-500' : 'fa-circle text-white pl-0.5'}`}></i>
                                    <span className={hasSpecialChar ? 'text-slate-700' : ''}>Includes a special character</span>
                                </div>
                            </div>

                            {/* UPDATE BUTTON */}
                            <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] pt-3.5 mt-2 cursor-pointer">
                                Update password
                            </button>
                        </form>

                        {/* BACK TO SIGN IN LINK */}
                        <div className="text-center pt-2">
                            <Link to="/auth/sign-in" className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:text-secondary hover:underline transition-colors">
                                <FaArrowLeftLong size={18} />
                                <span>Back to sign in</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Modal
                isShow={showModal}
                setIsShow={setShowModal}
            >
                <PasswordResetSuccessModal />
            </Modal>

        </div>
    );
}