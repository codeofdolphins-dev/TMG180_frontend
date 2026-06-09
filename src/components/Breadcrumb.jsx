import React from 'react'
import { Link } from 'react-router'

const option = [
    { label: "Label 1", endpoint: "/label-1" },
    { label: "Label 2", endpoint: "/label-2" },
    { label: "Label 3", endpoint: "/label-3" },
    { label: "Label" },
]

const Breadcrumb = ({ options = option }) => {
    return (
        <div className="mb-5 text-sm">
            <ol className="flex text-black font-semibold">
                {options?.map((nav, i) => Object.hasOwn(nav, "endpoint") ?
                    <li key={i}>
                        <Link
                            to={nav.endpoint}
                            className="after:content-['>'] after:px-1.5 text-black/50"
                        >
                            <span className='hover:underline'>{nav.label}</span>
                        </Link>
                    </li>
                    :
                    <li key={i}>
                        <p className=''> {nav?.label} </p>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default Breadcrumb;