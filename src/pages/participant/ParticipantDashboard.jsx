import { ArrowUpRight, Bookmark, CheckCircle2, ChevronDown, Circle, Clock, GitPullRequest, HelpCircle, MessageSquare, Settings, UserCheck, Users } from 'lucide-react'
import React from 'react'
import QuickActionCard from '../../components/participant/dashboard/QuickAction.card'



const quickActionsData = [
    {
        Icon: Users,
        title: "Find a Worker",
        text: "Discover verified support partners near your location area.",
        linkText: "EXPLORE NOW",
        link: "#",
        primaryColor: "text-[#137333]",
        secondaryColor: "bg-[#E6F4EA]"
    },
    {
        Icon: Settings,
        title: "Finish Setup",
        text: "Complete your configuration profile to unlock premium benefits.",
        linkText: "RESUME",
        link: "#",
        primaryColor: "text-[#1A73E8]",
        secondaryColor: "bg-[#E8F0FE]"
    },
    {
        Icon: MessageSquare,
        title: "View Messages",
        text: "Check for new diagnostic updates from your dedicated team logs.",
        linkText: "OPEN INBOX",
        link: "#",
        primaryColor: "text-[#9333EA]",
        secondaryColor: "bg-[#F3E8FF]"
    },
    {
        Icon: GitPullRequest,
        title: "Requests Status",
        text: "Track the comprehensive progress of your sent applications index.",
        linkText: "VIEW STATUS",
        link: "#",
        primaryColor: "text-[#D97706]",
        secondaryColor: "bg-[#FEF3C7]"
    },
]

const ParticipantDashboard = () => {
    return (
        <main className="p-8 space-y-8 max-w-7xl mx-auto">

            {/* Welcome Banner Block */}
            <section className=" from-[#EBFDF9] to-[#F1FDFB] rounded-3xl p-8 border border-[#D1FAE5] relative overflow-hidden">
                <div className="max-w-xl relative z-10">
                    <span className="text-[10px] bg-[#34D399]/20 text-[#065F46] font-bold tracking-wider uppercase px-3 py-1 rounded-full">Dashboard Overview</span>
                    <h2 className="text-3xl font-extrabold text-[#111827] mt-3 mb-2">Welcome back, <span className="text-[#206A63]">Alex.</span></h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Let's continue your support journey. We've updated your matches and request statuses based on your recent activity.</p>

                    {/* Quick Summary Pill Badges */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xs font-semibold text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                            <span>60% Progress</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xs font-semibold text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                            <span>3 New Messages</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xs font-semibold text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                            <span>1 Active Request</span>
                        </div>
                    </div>
                </div>
                {/* Minimal abstract circles design matching background */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#34D399]/5 rounded-full -mr-16 pointer-events-none"></div>
            </section>

            {/* Onboarding Milestone Progress Card */}
            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-[10px] text-[#2563EB] font-bold tracking-wider uppercase">Onboarding Journey</span>
                        <h3 class="text-base font-bold text-slate-800 mt-1">Current Milestone</h3>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Estimated completion: 15 mins</span>
                </div>

                {/* Linear Timeline bar component */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                    <div className="bg-[#10B981] h-full w-[70%] rounded-full"></div>
                </div>

                {/* Stepper Status Nodes Grid */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 size={16} className="text-[#10B981]" />
                        <span>Profile Basics</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 size={16} className="text-[#10B981]" />
                        <span>Documents</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-[#EFF6FF] p-3 rounded-xl border border-[#BFDBFE]">
                        <Clock size={16} className="text-[#2563EB]" />
                        <span>Preferences</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-white p-3 rounded-xl border border-slate-100 opacity-60">
                        <Circle size={16} />
                        <span>Final Review</span>
                    </div>
                </div>
            </section>

            {/* Quick Action Interactive Grid Cards */}
            <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">Quick Actions</h3>
                <div className="grid grid-cols-4 gap-4">
                    {quickActionsData.map((action, index) =>
                        <QuickActionCard
                            key={index}
                            {...action}
                        />
                    )}
                </div>
            </section>

            {/* Saved Workers Cards Array Grid Layout */}
            <section className="space-y-4">
                <div class="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">Saved Support Workers</h3>
                    <a href="#view-all" className="text-xs font-bold text-[#206A63] bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-all">View all saved</a>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Worker Card 1 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm relative group hover:shadow-md transition-all">
                        <button className="absolute top-5 right-5 text-slate-300 hover:text-[#EF4444] transition-all">
                            <Bookmark size={18} className="fill-current text-[#206A63]" />
                        </button>
                        <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 overflow-hidden border border-orange-200">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Sarah Worker" className="w-14 h-14 object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-slate-800">Sarah Mitchell</h4>
                                <div className="flex gap-1.5 mt-1.5">
                                    <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md uppercase">Aged Care</span>
                                    <span className="text-[9px] font-bold bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded-md uppercase">5 Yrs Exp</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 line-clamp-2 leading-relaxed">Specializing in emotional support and daily living activities for diverse profile conditions...</p>
                        <button className="w-full mt-5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-all">View Full Profile</button>
                    </div>

                    {/* Worker Card 2 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm relative group hover:shadow-md transition-all">
                        <button className="absolute top-5 right-5 text-slate-300 hover:text-[#EF4444] transition-all">
                            <Bookmark size={18} className="fill-current text-[#206A63]" />
                        </button>
                        <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 overflow-hidden border border-emerald-200">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="David Worker" className="w-14 h-14 object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-slate-800">David Chen</h4>
                                <div className="flex gap-1.5 mt-1.5">
                                    <span className="text-[9px] font-bold bg-[#F3E8FF] text-[#9333EA] px-2 py-0.5 rounded-md uppercase">Disability</span>
                                    <span className="text-[9px] font-bold bg-[#FEF3C7] text-[#D97706] px-2 py-0.5 rounded-md uppercase">Certified</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 line-clamp-2 leading-relaxed">Passion for helping young adults develop independent living skills through guided plans...</p>
                        <button className="w-full mt-5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-all">View Full Profile</button>
                    </div>

                    {/* Worker Card 3 */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm relative group hover:shadow-md transition-all">
                        <button className="absolute top-5 right-5 text-slate-300 hover:text-[#EF4444] transition-all">
                            <Bookmark size={18} className="fill-current text-[#206A63]" />
                        </button>
                        <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 overflow-hidden border border-blue-200">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Elena Worker" className="w-14 h-14 object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-slate-800">Elena Rodriguez</h4>
                                <div className="flex gap-1.5 mt-1.5">
                                    <span className="text-[9px] font-bold bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded-md uppercase">Companion</span>
                                    <span className="text-[9px] font-bold bg-[#FCE7F3] text-[#9D174D] px-2 py-0.5 rounded-md uppercase">Fluent Span</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-4 line-clamp-2 leading-relaxed">Dedicated to fostering meaningful social connections and providing structural household assistance...</p>
                        <button className="w-full mt-5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-all">View Full Profile</button>
                    </div>
                </div>
            </section>

            {/* Bottom Dual Grid Split Layout */}
            <div className="grid grid-cols-3 gap-8">

                {/* Recent Requests Module Block */}
                <div className="col-span-2 space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">Recent Requests</h3>
                        <button className="text-xs font-semibold text-slate-400 flex items-center gap-1 hover:text-slate-600 transition-all">
                            <span>Sort by Status</span> <ChevronDown size={14} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {/* Request 1 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-slate-200 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#F3E8FF] text-[#9333EA] rounded-xl flex items-center justify-center">
                                    <MessageSquare size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800">Support Session with Sarah M.</h5>
                                    <p className="text-[10px] text-slate-400 font-medium">Sent on Oct 24, 2025</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold bg-[#F3E8FF] text-[#7C3AED] px-3 py-1 rounded-full uppercase tracking-wider">Responded</span>
                        </div>

                        {/* Request 2 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-slate-200 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#FEF3C7] text-[#D97706] rounded-xl flex items-center justify-center">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800">Weekly Community Access</h5>
                                    <p className="text-[10px] text-slate-400 font-medium">Sent on Oct 22, 2025</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold bg-[#FEF3C7] text-[#D97706] px-3 py-1 rounded-full uppercase tracking-wider">Waiting</span>
                        </div>

                        {/* Request 3 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-slate-200 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#E6F4EA] text-[#137333] rounded-xl flex items-center justify-center">
                                    <UserCheck size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800">Transport Assistance Request</h5>
                                    <p className="text-[10px] text-slate-400 font-medium">Sent on Oct 18, 2025</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold bg-[#E6F4EA] text-[#10B981] px-3 py-1 rounded-full uppercase tracking-wider">Accepted</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Recent Activity Timeline & Help Section */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">Recent Activity</h3>
                        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 relative">

                            {/* Timeline Row 1 */}
                            <div className="flex gap-3 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-[#10B981] mt-1.5 shrink-0"></div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">You contacted Sarah Mitchell</h5>
                                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">2 hours ago</p>
                                </div>
                            </div>

                            {/* Timeline Row 2 */}
                            <div className="flex gap-3 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 shrink-0"></div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">New reply from support team</h5>
                                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Yesterday, 4:15 PM</p>
                                </div>
                            </div>

                            {/* Timeline Row 3 */}
                            <div className="flex gap-3 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1.5 shrink-0"></div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-800">Uploaded "NDIS Plan.pdf"</h5>
                                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">3 days ago</p>
                                </div>
                            </div>

                            {/* Vertical line connection */}
                            <div className="absolute left-[23px] top-6 bottom-10 w-0.5 bg-slate-100 z-0"></div>
                        </div>
                    </div>

                    {/* Call-to-action Dynamic Support Card Box */}
                    <div className="bg-[#1A5C55] rounded-2xl p-5 text-white shadow-sm relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="font-bold text-base mb-1.5">Need assistance?</h4>
                            <p className="text-xs text-emerald-100/80 leading-normal mb-4">Our support team is here to help you navigate your journey framework.</p>
                            <button className="bg-white text-[#1A5C55] hover:bg-emerald-50 transition-all font-bold text-xs px-4 py-2 rounded-xl shadow-sm">
                                Get help
                            </button>
                        </div>
                        {/* Abstract decorative graphic icon in box background */}
                        <HelpCircle size={90} className="absolute -bottom-6 -right-4 text-[#154B45] font-black pointer-events-none group-hover:scale-110 transition-all" />
                    </div>

                </div>

            </div>

        </main>
    )
}

export default ParticipantDashboard