import React from 'react'

const BasicStatCard = ({
    bgColor = "bg-white",
    border,
    iconBg,
    iconColor,
    valueColor = "text-black",
    labelColor = "text-black",
    value,
    label,
    Icon,
    badge,
}) => {
    return (
        <div
            className={`${bgColor} rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden ${border ? `border ${border}` : ""}`}
        >
            <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}>
                    <Icon size={22} className={iconColor} />
                </div>
                {badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        {badge}
                    </span>
                )}
            </div>

            <div>
                <p className={`text-2xl font-extrabold ${valueColor}`}>
                    {value}
                </p>
                <p className={`text-xs font-medium mt-0.5 ${labelColor}`}>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default BasicStatCard