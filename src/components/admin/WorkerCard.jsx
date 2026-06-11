import { Eye, Pencil } from "lucide-react"
import { BiSolidBookContent } from "react-icons/bi"

const statusBadgeStyles = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    danger: 'bg-red-50 text-red-600 border-red-200',
    neutral: 'bg-slate-50 text-slate-500 border-slate-200',
}

const publishBadgeStyles = {
    PUBLISHED: {
        dot: 'bg-emerald-500',
        text: 'text-emerald-700',
        bg: 'bg-emerald-50',
        borderStyle: 'border-l-4 border-green-500',
    },
    DRAFT: {
        dot: 'bg-slate-400',
        text: 'text-slate-600',
        bg: 'bg-slate-50',
        borderStyle: 'border-l-4 border-amber-500',
    },
}

export default function WorkerCard({ worker }) {
    const pubStyle = publishBadgeStyles[worker.publishStatus] || publishBadgeStyles.DRAFT

    return (
        <div className={`bg-white rounded-xl px-6 py-5 flex justify-between items-center hover:shadow-md transition-all duration-300 group ${pubStyle.borderStyle}`}>
            {/* Avatar + Info */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                    <img
                        src={worker.avatar}
                        alt={worker.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-800">{worker.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{worker.company}</p>
                    <p className="text-xs font-semibold text-teal-600 mt-0.5">ID: {worker.id}</p>
                </div>
            </div>

            {/* Contract Type */}
            <div className="">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contract Type</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">{worker.contractType}</p>
            </div>

            {/* Subscription */}
            <div className="">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subscription</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">{worker.subscription || '—'}</p>
            </div>

            {/* Internal Status Tracking */}
            <div className="">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 text-center">Internal Status Tracking</p>
                <div className="flex flex-col gap-1.5">
                    <StatusBadge label="Onboarding" value={worker.onboarding.status} variant={worker.onboarding.variant} />
                    <StatusBadge label="Compliance" value={worker.compliance.status} variant={worker.compliance.variant} />
                    <StatusBadge label="Policy" value={worker.policy.status} variant={worker.policy.variant} />
                </div>
            </div>

            {/* Publish Status */}
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-2 h-2 rounded-full ${pubStyle.dot}`} />
                    <span className={`text-xs font-bold ${pubStyle.text} uppercase tracking-wide`}>{worker.publishStatus}</span>
                </div>
                <p className="text-[11px] text-slate-400">{worker.statusDate}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
                <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer">
                    <Eye size={16} />
                </button>
                <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer">
                    {worker.publishStatus === 'DRAFT' ? <BiSolidBookContent size={16} /> : <Pencil size={16} />}
                </button>
            </div>
        </div>
    )
}

const StatusBadge = ({ label, value, variant }) => {
    const style = statusBadgeStyles[variant] || statusBadgeStyles.neutral
    return (
        <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded border ${style}`}>
            {label}: {value}
        </span>
    )
}