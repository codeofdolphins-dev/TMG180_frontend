import React, { useState } from 'react'
import { BiCalendarCheck, BiSupport } from 'react-icons/bi';
import { MdManageAccounts, MdPersonSearch, MdQuiz, MdRocketLaunch } from 'react-icons/md';
import { Link } from 'react-router';


// mock data - FAQ section
const faqData = [
  {
    id: 1,
    question: "How do I find a support worker?",
    answer: "Navigate to the 'Find Workers' tab in your sidebar. You can use filters to find people based on location, availability, and specific skills that match your NDIS goals."
  },
  {
    id: 2,
    question: "How do I contact a worker?",
    answer: "Once you find a suitable worker's profile, you can click on the 'Contact' or 'Message' button to initiate a conversation directly through our secure platform chat system."
  },
  // {
  //   id: 3,
  //   question: "What happens after sending a request?",
  //   answer: "The worker will receive a notification and can review your support requirements. You will be notified instantly under 'My Requests' as soon as they respond or accept your request."
  // },
  {
    id: 4,
    question: "How do I update my profile?",
    answer: "Go to the 'My Profile' section from the sidebar and click on the 'Edit Profile' button. From there, you can change your personal details, preferences, and availability windows."
  }
];

// category cards data
const categoryCards = [
  {
    id: 1,
    title: "Getting Started",
    desc: "Everything you need to set up your profile and start.",
    icon: MdRocketLaunch,
    color: "bg-teal-50 text-teal-600 border-teal-100"
  },
  {
    id: 2,
    title: "Finding a Worker",
    desc: "Learn how to search and filter for your perfect support match.",
    icon: MdPersonSearch,
    color: "bg-sky-50 text-sky-600 border-sky-100"
  },
  // {
  //   id: 3,
  //   title: "Managing Requests",
  //   desc: "How to handle bookings, shifts, and communication.",
  //   icon: BiCalendarCheck,
  //   color: "bg-purple-50 text-purple-600 border-purple-100"
  // },
  {
    id: 4,
    title: "Account & Settings",
    desc: "Update your data, billing, and privacy preferences.",
    icon: MdManageAccounts,
    color: "bg-slate-50 text-slate-600 border-slate-200/60"
  }
];


const Help = () => {
  const [openFaq, setOpenFaq] = useState(1);

  // form state
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Thank you! Your message has been sent successfully. Our support team will get back to you within 24 hours.');
    setFormData({ ...formData, message: '' });
  };



  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-4">

      <div className="space-y-1">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Help Center</h1>
        <p className="text-slate-400 text-sm font-light">Find answers or get support when you need it</p>
      </div>

      {/* dedicated search bar */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xs border border-slate-100 p-1">
        <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-base"></i>
        <input
          type="text"
          placeholder="Search for help, questions, or topics..."
          className="w-full bg-transparent rounded-xl pl-12 pr-4 py-4 text-sm font-medium focus:outline-none"
        />
      </div>

      {/* ৪. category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryCards.map((card) => {
          const Icon = card.icon;

          return <div key={card.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer group">
            <div className="space-y-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border text-base shadow-2xs group-hover:scale-105 transition-transform ${card.color}`}>
                <Icon size={30} />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#1E5A54] transition-colors">{card.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{card.desc}</p>
            </div>
          </div>
        })}
      </div>

      {/* 5. frequently asked questions */}
      <div className="space-y-5">
        <div className="flex items-center space-x-2 text-slate-900">
          <MdQuiz size={24} fill='#25686A' />
          <h2 className="text-lg font-black tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqData.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-2xs transition-all">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <i className={`fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1E5A54]' : ''}`}></i>
                </button>

                {/* Animated collapse window */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-50' : 'max-h-0'}`}>
                  <div className="p-6 text-xs sm:text-sm text-slate-500 font-light leading-relaxed bg-[#FAFAFA]/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. botom support panel (still need help & email/urgent support) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">

        {/* contact form card */}
        <div className="lg:col-span-7 bg-slate-100/50 border border-slate-200/40 rounded-3xl p-6 lg:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Still need help?</h3>
            <p className="text-slate-400 text-xs font-light">Send us a message and our team will get back to you shortly.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 focus:border-[#1E5A54] focus:ring-2 focus:ring-[#1E5A54]/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-slate-200 focus:border-[#1E5A54] focus:ring-2 focus:ring-[#1E5A54]/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Message</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="How can we support you today?"
                className="w-full bg-white border border-slate-200 focus:border-[#1E5A54] focus:ring-2 focus:ring-[#1E5A54]/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-all outline-none resize-none"
              />
            </div>

            <button type="submit" className="bg-[#1E5A54] hover:bg-[#16433F] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-xs shadow-[#1E5A54]/10 transition-all transform active:scale-[0.99] cursor-pointer">
              Send Message
            </button>
          </form>
        </div>

        {/* right side column: support cards */}
        <div className="lg:col-span-5 space-y-4">

          {/* email support card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-sky-50 text-sky-600 w-10 h-10 rounded-xl flex items-center justify-center border border-sky-100/50 shadow-2xs">
                <i className="fa-regular fa-envelope text-base"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-none">Email Support</h4>
                <a href="mailto:support@tmg180.com.au" className="text-[11px] font-semibold text-slate-400 hover:text-[#1E5A54] block mt-1 transition-colors">support@tmg180.com.au</a>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              "Our dedicated support team is available Mon-Fri, 9am - 5pm to help with any platform inquiries."
            </p>
            <div className="bg-slate-50 rounded-xl p-3 flex items-center space-x-2.5 border border-slate-100/50 text-[11px] font-medium text-slate-500">
              <i className="fa-solid fa-circle-info text-sky-500 text-xs"></i>
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* urgent support card */}
          <div className="bg-teal-50/50 border border-teal-100/70 rounded-3xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-teal-800 font-black text-sm">
              <BiSupport size={24} />
              <h4 className="tracking-tight">Urgent Support</h4>
            </div>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              If this is an emergency or involves immediate safety concerns, please call our 24/7 hotline directly or contact local emergency services.
            </p>
            <Link to="urgent-support" className="text-xs font-bold text-[#1E5A54] hover:text-[#16433F] flex items-center gap-1.5 pt-1 transition-colors">
              <span>View emergency contacts</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Help