import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router";
import Sidebar from '../components/layouts/Sidebar';
import TopNavbar from '../components/layouts/TopNavbar';

const USER_TYPE = "participant"

const AppLayout = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (USER_TYPE === "participant") navigate("/participent/dashboard", { replace: true });
    // }, [USER_TYPE])


    return (
        <div className="flex min-h-screen bg-[#F8FAFC] text-[#2C3E50] font-sans">
            {/* sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 h-full pl-64">
                <TopNavbar />

                <div className="w-full bg-[#F9F9Fb]">
                    <Outlet />
                </div>

                <footer className="h-10 bg-white border-t border-slate-100 px-8 flex items-center justify-between shrink-0 text-[10px] text-slate-400 font-bold tracking-wider uppercase">
                    <div>Secure Worker Portal • Data Encryption Active</div>
                    <div>TMG180 Healthcare System v4.2</div>
                </footer>
            </div>

        </div>
    );
}

export default AppLayout;