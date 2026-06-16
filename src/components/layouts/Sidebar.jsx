import React from 'react'
import { NavLink } from 'react-router'
import { navigationLinks, utilityActions } from './helper'

const USER_TYPE = "admin"
// const USER_TYPE = "participant"
// const USER_TYPE = "worker"

const Sidebar = () => {

    const USER_TYPE = useSelector(state => state.auth.userType);

    return (
        <>
            <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 fixed h-full z-10">
                <div>
                    {/* Logo Brand */}
                    <div className="flex items-center gap-2 mb-8 px-2">
                        <div className="w-8 h-8 rounded-full bg-[rgb(16,185,129)] flex items-center justify-center text-white font-bold text-sm">
                            T
                        </div>
                        <div>
                            <h1 className="font-bold text-lg text-[#0F172A] tracking-tight">TMG180</h1>
                            <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider -mt-1">{USER_TYPE === "admin" ? "Admin Console" : `${USER_TYPE} Portal`}</p>
                        </div>
                    </div>

                    {/* Main Navigation links */}
                    <nav className="space-y-1">
                        {navigationLinks[USER_TYPE]?.map((item, idx) => {
                            const Icon = item.icon;
                            // return item?.badgeCount ? (
                            return Object.hasOwn(item, "badgeCount") ? (
                                <NavLink
                                    key={idx}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between gap-3 px-4 py-3 rounded-full font-medium text-sm transition-all
                                            ${isActive ? "bg-primary text-white shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`
                                    }
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={item.size || 18} />
                                        <span>{item.name}</span>
                                    </div>
                                    {
                                        item.badgeCount > 0 &&
                                        <span className="bg-[#EF4444] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{item.badgeCount}</span>
                                    }
                                </NavLink>
                            ) : (
                                <NavLink
                                    key={idx}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-full font-medium text-sm transition-all
                                            ${isActive ? "bg-primary text-white shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`
                                    }
                                >
                                    <Icon size={item.size || 18} />
                                    <span>{item.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Utility Actions */}
                <div className="border-t border-slate-100 pt-4 space-y-1">

                    {/* participant utility Actions */}
                    {USER_TYPE === "participant" && (
                        utilityActions["participant"]?.map((item, idx) => {
                            const Icon = item.icon;
                            return <NavLink
                                key={idx}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-full font-medium text-sm transition-all
                                            ${isActive ? "bg-primary text-white shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`
                                }
                            >
                                <Icon size={16} />
                                <span>{item.name}</span>
                            </NavLink>
                        })
                    )}

                    {/* worker utility Actions */}
                    {USER_TYPE === "worker" && (
                        utilityActions["worker"]?.map((item, idx) => {
                            const Icon = item.icon;

                            return item.id === 1 ? (
                                <NavLink
                                    key={idx}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-full text-sm font-semibold transition-all
                                        ${isActive ? "bg-primary text-white shadow-sm" : "text-slate-600 bg-sky-200 hover:text-slate-800"}`
                                    }
                                >
                                    <Icon size={16} />
                                    <span>{item.name}</span>
                                </NavLink>
                            ) : (
                                <button
                                    key={idx}
                                    className="flex items-center w-full gap-3 px-4 py-3 rounded-full font-semibold text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                                >
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </button>
                            );
                        })
                    )}

                    {/* admin utility Actions */}
                    {USER_TYPE === "admin" && (
                        <>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold bg-teal-700 text-white hover:bg-teal-800 transition-all cursor-pointer shadow-sm">
                                <span>New Report</span>
                            </button>
                            <div className="flex items-center gap-3 px-2 pt-3 mt-2">
                                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100 shrink-0">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Admin" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Admin User</h4>
                                    <p className="text-[11px] text-slate-400 font-medium">Super Admin</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </aside>
        </>
    )
}

export default Sidebar