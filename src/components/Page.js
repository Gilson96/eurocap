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
    <div className='flex flex-col items-center justify-center '>
        <SectionOne
            title='A forma mais simples de gerir a sua empresa
            '
            text='Software de faturação inovador que se adapta ao seu negócio!
            Destinado a profissionais liberais, micro, pequenas e médias empresas.
            Sem investimento inicial, completo e intuitivo.'
            buttonOne='Ver video'
            buttonTwo='Experimente agora!'
        />
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