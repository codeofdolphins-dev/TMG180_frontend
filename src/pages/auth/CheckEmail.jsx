import React, { useState } from 'react';
import bgimg from "/images/resetBackground.png";
import { IoInfiniteSharp } from 'react-icons/io5';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router';

export default function CheckEmail() {
  const navigate = useNavigate()
  const location = useLocation();
  const userEmail = location.state?.email;
  const [isResending, setIsResending] = useState(false);

  const handleResendEmail = () => {
    setIsResending(true);
    // একটি ফেক রিফ্রেশ বা লোডিং ইফেক্ট
    setTimeout(() => {
      setIsResending(false);
      navigate("/auth/reset-password")
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-xs sm:text-sm text-slate-700 font-sans antialiased overflow-x-hidden">

      {/* MAIN SPLIT LAYOUT AREA */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">

        {/* left banner panel */}
        <div className="relative flex flex-col justify-start items-start px-8 sm:px-16 lg:px-30 py-16 overflow-hidden gap-20">

          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-16 blur-xs"
            style={{ backgroundImage: `url(${bgimg})` }}
          />


          {/* BRAND LOGO */}
          <div className="top-4 left-4 z-50 flex items-center space-x-2.5 text-slate-900 font-black text-base">
            <div className="bg-[#1E5A54] text-white w-8 h-8 rounded-xl flex items-center justify-center shadow-xs">
              <IoInfiniteSharp size={20} />
            </div>
            <span className="tracking-tight text-lg font-extrabold">TMG 180</span>
          </div>

          <div className="space-y-10 z-9">

            {/* MAIN HEADLINE */}
            <div className="space-y-6">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                Check your email
              </h1>
              <p className="text-gray-600 text-base font-semibold leading-relaxed">
                We've sent a secure password reset link to your inbox.
              </p>
            </div>

          </div>

          {/* PROGRESS BAR */}
          <div className="md:absolute bottom-10 space-y-3 z-10">
            <div className="flex space-x-1.5 w-32">
              <div className="h-1.5 flex-1 bg-[#1E5A54] rounded-full"></div>
              <div className="h-1.5 flex-1 bg-slate-200 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-slate-200 rounded-full"></div>
            </div>
            <span className="text-[11px] font-bold text-slate-400 tracking-wide block">
              Step 2 of 3: Verification
            </span>
          </div>

        </div>

        {/* RIGHT VERIFICATION WINDOW */}
        <div className="bg-[#F8F8FA] flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative">

          {/* VERIFICATION CARD CONTAINER */}
          <div className="w-full max-w-md bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-center">

            {/* INBOX/MAIL ICON GRAPHIC */}
            <div className="w-20 h-20 bg-sky-100 flex items-center justify-center rounded-full mx-auto">
              <div className="w-14 h-14 bg-sky-200 text-teal-800 rounded-full flex items-center justify-center border border-teal-100/50 ">
                <MdMarkEmailRead size={32} />
              </div>
            </div>

            {/* TEXT DETAILS */}
            <div className="space-y-2">
              <h2 className="text-3xl text-slate-900 font-semibold">Check your email</h2>
              <p className="text-slate-500 text-base font-light max-w-xs mx-auto leading-relaxed">
                We sent a password reset link to <br />
                <span className="font-bold text-slate-800 break-all">{userEmail}</span>
              </p>
            </div>

            {/* DESCRIPTION NOTE */}
            <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xs mx-auto px-2">
              Use the link in the email to continue resetting your password. It might take a few minutes to arrive.
            </p>

            {/* RESEND BUTTON ACTION */}
            <div className="space-y-4 pt-2">
              <button
                onClick={handleResendEmail}
                disabled={isResending}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-full shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-80"
              >
                <span>{isResending ? 'Resending...' : 'Resend email'}</span>
              </button>

              {/* BACK TO SIGN IN LINK */}
              <div className="pt-1">
                <Link to="/auth/sign-in" className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-secondary">
                  <FaArrowLeftLong size={18} />
                  <span>Back to sign in</span>
                </Link>
              </div>
            </div>

            {/* OR DIVIDER LINE */}
            <div className="w-16 h-px bg-slate-100 mx-auto my-2"></div>

            {/* USE A DIFFERENT EMAIL BUTTON */}
            <Link
              to="/auth/forgot-password"
              className="text-xs text-slate-500 hover:text-primary transition-colors cursor-pointer py-1"
            >
              Use a different email
            </Link>
          </div>

          {/* BOTTOM HELP SUPPORT FOOTNOTE */}
          <div className="absolute bottom-8 text-xs font-medium text-slate-400 select-none text-center px-4">
            <span>Didn't receive the email? </span>
            <a href="#support" className="text-primary font-bold hover:text-secondary hover:underline transition-colors">Contact Support</a>
          </div>

        </div>
      </main>

    </div>
  );
}