import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import office from '../../assets/office.jpg'
const SectionFive = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full text-center bg-black h-screen'>
            <Carousel className='w-full'>
                <Carousel.Item>
                    <img src={office} className='h-screen w-full' />
                        
                    <Carousel.Caption className='flex flex-col h-full items-center justify-center gap-3'>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='w-40 h-16 border border-slate-200 shadow-lg rounded-lg bg-red-300 font-bold text-white'>Experimente ja</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={office} className='h-screen w-full' />
                        
                    <Carousel.Caption className='flex flex-col h-full items-center justify-center gap-3'>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='w-40 h-16 border border-slate-200 shadow-lg rounded-lg bg-red-300 font-bold text-white'>Experimente ja</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={office} className='h-screen w-full' />
                        
                    <Carousel.Caption className='flex flex-col h-full items-center justify-center gap-3'>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='w-40 h-16 border border-slate-200 shadow-lg rounded-lg bg-red-300 font-bold text-white'>Experimente ja</button>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </div>
    )
}

export default SectionFive