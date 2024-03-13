import React from 'react'
import eventImage from '../Assets/EventImage.png'


export const EventSection = () => {
    return (
        <div className=''>
            <div className=' w-full h-1145 absolute top-1210 bg-black'></div>
            <img className='w-full h-1145 absolute top-1210 z-50' src={eventImage} alt="" />


            <p className='text-red w-823 h-54 text-center font-shojumaru leading-54 absolute top-1272 left-344 text-40 font-normal z-50'>PARTICIPATE IN OUR IDO EVENT</p>
            <p className='z-50 opacity-100 w-539 h-111 absolute top-1385 left-80 font-zcool text-21 leading-36 text-center font-normal text-eventText'>During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</p>

            <div className='z-50 w-244 h-70 absolute top-1520 left-229 rounded-20 bg-red opacity-100'>
                <p className='text-white z-50 w-125 h-24 mt-23 ml-60 mr-60 mb-23 font-shojumaru text-18 leading-23 font-normal'>Token Info</p>

            </div>
            {/* border-gradient-to-r from-[#ED0137] via-transparent to-[#F05733] rounded-20 relative */}
            <div className='opacity-100 w-412 h-382 absolute top-1562 left-151 border-1 rounded-20 border-gradient-to-r from-[#ED0137] via-transparent to-[#F05733]'>
                
                <div className='z-50 flex border-4 border-amber-300'>
                    <p className='text-white w-176 h-40 border-4 mt-64  ml-59 top-1626 left-210 font-zcool leading-20 text-19 font-normal'>Total Token Supply</p>
                    <p className='text-eventPercent w-39 h-20 mt-62 ml-15 font-zcool text-19 leading-20 font-normal'>20%</p>
                </div>

                <div className='flex'>
                    <p className='text-white w-94 h-20 mt-26 ml-59 mr-9 leading-21 text-19 font-zcool font-normal'>Soft Cap</p>
                    <p className='text-eventPercent left-399 h-20 w-89 mt-6 ml-45 leading-21 text-19 font-zcool font-normal'>200BNB</p>
                </div>

                <div className='flex'>
                    <p className='text-white w-155 h-20 mt-26 ml-59  leading-21 text-19 font-zcool font-normal'>Initial exchange rate</p>
                    <p className='text-eventPercent ml-34  h-20 mt-6 text-left leading-21 text-19 font-zcool font-normal'>1BNB</p>
                </div>

                <div>
                    <p className='text-white w-388 h-20 mt-37 ml-37 leading-21 text-19 font-zcool font-normal'>Recommended Referral Commission</p>
                </div>

                <div className='flex'>
                    <p className='text-white w-146 h-20 mt-26 ml-59 leading-21 text-19 font-zcool font-normal'>1st Generation</p>
                    <p className='text-eventPercent h-20 w-27 mt-24 ml-43 leading-21 text-19 font-zcool font-normal'>5%</p>
                </div>

                <div className='flex'>
                    <p className='text-white w-152 h-20 mt-26 ml-59 leading-21 text-19 font-zcool font-normal'>2nd Generation</p>
                    <p className='text-eventPercent h-20 w-26 ml-26 mt-26 leading-21 text-19 font-zcool font-normal'>2%</p>
                </div>
                
            </div>

            <div className='z-50 h-39 w-138 rounded-16  absolute top-1981 left-286 bg-gradient-to-r from-[#ED0137] via-transparent to-[#F05733]'>
                <button className='text-white mt-12 ml-15 mb-12 mr-15 font-zcool text-14 leading-14 w-107 h-14'>Connect Wallet</button>
            </div>

            <p className='text-red z-50 text-center w-547 h-74 absolute top-2056 left-72 font-shojumaru font-normal text-28 leading-37 '>Become an affiliate & Earn 7% as Commission!</p>

            <div className='text-white z-50 absolute top-2160 left-111 w-467 h-48  rounded-20 border-1 border-red'>
                <input type="text" placeholder='Generate a unique referral link' className='placeholderColor bg-black mt-16 ml-20 mr-106 mb-16 h-16 w-239 font-normal font-zcool text-16 leading-16' />
                <button className='w-100 h-42 rounded-20 bg-red font-zcool text-white'>Generate</button>
            </div>


            <div className='w-708 h-738 absolute top-1441 left-677 border-1 z-50'>
                <p className='text-red w-312 h-64 ml-198 mt-72 z-50 font-shojumaru text-48 leading-63 font-normal opacity-100 '>PRESALE 1</p>
                <p className='text-presaleText mt-32 ml-170 text-32 leading-32 font-zcool font-normal'>1 Saviour = 0.657 USDT</p>
                <p className='text-presaleText2 font-zcool ml-166 mt-40 w-376 h-24 text-24 leading-24 font-normal '>Next Stage Price = 0.723 USDT</p>
                <p className='text-presaleText2 font-zcool ml-135 mt-40 w-438 h-24 text-24 leading-24 font-normal'>Sold - $34,56,56,764/$50,00,00,000</p>
                <p className='text-presaleText2 font-zcool ml-120 mt-40 w-467 h-24 text-24 leading-24 font-normal'>Raised - $34,56,56,764/$40,00,00,000</p>
                <div>
                    <div >
                        <input type='text' placeholder='Enter the amount (BNB)' className='w-467 h-48 ml-120 mt-40 rounded-20 border-5 border-inputBorder font-zcool bg-black
                pt-4 pb-4 pl-5 text-placeholderColor'
                        />

                        <input type='text' placeholder='Minimum Quantity to Buy' className='w-467 h-48 ml-120 mt-19 rounded-20 border-5 border-inputBorder font-zcool bg-black
                pt-4 pb-4 pl-5 text-placeholderColor'
                        />

                        <input type='text' placeholder='Maximum Quantity of Tokens' className='w-467 h-48 ml-120 mt-19 rounded-20 border-5 border-inputBorder font-zcool bg-black
                pt-4 pb-4 pl-5 text-placeholderColor'
                        />
                    </div>
                </div>
                
                <div className='flex'>
                <div className='ml-237 mt-40 rounded-21 w-73 h-45  bg-gradient-to-r from-[#ED0137] via-transparent to-[#F05733] '>
                    <button className='w-31 h-17 font-zcool pl-21 pt-14 pb-14 pr-21 text-17 leading-17 font-normal'>Buy</button>
                   
                </div>

                <div className='mt-40 rounded-21 w-131 h-45 ml-33 bg-gradient-to-r from-[#ED0137] via-transparent to-[#F05733] '>
                    <button className='h-17 font-zcool pl-21 pt-14 pb-14 pr-21 text-17 leading-17 font-normal'>Claim Drop</button>
                   
                </div>
                </div>

            </div>
        </div>
    )
}
// pt-14 pr-21 pb-14 pl-21