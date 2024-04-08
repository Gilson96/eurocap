import React from 'react'
import companyImage from '../../assets/company.png'
import Carousel from 'react-bootstrap/Carousel';


const SectionThree = () => {
  return (
    <div className='flex flex-col items-center justify-evenly w-full text-center h-72 p-3'>
      <h1 className='text-3xl font-bold'>Mais de <span className='text-red-300'>33.000</span> empresas confiam no Moloni</h1>
      <div className='flex w-full justify-evenly px-5'>
        <Carousel className='w-full'>
                <Carousel.Item>
                  <div className='flex justify-center items-center w-full gap-5'>
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='flex justify-center items-center w-full gap-5'>
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='flex justify-center items-center w-full gap-5'>
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   <img src={companyImage} className='h-40 w-32 opacity-40' alt='' />
                   </div>
                </Carousel.Item>
               
            </Carousel>
      </div>
    </div >
  )
}

export default SectionThree