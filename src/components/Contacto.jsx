import React from 'react';
import { RiMailCheckFill  } from "react-icons/ri";

const Contacto = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20 bg-gray-100'>

            <div className='flex flex-col gap-4'>
                <h1 className='text-[40px] font-bold text-primary'>Contactanos!</h1>
                <p className='text-[20px] text-gray-500'>Dejanos tu mail para recibir ofertas de todos los paquetes disponibles.</p>
                <form className="w-full">

                    <div className='relative'>
                        <RiMailCheckFill className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl' />

                        <input type="text" 
                        className='w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none' 
                         placeholder='Ingresa tu mail para recibir promociones.'/>

                        <button type='submit' className='absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2'>Sucribirse</button>
                    </div>


                </form>
            </div>

            <div className='flex flex-col p-40'>
<div
  class=" flex flex-col max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class=" flex flex-col relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-200">
    ¡No te pierdas la chance de viajar al mejor precio! Descubrí destinos únicos y viví la mejor aventura. ¡Aprovechá las ofertas y hacé realidad tu viaje soñado!
    </p>
  </div>
</div>
            </div>
        

        
    </div>

    
  )
}

export default Contacto