import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa6';

const ImageComponent = ({
    src,
    alt = "",
    className = "",
    lowerIcon = false,
}) => {
    return (
        <div className="relative w-28 h-28 rounded-full border-4 border-slate-200 shadow-inner shrink-0 bg-slate-100">
            {(src && src.length > 0) ? (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover rounded-full ${className}`}
                />
            ) : (
                <div className={`bg-slate-100 w-full h-full rounded-full flex items-center justify-center`}>
                    <FaRegUser size={40} />
                </div>
            )}
            {
                lowerIcon &&
                <div className="absolute bottom-0 right-0 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-md transition-colors">
                    <FaCamera size={14} />
                </div>
            }
        </div>
    )
}

export default ImageComponent