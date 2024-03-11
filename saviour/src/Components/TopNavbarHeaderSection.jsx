import React from 'react'
import saviourTopImage from "../Assets/SaviourTopImage.png"
import saviourLogo from "../Assets/Logo Savior.png"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const TopNavbarHeaderSection = () => {

    return (
        <div className='relative'>
            <img className='w-full' src={saviourTopImage} alt="" />

            <div>
                <img className='absolute top-27 left-88' src={saviourLogo} alt="" />
                <p className='text-white font-zcool absolute top-56 left-198 text-3xl'>Saviour</p>
            </div>

            <div className='absolute top-46 left-498 flex font-zcool text-white bg-black rounded-20 w-583
            '>
                <p className=' pt-4 pb-4 pr-6 pl-6'>Home</p>
                <p className=' pt-4 pb-4 pr-6 pl-6'>IDO</p>
                <p className=' pt-4 pb-4 pr-6 pl-6'>Tokenomics</p>
                <p className=' pt-4 pb-4 pr-6 pl-6'>Roadmap</p>
                <p className=' pt-4 pb-4 pr-6 pl-6 flex'>Comming Soon </p>
            </div>

            <div className='absolute top-54 left-1296 h-38 rounded-15 bg-gradient-to-r from-[#ED0137] via-transparent to-[#F05733]'>
                <p className='mt-2.5 mb-2.5 mr-4 ml-4 text-xs font-poppins font-semibold text-white'>Connect Wallet</p>
            </div>

            <div className='font-shojumaru absolute top-276 left-123 font-normal w-1262 h-108'>
                <p className='text-45 text-white2 text-center leading-53'>WHERE BLOCKCHAIN HEROES THRIVE, RESCUING DREAMS, ELEVATING FORTUNES</p>
            </div>
        </div>
    )
}

