import React from 'react'
import SectionOne from './section/sectionOne'
import SectionTwo from './section/SectionTwo'
import SectionThree from './section/SectionThree'
import SectionFour from './section/SectionFour'
import SectionFive from './section/SectionFive'
import SectionSix from './section/SectionSix'
import Foot from './Foot'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center ' id='page'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
       
        <Foot></Foot>
    </div>
  )
}

export default Page