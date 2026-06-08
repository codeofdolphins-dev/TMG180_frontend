import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const QuickActionCard = ({
    Icon,
    title = "",
    text = "",
    linkText = "",
    link = "#",
    primaryColor = "",
    secondaryColor = "",
}) => {
    return (
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-48 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${primaryColor} ${secondaryColor}`}>
                <Icon size={20} />
            </div>
            <div>
                <h4 class="font-bold text-sm text-slate-800 mb-1">{title}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{text}</p>
            </div>
            <Link to={link} className={`text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all ${primaryColor}`}>
                <span>{linkText}</span> <ArrowUpRight size={14} />
            </Link>
        </div>
    )
}

export default QuickActionCard