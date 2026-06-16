import { Bell, Search, CalendarRange, Download } from 'lucide-react'
import React, { useState } from 'react'

const TopNavbar = () => {
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <header className="bg-white border-b border-slate-100 h-16 flex items-center justify-between px-8 sticky top-0 z-20">
            {/* Left: Breadcrumb + Search */}
            <div className="flex items-center gap-6">
                <span className="text-sm font-semibold text-slate-800">Overview</span>

                <div className="relative w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search system..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-slate-300 focus:bg-white transition-all text-slate-700"
                    />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-50 rounded-full p-0.5">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${activeTab === 'overview'
                                ? 'bg-white text-slate-800 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('analytics')}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${activeTab === 'analytics'
                                ? 'bg-white text-slate-800 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        Analytics
                    </button>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                <button className="relative p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-all cursor-pointer">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all cursor-pointer">
                    <CalendarRange size={15} />
                    Date Range
                </button>

                <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-700 rounded-full hover:bg-teal-800 transition-all cursor-pointer shadow-sm">
                    <Download size={15} />
                    Export
                </button>
            </div>
        </header>
    )
}

export default TopNavbar