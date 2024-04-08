import React from 'react'

const Foot = () => {
  return (
    <div className='flex flex-col items-center h-screen w-full'>
      <div className='flex flex-col bg-red-300 items-center justify-center gap-6 h-1/3 w-full p-2'>
        <h1>Registe-se e experimente grátis durante 30 dias!
        </h1>
        <input type='text' className='w-1/2 h-10 p-2' placeholder='o seu e-mail' />
      </div>
      <div className='flex flex-col bg-red-600 items-center justify-center gap-3 h-3/4 w-full'></div>
    </div>
  )
}

export default Foot