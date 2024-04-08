import React from 'react'

const SectionSix = () => {
    return (
        <div className="flex flex-col items-center  bg-slate-200 justify-evenly w-full text-center h-screen p-3" id='sectionSix'>
            <h1 className='text-3xl font-bold p-2 w-full'>POS sem limitações por apenas</h1>
            <h1 className='text-3xl'>9,90€ por mês*</h1>
            <p className='text-xl'>O Moloni disponibiliza um ponto de venda prático, seguro, fiável e sem limites de utilização.
                Compatível com Windows, Mac, Linux e dispositivos móveis Telemóveis e tablets e sem fidelizações ou contratos.</p>
                <button className='w-auto h-16 border border-slate-200 shadow-lg rounded-lg bg-red-300 font-bold text-white p-3'>Explorar funcionalidades</button>
            <p className='text-xl' id='sectionSix-lastP'>*O valor apresentado é referente apenas à solução de software, não incluindo equipamentos que devem ser adquiridos a terceiros. Ao preço apresentado acresce a taxa de IVA em vigor.
            </p>
        </div>
    )
}

export default SectionSix