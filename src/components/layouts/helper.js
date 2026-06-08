import { LayoutDashboard, Bookmark, GitPullRequest, HelpCircle, Settings } from "lucide-react";
import { FaRegCalendar, FaRegUserCircle } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { LuClipboardList, LuSettings, LuShieldCheck } from "react-icons/lu";
import { MdGroups, MdLogout, MdPersonSearch } from "react-icons/md";
import { RiFileList3Line, RiGraduationCapLine } from "react-icons/ri";

export const navigationLinks = {
    participant: [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/participent/dashboard",
        },
        {
            name: "Find Workers",
            icon: MdPersonSearch,
            path: "/participent/find-worker",
        },
        {
            name: "Saved Workers",
            icon: Bookmark,
            path: "/participent/saved-worker",
        },
        {
            name: "Messages",
            icon: GoMail,
            path: "/participent/message",
            badgeCount: 0,
        },
        {
            name: "My Requests",
            icon: LuClipboardList,
            path: "/participent/request",
        },
    ],
    worker: [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/worker/dashboard",
            size: 20
        },
        {
            name: "Calendar",
            icon: FaRegCalendar,
            path: "/worker/calendar",
            size: 16
        },
        {
            name: "Participants",
            icon: MdGroups,
            path: "/worker/participant",
            size: 22
        },
        {
            name: "Resources",
            icon: RiFileList3Line,
            path: "/worker/resource"
        },
        {
            name: "Compliance",
            icon: LuShieldCheck,
            path: "/worker/compliance",
            size: 20
        },
        {
            name: "Learning Hub",
            icon: RiGraduationCapLine,
            path: "/worker/learning-hub",
            size: 20
        },
        {
            name: "Settings",
            icon: LuSettings,
            path: "/worker/settings",
            size: 20
        },
        // RiSettings2Line
    ],
};

export const utilityActions = {
    participant: [
        {
            name: "My Profile",
            icon: FaRegUserCircle,
            path: "/participent/profile",
        },
        {
            name: "Settings",
            icon: Settings,
            path: "participent/setting",
        },
        {
            name: "Help Center",
            icon: HelpCircle,
            path: "/participent/help",
        }
    ],
    worker: [
        {
            id: 1,
            name: "Help Center",
            icon: HelpCircle,
            path: "/worker/help-center",
        },
        {
            id: 2,
            name: "Log Out",
            icon: MdLogout,
        },
    ],
};