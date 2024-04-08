import React from 'react'

const Foot = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full' id='footer'>
      <div className='flex flex-col bg-red-300 items-center justify-center gap-6 h-1/3 w-full p-2' id='footer-firstDiv'>
        <h1>Registe-se e experimente grátis durante 30 dias!
        </h1>
        <input type='text' className='w-1/2 h-10 p-2' placeholder='o seu e-mail' />
      </div>
      <div className='flex flex-col bg-slate-500 items-center justify-center gap-3 h-3/4 w-full' >

        <div className='flex gap-10' id='footer-secondDiv'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl text-white'>Descarregue as nossas apps</h1>
            <div className='flex text-4xl gap-4 p-2'>
              <i class="fa-brands fa-google-play border border-slate-400 w-20 p-2 bg-black text-white shadow-md rounded text-center"></i>
              <i class="fa-brands fa-apple-pay border border-slate-400 w-20 p-2 bg-black text-white shadow-md rounded text-center"></i>
            </div>
          </div>
          <ul className='relative top-4'>
            <h1 className='text-xl text-white'>Sobre</h1>
            <div className='flex flex-wrap w-48 gap-2'>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </div>
          </ul>
        </div>
        <span className='w-1/2 border border-black h-0 mt-3 mb-4 relative top-5'></span>
        <div className='flex gap-3 text-5xl w-1/2' id='icons'>
          <i class="fa-brands fa-facebook hover:text-white"></i>
          <i class="fa-brands fa-instagram hover:text-white"></i>
          <i class="fa-brands fa-x-twitter hover:text-white"></i>
          <i class="fa-brands fa-youtube hover:text-white"></i>
        </div>
        
        <p id='copyrighy'>© 2024 Ecocap - Software de faturação online</p>
      </div>

    </div>
  )
}

export default Foot