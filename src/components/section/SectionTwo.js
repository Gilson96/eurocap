import React from 'react'

const SectionTwo = () => {
  return (
    <div className="flex flex-col items-center  bg-slate-100 justify-evenly w-full text-center h-screen p-3" id='sectionTwo'>
        <div className='flex bg-red-600 items-center justify-center text-white w-52 h-52 '>Melhor do Ano</div>
        <h1 className='text-3xl font-bold p-2 w-full'>O Ecocap e Produto do Ano</h1>
        <p className='text-lg p-2'>Os portugueses elegeram e confirmam o Moloni como o software de gestão de referência em Portugal!</p>
        <button className='w-32 h-14 p-2 border border-slate-200 bg-red-500 rounded text-white shadow'>Saber mais</button>
    </div>
  )
}

export default SectionTwo