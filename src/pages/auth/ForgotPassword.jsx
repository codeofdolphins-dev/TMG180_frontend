import bgimg from "/images/resetBackground.png";
import { LuShieldCheck } from 'react-icons/lu';
import { MdLockOpen, MdOutlineMail } from 'react-icons/md';
import { PiLightningBold } from 'react-icons/pi';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router';
import Input from '../../components/inputs/Input';
import { useForm } from 'react-hook-form';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();



  const handleResetSubmit = (email) => {
    // alert(`📧 A secure password reset link has been sent to:\n${email}\nPlease check your inbox.`);
    // reset();
    navigate("/auth/check-email", { state: email });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-xs sm:text-sm text-slate-700 antialiased overflow-x-hidden">

      {/* MAIN SPLIT LAYOUT AREA */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">

        {/* LEFT BANNER PANEL */}
        <div className="relative flex flex-col justify-start items-start px-8 sm:px-16 lg:px-30 py-16 overflow-hidden gap-20">

          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-xs"
            style={{ backgroundImage: `url(${bgimg})` }}
          />


          {/* BRAND LOGO */}
          <div className="top-4 left-4 z-50 flex items-center space-x-2.5 text-slate-900 font-black text-base">
            <div className="bg-[#1E5A54] text-white w-8 h-8 rounded-xl flex items-center justify-center shadow-xs">
              <i className="fa-solid fa-shield-heart text-sm"></i>
            </div>
            <span className="tracking-tight text-lg font-extrabold">Sanctuary</span>
          </div>

          <div className="space-y-10 z-9">

            {/* MAIN HEADLINE */}
            <div className="space-y-6">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                Reset your <br />password
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Enter your email and we'll send you a secure link to reset your password.
              </p>
            </div>

            {/* Security Features */}
            <div className="space-y-6 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <LuShieldCheck size={24} className='text-primary' />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Secure recovery</h4>
                  <p className="text-gray-500 text-sm leading-normal">End-to-end encrypted protocol for credential restoration.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <PiLightningBold size={24} className='text-primary' />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Fast verification</h4>
                  <p className="text-gray-500 text-sm leading-normal">Instant verification link delivered directly to your inbox.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <MdLockOpen size={24} className='text-primary' />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base tracking-tight leading-none">Protected account access</h4>
                  <p className="text-gray-500 text-sm leading-normal">Multi-layer security check before access is granted.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT RESET WINDOW */}
        <div className="bg-[#F8F8FA] flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative">

          {/* FORGET PASSWORD FORM CARD CONTAINER */}
          <div className="w-full max-w-md bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Forgot password?</h2>
              <p className="text-slate-500 text-sm ">Enter the email linked to your account</p>
            </div>

            <form onSubmit={handleSubmit(handleResetSubmit)} className="space-y-5">
              {/* EMAIL INPUT */}
              <div className="space-y-1.5">
                <div className="">
                  <Input
                    Icon={MdOutlineMail}
                    iconClassName="text-gray-400 focus:text-primary"
                    iconSize={20}

                    type="email"
                    label="Email address"
                    labelClassName="block text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                    placeholder="name@example.com"
                    className="bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    {...register('email', {
                      required: 'Email is required!!!',
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    })}
                    error={errors.email?.message}
                  // required={true}
                  />
                </div>
              </div>

              {/* SEND RESET LINK BUTTON */}
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-md shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer">
                <span>Send Reset link</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </form>

            {/* FOOTNOTE AND BACK TO SIGN-IN */}
            <div className="text-center space-y-4 pt-2">
              <p className="text-[11px] text-slate-400 font-medium leading-none">
                We'll email you a secure password reset link.
              </p>
              <div className="pt-1">
                <Link to="/auth/sign-in" className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-secondary hover:underline transition-all">
                  <FaArrowLeftLong size={14} />
                  <span>Back to sign in</span>
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM SUB-LINKS (Dim text at the bottom of the card) */}
          <div className="mt-8 text-[10px] font-extrabold tracking-widest text-slate-300 uppercase flex items-center space-x-4 select-none">
            <a href="#help" className="hover:text-slate-400 transition-colors">Help Center</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
          </div>

        </div>
      </main>

    </div>
  );
}