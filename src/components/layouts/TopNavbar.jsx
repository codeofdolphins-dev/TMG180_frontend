import { Bell, Search, Settings } from 'lucide-react'
import React from 'react'

const TopNavbar = () => {
    return (
        <header className="bg-white border-b border-slate-100 h-20 flex items-center justify-between px-8 sticky top-0 z-20">
            {/* Universal Search Bar */}
            <div className="relative w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text"
                    placeholder="Search resources, workers or documents..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-full py-2 pl-11 pr-4 text-sm focus:outline-none focus:border-slate-300 focus:bg-white transition-all text-slate-700"
                />
            </div>

            {/* Identity Widget Actions */}
            <div className="flex items-center gap-6">
                <button className="relative p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-all">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-white"></span>
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-all">
                    <Settings size={20} />
                </button>

                <div className="flex items-center gap-3 border-l border-slate-100 pl-6">
                    <div className="text-right">
                        <h4 className="text-sm font-bold text-slate-800">Alex Johnson</h4>
                        <p className="text-[11px] text-slate-400 font-medium">PID: #8291</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Avatar Profile" className="w-10 h-10 object-cover" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopNavbar