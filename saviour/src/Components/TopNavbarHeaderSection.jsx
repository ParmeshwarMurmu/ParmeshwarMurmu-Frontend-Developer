import React from 'react'
import saviourTopImage from "../Assets/SaviourTopImage.png"
import saviourLogo from "../Assets/Logo Savior.png"

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
                <p className=' pt-4 pb-4 pr-6 pl-6'>Comming Soon </p>
            </div>

            <div>
                <p></p>
            </div>
        </div>
    )
}
