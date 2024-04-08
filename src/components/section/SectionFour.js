import React from 'react'
import companyImage from '../../assets/company.png'
import Carousel from 'react-bootstrap/Carousel';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChatBubbleLeftEllipsisIcon, ArchiveBoxIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const SectionFour = () => {
    return (
        <div className='flex flex-col w-full h-auto items-center'>
            <div className='flex flex-col items-center justify-evenly w-full text-center h-96 bg-red-500 p-5 mb-3'>
                <h1 className='text-3xl font-bold text-white p-2 my-3 '>Software de faturação online líder em Portugal</h1>
                {/* <div className='flex w-full justify-center gap-5 p-3'>
                    <ArrowLeftCircleIcon className='h-20 w-20 relative top-1/3 text-white' />
                    <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                        <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                        <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                        <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                        <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div> <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                        <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                        <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <ArrowRightCircleIcon className='h-20 w-20 relative top-1/3 text-white' />
                </div> */}                                            <Carousel className='w-full'>
                    <Carousel.Item>
                        <div className='flex gap-2 p-2 justify-center items-center'>
                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>


                    </Carousel.Item>

                    <Carousel.Item className='w-full'>
                        <div className='flex gap-2 p-2 justify-center items-center'>
                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>

                            <div className='flex flex-col w-52 h-96 bg-white border border-slate-300 items-center justify-center shadow-2xl rounded-lg z-30 p-2 gap-3'>
                                <ChatBubbleLeftEllipsisIcon className='h-14 w-full text-red-300' />
                                <h1 className='font-bold text-red-500 text-lg'>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>


                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='flex flex-col items-center justify-evenly w-full text-center h-auto bg-white p-4 mt-52 gap-14'>
                <div>
                    <h1 className='text-3xl font-bold'>Software de faturação online líder em Portugal</h1>
                    <p className='text-lg p-3'>A nova forma de contratação pública torna obrigatória a emissão de faturas eletrónicas para empresas que trabalham com organismos públicos. O Moloni fornece um conjunto de ferramentas que permite às empresas cumprirem a lei.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-20 p-2 w-full'>
                    <div className='flex flex-col  items-center justify-center w-52 h-auto'>
                        <ArchiveBoxIcon className='h-24 w-24 text-black' />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod tempor incididunt ut labore et dolore magna adivqua.</p>
                    </div>
                    <div className='flex flex-col  items-center justify-center w-52 h-auto'>
                        <ArchiveBoxIcon className='h-24 w-24 text-black' />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod tempor incididunt ut labore et dolore magna adivqua.</p>
                    </div> <div className='flex flex-col  items-center justify-center w-52 h-auto'>
                        <ArchiveBoxIcon className='h-24 w-24 text-black' />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod tempor incididunt ut labore et dolore magna adivqua.</p>
                    </div> <div className='flex flex-col  items-center justify-center w-52 h-auto'>
                        <ArchiveBoxIcon className='h-24 w-24 text-black' />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt, sed do eiusmod tempor incididunt ut labore et dolore magna adivqua.</p>
                    </div>

                </div>
            </div>

            <div className='flex w-10/12 h-28 bg-white shadow-lg p-2 gap-3 items-center justify-evenly  my-5'>
                <UserCircleIcon className='h-14 w-14 text-red-300' />
                <p className='text-3xl mt-2'>Registe-se e experimente grátis durante <span className='text-red-400'>30 dias!</span></p>
                <button className='w-40 h-16 border border-slate-200 shadow-lg rounded-lg bg-red-300 font-bold text-white'>Experimente ja</button>
            </div>

        </div>
    )
}

export default SectionFour