import React from 'react'
import { TopNavbarHeaderSection } from '../Components/TopNavbarHeaderSection'
import { IntroductionSection } from '../Components/IntroductionSection'
import { EventSection } from '../Components/EventSection'

export const Home = () => {


  return (

    <div className='relative'>

        <div>
            <TopNavbarHeaderSection />
        </div>
         
         
        <div className='bg-black opacity-100'>
            <IntroductionSection />
        </div>

        <div>
          <EventSection />
        </div>

    </div>
  )
}
