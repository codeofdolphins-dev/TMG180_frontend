import React, { useState } from 'react';
import { BsClipboardCheck, BsThreeDots } from 'react-icons/bs';
import { FaRegCheckCircle, FaRegIdCard } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoCloudUploadOutline, IoDocumentTextOutline, IoWarningOutline } from 'react-icons/io5';
import { LiaIdCardAltSolid } from 'react-icons/lia';
import { LuEye } from 'react-icons/lu';
import { MdGavel, MdOutlineRocketLaunch } from 'react-icons/md';
import { PiShieldCheckeredFill } from 'react-icons/pi';
import { RiInboxArchiveLine, RiQuillPenLine } from 'react-icons/ri';
import { TbRosetteDiscountCheck } from 'react-icons/tb';

// মোকা ডেটা (Mock Data) - টপ স্ট্যাটাস গ্রিড কার্ডস
const complianceStatusCards = [
  {
    title: "Insurance",
    desc: "Public Liability & PI",
    status: "CURRENT",
    statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dateLabel: "EXPIRES",
    date: "12 Oct 2024",
    icon: PiShieldCheckeredFill,
    iconStyle: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Worker Checks",
    desc: "WWCC & Police Check",
    status: "REQUIRES UPDATE",
    statusStyle: "bg-amber-50 text-amber-600 border-amber-100",
    dateLabel: "EXPIRES",
    date: "02 May 2024",
    icon: FaRegIdCard,
    iconStyle: "bg-amber-50 text-amber-600"
  },
  {
    title: "Code of Conduct",
    desc: "Signed Annual Agreement",
    status: "UNDER REVIEW",
    statusStyle: "bg-sky-50 text-sky-600 border-sky-100",
    dateLabel: "UPLOADED",
    date: "22 Apr 2024",
    icon: MdGavel,
    iconStyle: "bg-sky-50 text-sky-600"
  },
  {
    title: "Conflict Declaration",
    desc: "Interest Disclosure Form",
    status: "CURRENT",
    statusStyle: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dateLabel: "VALID UNTIL",
    date: "31 Dec 2024",
    icon: RiQuillPenLine,
    iconStyle: "bg-teal-50 text-teal-600"
  }
];

// মোকা ডেটা (Mock Data) - কমপ্লায়েন্স এভিডেন্স ডকুমেন্ট রো
const evidenceDocuments = [
  {
    title: "Professional Indemnity",
    meta: "POLICY #PI-88291",
    uploaded: "12 Oct 2023",
    status: "Verified",
    statusStyle: "text-emerald-600",
    statusIcon: FaRegCheckCircle,
    expiry: "12 Oct 2024",
    icon: IoDocumentTextOutline,
    iconBg: "bg-teal-50 text-teal-600"
  },
  {
    title: "WWCC Check",
    meta: "REG: 2291039A",
    uploaded: "04 May 2019",
    status: "Expires Soon",
    statusStyle: "text-amber-600",
    statusIcon: IoWarningOutline,
    expiry: "02 May 2024",
    icon: LiaIdCardAltSolid,
    iconBg: "bg-amber-50 text-amber-600"
  },
  {
    title: "First Aid Certification",
    meta: "HLTAID011",
    uploaded: "15 Jan 2024",
    status: "Reviewing",
    statusStyle: "text-sky-600",
    statusIcon: BsThreeDots,
    expiry: "15 Jan 2027",
    icon: BsClipboardCheck,
    iconBg: "bg-sky-50 text-sky-600"
  }
];


const reminderCard = [
  {
    shortText: "DUE IN 7 DAYS",
    title: "Worker Check Renewal",
    text: "Submit your updated National Police Certificate.",
    textColor: "text-amber-600",
    bgColor: "bg-amber-500",
    isBadge: true,
    badgeText: "High Priority",
    badgeBgColor: "bg-orange-100",
  },
  {
    shortText: "Due in 30 Days",
    title: "Insurance Renewal",
    text: "Upload the Certificate of Currency for next year.",
    textColor: "text-slate-400",
    bgColor: "bg-slate-400",
    isBadge: false,
    badgeText: "",
    badgeBgColor: "",
  },
  {
    shortText: "Action Required",
    title: "Conflict of Interest",
    text: "Annual disclosure form is ready for signature.",
    textColor: "text-blue-600",
    bgColor: "bg-sky-400",
    isBadge: true,
    badgeText: "New Policy",
    badgeBgColor: "bg-blue-100",
  },
]

export default function Compliance() {

  return (
    < div className="flex-1 flex overflow-hidden" >

      {/* SCROLLABLE MIDDLE PANEL */}
      < div className="flex-1 overflow-y-auto p-6 space-y-10" >

        {/* title & header */}
        < div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" >
          <div className="space-y-0.5">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Practice Standing</h1>
            <p className="text-slate-500 font-medium text-sm ">Manage compliance evidence, reminders, and verification status to maintain your active practice credentials.</p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-sm px-4 py-2.5 rounded-full shadow-3xs transition-colors cursor-pointer">
              View Requirements
            </button>
            <button className="bg-primary hover:bg-secondary text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-md shadow-[#1E5A54]/10 flex items-center space-x-1.5 transition-all transform active:scale-98 cursor-pointer">
              <IoCloudUploadOutline size={24} />
              <span>Upload Document</span>
            </button>
          </div>
        </div >

        {/* 4 COLUMN GRID */}
        < div className="grid grid-cols-2 lg:grid-cols-4 gap-4" >
          {
            complianceStatusCards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-3xs flex flex-col justify-between min-h-[135px]">
                  <div className="flex items-start justify-between w-full">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${card.iconStyle}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-[8px] font-extrabold tracking-wide px-2 py-0.5 rounded-md uppercase border ${card.statusStyle}`}>
                      {card.status}
                    </span>
                  </div>

                  <div className="space-y-2 pt-3">
                    <div>
                      <h4 className="font-black text-slate-800 text-xs sm:text-sm tracking-tight leading-none">{card.title}</h4>
                      <span className="text-[10px] text-slate-400 font-light block mt-1">{card.desc}</span>
                    </div>
                    <div className="h-px bg-slate-50 w-full" />
                    <div className="flex justify-between text-[9px] font-bold text-slate-400">
                      <span>{card.dateLabel}</span>
                      <span className={card.status === 'REQUIRES UPDATE' ? 'text-amber-600' : 'text-slate-700'}>{card.date}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div >

        <div className="flex justify-between items-start gap-10">

          {/* left side */}
          <div className="w-full space-y-6">
            {/* compliance evidence document list  */}
            < div className="space-y-3" >
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-black text-slate-900 tracking-tight">Compliance Evidence</h3>
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-full">8 Documents</span>
                </div>

                {/* filter action icon button */}
                <div className="flex items-center space-x-3 text-slate-400 text-xs">
                  <button className="hover:text-slate-600"><i className="fa-solid fa-bars-filter"></i></button>
                  <button className="hover:text-slate-600"><i className="fa-solid fa-arrow-down-wide-short"></i></button>
                </div>
              </div>

              {/* DOCUMENT ROW BUNCH */}
              <div className="space-y-2.5">
                {evidenceDocuments.map((doc, idx) => {
                  const Icon = doc.icon;
                  const StatusIcon = doc.statusIcon;

                  return (
                    <div key={idx} className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-3xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xs transition-all duration-200">

                      {/* LEFT SIDE META INFO BLOCK */}
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0 shadow-3xs ${doc.iconBg}`}>
                          <Icon size={24} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-slate-800 text-xs sm:text-sm tracking-tight leading-none truncate">{doc.title}</h4>
                          <span className="text-[9px] text-slate-400 font-bold tracking-wider block mt-1.5">{doc.meta}</span>
                        </div>
                      </div>

                      {/* MIDDLE INFO GRID */}
                      <div className="grid grid-cols-3 gap-6 text-left text-[11px] font-semibold flex-1 max-w-md">
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">UPLOADED</span>
                          <span className="text-slate-700 block">{doc.uploaded}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">STATUS</span>
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${doc.statusStyle}`}>
                            <StatusIcon size={20} />
                            <span className='whitespace-nowrap'>{doc.status}</span>
                          </span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">EXPIRY</span>
                          <span className={`block font-bold ${doc.status === 'Expires Soon' ? 'text-amber-600' : 'text-slate-500'}`}>{doc.expiry}</span>
                        </div>
                      </div>

                      {/* RIGHT SIDE ACTION BUTTON CONTROLS */}
                      <div className="flex items-center justify-end space-x-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-50">
                        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"><LuEye size={20} /></button>
                        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"><FaArrowRightArrowLeft size={20} /></button>
                        <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"><RiInboxArchiveLine size={20} /></button>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div >

            {/* policy acknowledgement banner widget  */}
            < div className="bg-primary rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-xs" >
              <div className="absolute -right-6 -bottom-6 text-white/5 text-8xl font-bold pointer-events-none"></div>

              <div className="flex items-start space-x-4 max-w-xl relative z-10">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-emerald-300 shrink-0 border border-white/10 shadow-3xs">
                  <TbRosetteDiscountCheck size={24} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black tracking-tight leading-none">Policy Acknowledgement</h3>
                  <p className="text-slate-200/90 text-xs font-light leading-relaxed">
                    You have successfully acknowledged all required clinical and operational policies for this period.
                  </p>

                  {/* internal status grid */}
                  <div className="flex items-center space-x-8 pt-2 text-[10px] font-bold">
                    <div>
                      <span className="text-slate-300/70 uppercase block tracking-wider text-[8px] mb-0.5">CURRENT STATUS</span>
                      <span className="text-white block">All Policies Acknowledged</span>
                    </div>
                    <div>
                      <span className="text-slate-300/70 uppercase block tracking-wider text-[8px] mb-0.5">NEXT RECERTIFICATION</span>
                      <span className="text-amber-300 block">14 Jan 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shrink-0 relative z-10 self-end md:self-auto">
                <button className="bg-white hover:bg-slate-50 text-[#10443E] font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer">
                  Review Policies
                </button>
              </div>
            </div >
          </div >

          {/* RIGHT SIDEBAR  */}
          < div className="w-70 flex flex-col overflow-y-auto space-y-6 shrink-0" >

            {/* activation readiness */}
            < div className="bg-white border border-slate-100 rounded-4xl p-4 space-y-4 shadow" >
              <div className="flex items-center text-slate-800">
                <h4 className="text-base font-black tracking-tight">Activation Readiness</h4>
                <MdOutlineRocketLaunch size={20} className='text-primary ml-2' />
              </div>

              {/* progress bar counter */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-black text-slate-500 uppercase tracking-wider">
                  <span>Overall Progress</span>
                  <span className="text-[#1E5A54] text-base font-black">80%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1E5A54] h-full w-[80%] rounded-full" />
                </div>
                <p className="text-[10px] text-slate-500 font-light pt-0.5">Complete 1 remaining item to be fully compliant.</p>
              </div>

              {/* checklist tracker links */}
              <div className="space-y-2.5 text-xs font-semibold text-slate-500 pt-1">
                <div className="flex items-center space-x-2.5">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                  <span className="text-slate-800">Active Subscription</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                  <span className="text-slate-800">Policy Signatures</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                  <span className="text-slate-800">Learning Modules (8/10)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                  <span className="text-slate-800">Compliance Documents Verified</span>
                </div>
                <div className="flex items-center space-x-2.5 text-slate-400 font-medium">
                  <div className="w-4 h-4 rounded-full border border-slate-500 bg-white shrink-0 scale-90" />
                  <span>Onboarding Form Submission</span>
                </div>
              </div>
            </div >

            {/* upcoming reminders widget  */}
            < div className="space-y-4 rounded-4xl bg-[#F2F4F6] p-6 shadow">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming Reminders</h4>

              <div className="space-y-3.5 border-slate-100 text-xs">
                {reminderCard.map((item, idx) => {

                  return <div
                    key={idx}
                    className="w-full flex justify-between items-start gap-5"
                  >
                    {/* left side */}
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div
                        className={`w-4 h-4 rounded-full ring-4 ring-white ${item.bgColor}`}
                      />
                      <div className={`w-0.5 h-14 rounded-full ${item.bgColor}`} />
                    </div>

                    {/* right side */}
                    <div className="w-full flex flex-col space-y-1">

                      <div className="flex gap-2 items-center justify-between">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider ${item.textColor}`}>
                          {item.shortText}
                        </span>

                        {
                          item.isBadge &&
                          <span className={`text-[8px] font-black tracking-wider px-1.5 py-0.5 rounded-full uppercase ${item?.badgeBgColor} ${item?.textColor}`}>{item?.badgeText}</span>
                        }
                      </div>

                      <h5 className="font-black text-slate-800 tracking-tight text-sm">{item.title}</h5>
                      <p className="text-[11px] text-slate-500 font-medium leading-snug">{item.text}</p>
                    </div>
                  </div>
                })}

              </div>
            </div >

          </div >
        </div >
      </div >
    </div >
  );
}