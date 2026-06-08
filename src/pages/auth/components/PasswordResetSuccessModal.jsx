import React from 'react'
import { Link } from 'react-router'
import { BsCheckLg } from 'react-icons/bs'

const PasswordResetSuccessModal = () => {
    return (
        <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center space-y-6 max-w-sm mx-auto w-full">

            {/* Double-ring checkmark icon */}
            <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#1E5A54] flex items-center justify-center shadow-md">
                    <BsCheckLg size={26} className="text-white" strokeWidth={0.5} />
                </div>
            </div>

            {/* Title & subtitle */}
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    Password reset successful
                </h2>
                <p className="text-slate-500 text-sm font-normal leading-relaxed">
                    Your account is ready to use again.
                </p>
            </div>

            {/* Back to sign in CTA */}
            <Link
                to="/auth/sign-in"
                className="w-full bg-[#1E5A54] hover:bg-[#16433F] active:scale-[0.99] text-white font-semibold py-3.5 rounded-full transition-all text-sm shadow-md shadow-[#1E5A54]/20 flex items-center justify-center"
            >
                Back to sign in
            </Link>

            {/* Help link */}
            <Link
                to="/auth/sign-in"
                className="text-[#1E5A54] hover:text-[#16433F] font-semibold text-sm transition-colors"
            >
                Need more help?
            </Link>

            {/* Divider */}
            <div className="w-full h-px bg-slate-100" />

            {/* Footer note */}
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Use your new password the next time you sign in.
            </p>

        </div>
    )
}

export default PasswordResetSuccessModal;