import React, { useState } from 'react'
import { BiShieldQuarter } from 'react-icons/bi';
import { BsBookmarkHeart } from 'react-icons/bs';
import { FiUserPlus } from 'react-icons/fi';
import { GoShieldLock } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuRoute } from 'react-icons/lu';
import { MdAutoAwesome, MdOutlineGridView, MdOutlineLockClock } from 'react-icons/md';
import { PiMoneyFill, PiSealCheck } from 'react-icons/pi';
import { Link } from 'react-router';


const knowledgeCategories = [
    { id: 1, title: "Getting Started", desc: "Fundamental guides to navigating your new dashboard.", icon: MdAutoAwesome, color: "bg-indigo-100 text-indigo-600" },
    { id: 2, title: "Participants & Intake", desc: "Onboarding new individuals and managing intake forms.", icon: FiUserPlus, color: "bg-teal-100 text-teal-600" },
    { id: 3, title: "Notes & Documentation", desc: "Best practices for clinical notes and record keeping.", icon: IoDocumentTextOutline, color: "bg-blue-100 text-blue-800" },
    { id: 4, title: "Invoices & Exports", desc: "Financial tracking, billing cycles, and data exports.", icon: PiMoneyFill, color: "bg-amber-100 text-amber-600" },
    { id: 5, title: "Practice Standing", desc: "Monitoring compliance and credentialing status.", icon: PiSealCheck, color: "bg-rose-100 text-rose-600" },
    { id: 6, title: "Security & Privacy", desc: "HIPAA protocols and multi-factor authentication setup.", icon: GoShieldLock, color: "bg-purple-100 text-purple-600" },
];

// FAQ accordion data
const initialFaqs = [
    { id: 1, question: "How do I add a participant if the option is greyed out?", answer: "If the option is greyed out, it typically means your compliance check or practice credentials have expired. Please verify your current status in the 'Compliance' tab or contact your administrator." },
    { id: 2, question: "Why is invoice creation locked for specific sessions?", answer: "Invoice creation locks automatically if the participant's intake process is still pending. Ensure the intake workflow is fully complete before generating financial records." },
    { id: 3, question: "How do I change my MFA notification settings?", answer: "Go to 'Settings' from your sidebar menu, navigate to 'Privacy & Security', and locate the Multi-Factor Authentication toggle or configuration panel." },
    { id: 4, question: "Can I export my documentation as a ZIP file?", answer: "Yes, go to the 'Resources' tab, filter the files or invoices you need, and click on 'Export Summary' to generate a structured download package." }
];


const keyResource = [
    { text: "Policy Library", link: "#" },
    { text: "Learning Hub", link: "#" },
    { text: "Required Policies", link: "#" }
]


const HelpCenter = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [category, setCategory] = useState('Technical Issue');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`🎉 Support request submitted successfully!\nCategory: ${category}\nOur tech desk will investigate your challenge.`);
        setMessage('');
    };


    return (
        <div className="flex-1 flex overflow-hidden">

            {/* SCROLLABLE MIDDLE PANEL */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">

                {/* Knowledge Categories */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-slate-800 font-bold text-3xl">
                        <MdOutlineGridView size={28} className='text-primary' />
                        <h2 className="tracking-tight">Knowledge Categories</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {knowledgeCategories.map((cat) => {
                            const Icon = cat.icon;

                            return <div
                                key={cat.id}
                                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 cursor-pointer group"
                            >
                                <div className="space-y-3 p-5">
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform ${cat.color}`}>
                                        <Icon size={24} className={`${cat.color} bg-opacity-10 rounded-lg`} />
                                    </div>
                                    <h3 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#1E5A54] transition-colors">{cat.title}</h3>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed">{cat.desc}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                {/* Standard Workflows */}
                <div className="bg-slate-100 border border-slate-100 rounded-3xl p-5 lg:p-6 shadow-2xs space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <h3 className="text-lg font-black text-slate-900 tracking-tight">Standard Workflows</h3>
                            <p className="text-slate-800 text-sm font-light">Step-by-step logic for common operations</p>
                        </div>
                        <div className="text-slate-400 p-2">
                            <LuRoute className='text-primary rotate-90' size={24} />
                        </div>
                    </div>

                    {/* WORKFLOW STEPS TRACKER */}
                    <div className="space-y-5">
                        {/* setep 1 */}
                        <div className="rounded-xl p-4 flex items-center justify-between gap-4 border-l-4 border-emerald-500 bg-white">
                            <div className="flex items-center space-x-4 min-w-0 flex-1">
                                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 font-black text-primary flex items-center justify-center shrink-0">1</div>

                                <div className="min-w-0 flex-1 text-sm text-slate-800">
                                    <h4 className="text-base font-bold">Participant Intake Cycle</h4>
                                    <p className="font-light truncate mt-0.5">Create participant <span className="mx-1">→</span> complete intake <span className="mx-1">→</span> unlock notes and invoices.</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-right text-slate-300 text-base"></i>
                        </div>

                        {/* STEP 2 */}
                        <div className="rounded-xl p-4 flex items-center justify-between gap-4 border-l-4 border-slate-300 bg-white opacity-50">
                            <div className="flex items-center space-x-4 min-w-0 flex-1">
                                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 font-black text-slate-400 flex items-center justify-center shrink-0">2</div>

                                <div className="min-w-0 flex-1 text-sm text-slate-800">
                                    <h4 className="font-bold text-base">Quarterly Compliance Check</h4>
                                    <p className="font-light truncate mt-0.5">Update credentials <span className="mx-1">→</span> review learning modules <span className="mx-1">→</span> clear practice flags.</p>
                                </div>
                            </div>
                            <MdOutlineLockClock size={24} />
                        </div>
                    </div>
                </div>

                {/* Frequently Asked Questions */}
                <div className="space-y-4">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight">Frequently Asked Questions</h3>

                    <div className="space-y-2.5">
                        {initialFaqs.map((faq) => {
                            const isOpen = openFaq === faq.id;
                            return (
                                <div key={faq.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-3xs transition-all">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                                        className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-slate-700 text-sm hover:bg-slate-50/50 transition-colors cursor-pointer"
                                    >
                                        <span>{faq.question}</span>
                                        <i className={`fa-solid fa-chevron-down text-slate-400 text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1E5A54]' : ''}`}></i>
                                    </button>

                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-50' : 'max-h-0'}`}>
                                        <div className="p-5 text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed bg-[#FAFAFA]/40">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* RIGHT CONTROL SIDEBAR */}
            <div className="w-80 flex flex-col overflow-y-auto p-6 space-y-5 shrink-0 h-full">

                {/* Still need help? */}
                <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow space-y-4">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight">Still need help?</h3>

                    <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 outline-none focus:border-[#1E5A54]"
                            >
                                <option>Technical Issue</option>
                                <option>Compliance Assistance</option>
                                <option>Billing & Invoices</option>
                                <option>Participant Management</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Message</label>
                            <textarea
                                rows="3"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe your challenge..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E5A54] resize-none leading-relaxed"
                            />
                        </div>

                        <button type="submit" className="w-full bg-[#1E5A54] hover:bg-secondary text-white font-bold text-xs py-3 rounded-xl shadow-xs transition-colors cursor-pointer mt-1">
                            Send Request
                        </button>
                    </form>
                </div>

                {/* Key Resources */}
                <div className="bg-[#F2F1F9] shadow rounded-2xl p-4 space-y-3 shadow-3xs">
                    <div className="flex items-center space-x-2 font-bold uppercase tracking-wider text-base">
                        <BsBookmarkHeart size={18} />
                        <h4 className="tracking-tight">Key Resources</h4>
                    </div>
                    <ul className="space-y-2 text-[13px] font-semibold pl-1">
                        {
                            keyResource?.map(item =>
                                <li key={item.id}>
                                    <Link to={item?.link} className="hover:underline flex items-center justify-between">
                                        <span>{item?.text}</span>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>

                {/* Privacy Reminder */}
                <div className="bg-white rounded-2xl p-4 shadow space-y-4">
                    <div className="flex items-center text-slate-800 text-base uppercase space-x-2">
                        <BiShieldQuarter size={24} className='text-primary' />
                        <h4 className="tracking-tight">Privacy Reminder</h4>
                    </div>
                    <ul className="text-xs leading-tight space-y-3 ml-1.5">
                        <li class="flex items-start space-x-2"><i className="fa-regular fa-circle-check text-primary text-sm mt-0.5 shrink-0"></i> <span>Always verify participant ID before screen sharing.</span></li>
                        <li class="flex items-start space-x-2"><i className="fa-regular fa-circle-check text-primary text-sm mt-0.5 shrink-0"></i> <span>Log out when using shared workstations.</span></li>
                        <li class="flex items-start space-x-2"><i className="fa-regular fa-circle-check text-primary text-sm mt-0.5 shrink-0"></i> <span>Use the secure messaging portal for sensitive data.</span></li>
                    </ul>
                </div>

                {/* BOTTOM INFORMATION NOTE WIDGET */}
                <div className="bg-green-50 text-primary p-4 flex items-start space-x-2.5 shadow rounded-xl">
                    <span className='p-1 font-extrabold text-xl'>i</span>
                    <p className="text-slate-500 font-semibold leading-relaxed text-sm tracking-tight">
                        "If something is currently unavailable, the portal will provide a calm explanation of the next required step."
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HelpCenter