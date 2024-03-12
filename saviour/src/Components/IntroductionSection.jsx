import React from 'react'
import introductionImage from '../Assets/Introduction Image.png'

export const IntroductionSection = () => {
    return (
        <div className='border-4 h-622'>
             {/* <div className='absolute top-677 bg-black'></div> */}
            <div>
                <p className='font-shojumaru text-red font-normal text-44 absolute top-677 left-163'>INTRODUCTION</p>
                <p  className='text-textWhite w-587 h-207 leading-24 text-24 font-normal font-zcool absolute top-753 left-166'>We've all been in the mud once, and now we've decided to fight it out.
                    Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future!
                    Our mission is to empower everyone to share wealth and succeed.
                    read more...

                </p>
            </div>

            <div>
                <img className='w-795 h-795 absolute top-511 left-723' src={introductionImage} alt="" />
            </div>

            <div className='absolute top-1048 left-166 rounded-21 w-178 h-54 bg-gradient-to-r from-[#ED0137] via-transparent to-[#F05733]'>
                <p className='pt-17 pr-21 pb-17 pl-21 font-zcool h-5 w-109 text-20 leading-20'>Documents</p>
            </div>


        </div>
    )
}
