import React from 'react'
import randomVideo from '../../assets/randomVideo.mp4'

const SectionOne = ({ inlineClass, title, text, buttonOne, buttonTwo }) => {
  return (
    <div className={`flex flex-col ${inlineClass} items-center justify-center w-full  h-screen text-center`}>
      <video className='w-full h-full object-cover flex items-center justify-center' controls>
        <source src={randomVideo} type="video/mp4" />
      </video>
      <div className='flex flex-col justify-center items-center absolute'>
        <h1 className='text-white text-4xl font-bold p-2 '>{title}</h1>
        <p className='text-white text-lg w-[32rem] p-2'>{text}</p>
        <div className='flex gap-3 p-2'>
          <button className='w-40 h-10 p-2 bg-red-500 rounded text-white shadow'>{buttonOne}</button>
          <button className='w-40 h-10 p-2 bg-red-500 rounded text-white shadow'>{buttonTwo}</button>
        </div>
      </div>
    </div>
  )
}

export default SectionOne