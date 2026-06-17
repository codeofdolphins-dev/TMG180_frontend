import { LayoutDashboard, Bookmark, GitPullRequest, HelpCircle, Settings, AlertTriangle, FileText, Users } from "lucide-react";
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
            path: "/participant/dashboard",
        },
        {
            name: "Find Support",
            icon: MdPersonSearch,
            path: "/participant/find-support",
        },
        {
            name: "Favourites",
            icon: Bookmark,
            path: "/participant/favourites",
        },
        // {
        //     name: "Messages",
        //     icon: GoMail,
        //     path: "/participant/message",
        //     badgeCount: 0,
        // },
        // {
        //     name: "My Requests",
        //     icon: LuClipboardList,
        //     path: "/participant/request",
        // },
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
    ],
    admin: [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin/dashboard",
            size: 20
        },
        {
            name: "Workers",
            icon: Users,
            path: "/admin/workers",
            size: 20
        },
        {
            name: "Compliance",
            icon: LuShieldCheck,
            path: "/admin/compliance",
            size: 20
        },
        {
            name: "Policies",
            icon: FileText,
            path: "/admin/policies",
            size: 20
        },
        {
            name: "Incidents",
            icon: AlertTriangle,
            path: "/admin/incidents",
            size: 20
        },
        {
            name: "Settings",
            icon: LuSettings,
            path: "/admin/settings",
            size: 20
        },
    ],
};

export const utilityActions = {
    participant: [
        {
            name: "My Profile",
            icon: FaRegUserCircle,
            path: "/participant/profile",
        },
        {
            name: "Settings",
            icon: Settings,
            path: "participant/setting",
        },
        {
            name: "Help Center",
            icon: HelpCircle,
            path: "/participant/help",
        }
    ]
}