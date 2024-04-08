import React from 'react'
import randomVideo from '../../assets/randomVideo.mp4'

const SectionOne = ({ text, buttonOne, buttonTwo }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen text-center'>
      <video className='w-full h-full object-cover flex' controls id='video'>
        <source src={randomVideo} type="video/mp4" />
      </video>
      <div className='flex flex-col justify-center items-center absolute text-white' id="heading">
        <h1 className=' text-4xl font-bold p-2' id="heading-h1">A forma mais simples de gerir a sua empresa</h1>
        <p className='text-lg w-[32rem] p-2'>Software de faturação inovador que se adapta ao seu negócio!
          Destinado a profissionais liberais, micro, pequenas e médias empresas.
          Sem investimento inicial, completo e intuitivo.</p>
        <div className='flex gap-3 p-2' id='heading-buttons'>
          <button className='w-40 h-10 p-2 bg-red-500 rounded text-white shadow'>Ver video</button>
          <button className='w-40 h-10 p-2 bg-red-500 rounded text-white shadow'>Experimente agora!</button>
        </div>
      </div>
    </div>
  )
}

export default SectionOne