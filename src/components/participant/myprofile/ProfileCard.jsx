import React from 'react'
import ImageComponent from '../../ImageComponent'
import { LuPencil } from 'react-icons/lu'
import { useNavigate } from 'react-router';

const ProfileCard = ({
    profileImage = "",
    profileName = "Alex Thompson",
    profileEmail = "alex.thompson@example.com",
    progress = "20",
}) => {
    const navigate = useNavigate();

    function handleButtonClick(){
        navigate("/participant/profile/edit-profile")
    }
    
    return (
        <div className='w-full flex items-center gap-5 bg-white rounded-xl shadow p-6'>
            {/* profile image section */}
            <div className="">
                <ImageComponent
                    lowerIcon={true}
                    src={profileImage}
                    alt="profile image"
                />
            </div>

            {/* details section */}
            <div className="flex-1 flex flex-col gap-4">
                {/* details info & button section */}
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className='text-2xl font-bold text-black'>{profileName}</p>
                        <p className='text-slate-400 font-medium'>{profileEmail}</p>
                    </div>

                    <button
                        className='text-sm text-white bg-primary hover:bg-secondary px-5 py-2.5 rounded-full font-semibold cursor-pointer flex items-center gap-2'
                        onClick={handleButtonClick}
                    >
                        <LuPencil size={18} />
                        Edit Profile
                    </button>
                </div>

                {/* progress bar section */}
                <div>
                    <div className="flex justify-between items-center text-sm font-bold">
                        <p className='text-secondary tracking-wider'>Profile Completion</p>
                        <p className='text-slate-500 tracking-wider'>{progress}%</p>
                    </div>
                    <div className="w-full h-2.5 bg-[#ebedf2] rounded-full">
                        <div className={`bg-secondary h-2.5 rounded-full w-[${progress}%]`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard