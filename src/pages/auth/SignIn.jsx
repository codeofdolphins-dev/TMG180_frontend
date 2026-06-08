import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { LuShieldCheck } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router';

export default function SignIn() {
  const [role, setRole] = useState('Participant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`🎉 Sign-In Request Submitted!\nRole: ${role}\nEmail: ${email}`);
  };

  return (
    <div className="bg-slate-50 flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

      {/* GLOBAL TOP NAVIGATION */}
      <header className="bg-white/60 backdrop-blur-md h-15 px-6 sm:px-12 flex items-center justify-between shrink-0 absolute top-0 left-0 w-full z-30">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">TMG180</span>
        </div>

        <div className="flex items-center space-x-6 font-semibold text-slate-500">
          <a href="#support" className="hover:text-slate-900 transition-colors hidden sm:inline-block">Support</a>
          <a href="#safety" className="hover:text-slate-900 transition-colors hidden sm:inline-block">Safety</a>
          <a href="#privacy" className="hover:text-slate-900 transition-colors hidden sm:inline-block">Privacy</a>
          <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-4 py-2 rounded-full shadow-2xs transition-colors cursor-pointer">
            Help Center
          </button>
        </div>
      </header>

      {/* MAIN SPLIT LAYOUT AREA */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT BANNER PANEL */}
        <div className="relative bg-linear-to-br from-teal-50/60 via-emerald-50/30 to-white flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 py-16 overflow-hidden">

          {/* BACKGROUND DECORATION AMBIENT GLOW */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-teal-100/50 via-emerald-50/20 to-transparent pointer-events-none" />
          <div className="absolute top-1/4 right-[-10%] w-96 h-96 bg-teal-100/30 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-emerald-100/20 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-xs space-y-8 relative z-10">
            {/* SUB-TAG CAPSULE */}
            <div>
              <span className="bg-[#B9EBE6] text-[#134741] text-[10px] font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-2xs">
                The Human Sanctuary
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Welcome <br />back
              </h1>
              <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
                Sign in to continue to your workspace. Your sanctuary for collaborative support and care management.
              </p>
            </div>

            {/* features list */}
            <div className="space-y-5 pt-2">
              {/* feature 1 */}
              <div className="flex items-center space-x-4 group">
                <div className="w-11 h-11 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-2xs group-hover:scale-105 transition-transform">
                  <LuShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm tracking-tight leading-none">Secure access</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-1.5">End-to-end encrypted sessions</p>
                </div>
              </div>

              {/* feature 2 */}
              <div className="flex items-center space-x-4 group">
                <div className="w-11 h-11 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary shadow-2xs group-hover:scale-105 transition-transform">
                  <HiOutlineViewGridAdd size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm tracking-tight leading-none">Role-based dashboard</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-1.5">Tailored tools for your specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIGN-IN WINDOW */}
        <div className="bg-white flex items-center justify-center sm:p-12 lg:p-16 relative">

          {/* form container */}
          <div className="w-full space-y-6 shadow-xl py-5 px-20 rounded-xl">

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Sign in</h2>
              <p className="text-slate-400 text-xs font-light">Enter your details to access your account</p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4">

              {/* role selection tab */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Continue as</label>
                <div className="bg-slate-100/80 p-1 rounded-full flex space-x-1 text-xs font-bold shadow-3xs">
                  {['Participant', 'Worker', 'Admin'].map((r) => {
                    const isSelected = role === r;
                    return (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 py-2 rounded-full transition-all text-center focus:outline-none cursor-pointer ${isSelected
                          ? 'bg-white text-primary shadow-3xs font-black'
                          : 'text-slate-400 hover:text-slate-600'
                          }`}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* email address input */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <MdOutlineMailOutline className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg' />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              {/* password input */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
                  <Link to="/auth/forgot-password" className="text-[11px] font-bold text-teal-600 hover:text-teal-700 hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <CiLock className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg' />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-12 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 tracking-wide focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all focus:text-slate-800"
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

              {/* remember me checkbox */}
              <div className="flex items-center pt-1">
                <label className="flex items-center space-x-2.5 text-xs font-semibold text-slate-500 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded-md border-slate-300 text-primary focus:ring-primary/20 accent-primary cursor-pointer"
                  />
                  <span>Remember me for 30 days</span>
                </label>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-full shadow-md shadow-primary/10 transition-all transform active:scale-[0.99] mt-2 cursor-pointer">
                Sign In
              </button>
            </form>

            {/* OR Separator */}
            <div className="flex items-center my-4 select-none">
              <div className="flex-1 h-px bg-slate-100"></div>
              <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest px-4">OR</span>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>

            {/* Google Social Login Button */}
            <button className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-3.5 rounded-full shadow-2xs flex items-center justify-center space-x-2.5 transition-colors cursor-pointer">
              <FcGoogle size={28} />
              <span className="text-xs sm:text-sm">Continue with Google</span>
            </button>

            {/* create account link */}
            <div className="text-center pt-2 text-xs font-medium text-slate-400">
              <span>New to TMG180? </span>
              <a href="#register" className="text-teal-600 font-bold hover:text-teal-700 hover:underline">Create an account</a>
            </div>
          </div>

        </div>
      </main>

      {/* GLOBAL SYSTEM FOOTER */}
      <footer className="bg-white border-t border-slate-100 h-16 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 text-[11px] font-bold text-slate-400 tracking-wide select-none">
        <div>&copy; 2026 TMG180. The Human Sanctuary. All rights reserved.</div>
        <div className="flex space-x-6">
          <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          <a href="#privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#accessibility" className="hover:text-slate-600 transition-colors">Accessibility</a>
          <a href="#contact" className="hover:text-slate-600 transition-colors">Contact Support</a>
        </div>
      </footer>

    </div>
  );
}