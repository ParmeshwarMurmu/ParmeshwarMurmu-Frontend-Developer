import React from 'react'
import eventImage from '../Assets/EventImage.png'


export const EventSection = () => {
  return (
    <div className='opacity-100'>
        <img className='w-1512 h-1145 absolute top-1210 opacity-75' src={eventImage} alt="" />

        <p className='text-red w-823 h-54 text-center font-shojumaru leading-54 absolute top-1272 left-344 text-40 font-normal'>PARTICIPATE IN OUR IDO EVENT</p>
        <p className='opacity-100 w-539 h-111 absolute top-1385 left-80 font-zcool text-21 leading-36 text-center font-normal text-eventText'>During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</p>

        <div className='z-50 w-244 h-70 absolute top-1520 left-229 rounded-20 bg-red'>
            <p className='text-white w-125 h-24 mt-23 ml-60 mr-60 mb-23 font-shojumaru text-18 leading-23 font-normal'>Token Info</p>
            
        </div>

        <div className='w-412 h-382 absolute top-1562 left-151 rounded-20 border-1 border-gradient-to-r from-[#ED0137] via-transparent to-[#F05733] inset-0'>
            <div className='flex'>
            <p className='border-4 mt-64  ml-59 top-1626 left-210 font-zcool leading-20 text-19'>Total Token Supply</p>
            <p className='border-4 mt-62  top-1624 left-399 font-zcool text-19 leading-20'>20%</p>
            </div>
           {/* <p className='absolute text-19 leading-21 w-176 h-40 top-1626 left-210 font-zcool text-white font-normal'>Total Token Supply</p>
           <p className='w-39 h-20 absolute top-1624 left-399 text-eventPercent leading-21 text-19 font-zcool font-normal'>20%</p> */}
        </div>
    </div>
  )
}
