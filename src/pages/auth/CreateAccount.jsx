import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { RiShieldCheckLine } from 'react-icons/ri';
import { TbUserShield } from 'react-icons/tb';
import { useNavigate } from 'react-router';

export default function CreateAccount() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    // Password validation rules
    const hasChar = password.length > 0;
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(password);

    // Password Strength
    const getPasswordStrength = () => {
        let score = 0;

        if (hasChar) score++;
        if (hasMinLength) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;

        switch (score) {
            case 0: return { label: '', color: 'bg-slate-100', bars: 0 };
            case 1: return { label: 'WEAK', color: 'bg-rose-500', bars: 1 };
            case 2: return { label: 'WEAK', color: 'bg-rose-500', bars: 2 };
            case 3: return { label: 'MEDIUM', color: 'bg-amber-500', bars: 3 };
            case 4: return { label: 'STRONG', color: 'bg-emerald-500', bars: 4 };
            default: return { label: '', color: 'bg-slate-100', bars: 0 };
        }
    };

    const strength = getPasswordStrength();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (!agreeTerms) {
            alert("❌ Please agree to the Terms and Privacy Policy before proceeding.");
            return;
        }
        if (!hasMinLength || !hasNumber) {
            alert("❌ Password does not meet the minimum security requirements.");
            return;
        }
        navigate('/auth/account-details');
    };

    return (
        <div className="bg-slate-50 flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

            {/* MAIN SPLIT LAYOUT */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">

                {/* Left Panel */}
                <div className="relative bg-linear-to-tr from-slate-100 via-zinc-100 to-teal-50/40 flex flex-col justify-start items-center px-8 sm:px-16 lg:px-20 py-16 overflow-hidden border-r border-slate-100">

                    {/* Background Wave Decoration Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none bg-[radial-gradient(circle_at_70%_120%,rgba(204,251,241,0.6),transparent_50%)]" />

                    <div className="max-w-md space-y-20 relative px-10 z-10 text-primary">
                        {/* Brand Logo */}
                        <div className="flex items-center space-x-2  font-black">
                            <span className="tracking-tight text-lg font-extrabold font-sans">TMG180</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                                Create a new <br />account
                            </h1>
                            <p className="text-slate-500 font-medium text-base leading-relaxed">
                                Get started with a secure workspace designed for support, care, and collaboration.
                            </p>
                        </div>

                        {/* 3-Feature Guide List */}
                        <div className="space-y-5 pt-2 text-xs font-semibold text-slate-600">
                            {/* Feature 1 */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white border border-slate-200/60 rounded-full flex items-center justify-center text-teal-600 shadow-3xs group-hover:scale-105 transition-transform">
                                    <RiShieldCheckLine size={24} className='text-primary' />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Secure account setup</h4>
                                    <p className="text-sm text-slate-700 font-medium mt-1.5">Multi-layer encryption for all personal data.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white border border-slate-200/60 rounded-full flex items-center justify-center text-teal-600 shadow-3xs group-hover:scale-105 transition-transform">
                                    <TbUserShield size={24} className='text-primary' />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Role-based access</h4>
                                    <p className="text-sm text-slate-700 font-medium mt-1.5">Granular permissions tailored to your work.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white border border-slate-200/60 rounded-full flex items-center justify-center text-teal-600 shadow-3xs group-hover:scale-105 transition-transform">
                                    <MdOutlineRocketLaunch size={24} className='text-primary' />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Guided onboarding</h4>
                                    <p className="text-sm text-slate-700 font-medium mt-1.5">Simple step-by-step setup to get you going.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Registration Form */}
                <div className="bg-gray-200/40 flex flex-col items-center justify-center p-0 sm:p-12 lg:p-16">

                    {/* Registration Form Card */}
                    <div className="w-full md:w-3/4 lg:w-full px-10 sm:px-10 space-y-5">
                        <div className="space-y-1 text-center sm:text-left">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Create account</h2>
                            <p className="text-slate-600 text-sm font-medium">Enter your details to get started</p>
                        </div>

                        <form onSubmit={handleCreateAccount} className="space-y-4">

                            {/* Full Name Input */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Full name</label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full bg-white rounded-full px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>

                            {/* Email Address Input */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Email address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full bg-white rounded-full px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-1.5">
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-white rounded-full pl-4 pr-12 py-3.5 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer p-1"
                                    >
                                        <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
                                    </button>
                                </div>
                            </div>

                            {/* Password Strength Indicator */}
                            {password && (
                                <div className="space-y-1.5 pt-0.5">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                        <span className="text-slate-400">Password Strength:</span>
                                        <span className={strength.label === 'STRONG' ? 'text-emerald-600' : strength.label === 'MEDIUM' ? 'text-amber-500' : 'text-rose-500'}>
                                            {strength.label}
                                        </span>
                                    </div>
                                    <div className="flex space-x-1">
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength.bars ? strength.color : 'bg-slate-100'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Rules Checklist Tracker */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-2 pt-0.5 text-xs font-semibold text-slate-500">
                                <div className="flex items-center space-x-2">
                                    <i className={`fa-solid ${hasMinLength ? 'fa-circle-check text-emerald-500' : 'fa-circle text-slate-200 text-[10px] pl-0.5'}`}></i>
                                    <span className={hasMinLength ? 'text-slate-700' : 'text-slate-400'}>8+ characters</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className={`fa-solid ${hasNumber ? 'fa-circle-check text-emerald-500' : 'fa-circle text-slate-200 text-[10px] pl-0.5'}`}></i>
                                    <span className={hasNumber ? 'text-slate-700' : 'text-slate-400'}>Include a number</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className={`fa-solid ${hasSpecialChar ? 'fa-circle-check text-emerald-500' : 'fa-circle text-slate-200 text-[10px] pl-0.5'}`}></i>
                                    <span className={hasSpecialChar ? 'text-slate-700' : 'text-slate-400'}>Special Character</span>
                                </div>
                            </div>

                            {/* Terms & Privacy Policy Checkbox */}
                            <div className="flex items-center pt-2">
                                <label className="flex items-start space-x-2.5 text-xs font-semibold text-slate-500 cursor-pointer select-none leading-tight">
                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) => setAgreeTerms(e.target.checked)}
                                        className="w-4 h-4 rounded-md border-slate-300 text-[#1E5A54] focus:ring-[#1E5A54]/20 accent-[#1E5A54] cursor-pointer mt-0.5"
                                    />
                                    <span>I agree to the <a href="#terms" className="text-teal-600 hover:text-teal-700 hover:underline">Terms</a> and <a href="#privacy" className="text-teal-600 hover:text-teal-700 hover:underline">Privacy Policy</a></span>
                                </label>
                            </div>

                            {/* Create Account Button */}
                            <button type="submit" className="w-full bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold py-4 rounded-xl shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] mt-2 cursor-pointer">
                                Create account
                            </button>
                        </form>

                        {/* OR Divider Line */}
                        <div className="flex items-center my-4 select-none">
                            <div className="flex-1 h-px bg-slate-100"></div>
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest px-4">OR CONTINUE WITH</span>
                            <div className="flex-1 h-px bg-slate-100"></div>
                        </div>

                        {/* Google Social Sign-up Button */}
                        <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-3.5 rounded-xl shadow-2xs flex items-center justify-center space-x-2.5 transition-colors cursor-pointer">
                            <FcGoogle size={24} />
                            <span className="text-xs sm:text-sm">Continue with Google</span>
                        </button>

                        {/* Already have an account? Sign in link */}
                        <div className="text-center pt-2 text-sm font-light text-slate-400">
                            <span>Already have an account? </span>
                            <a href="#signin" className="text-primary font-semibold hover:text-secondary hover:underline">Sign in</a>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
}