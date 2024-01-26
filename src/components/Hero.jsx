import React from 'react';


const Hero = () => {
return <section className='m-h-[90vh] grid grid-cols-1 md:grid-cols-8 p-8'>
    {/* TITULO DESCRP CARROUSEL O IMAGEN */}
<div className='md:col-span-5 flex items-center justify-center p-8'>
<div className='flex flex-col gap-10'>
<h1 className='text-6xl font-bold'>Viajes al Mejor <span className='text-primary p-2 relative'>Precio</span></h1>
<p className='text-gray-500 text-xl leading-[2.5rem]'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque quos, voluptate delectus excepturi assumenda non maxime, consectetur quo unde ut veniam minima, debitis accusamus! Voluptate, dolor tenetur enim sequi quas vel.
    </p>
<p>
    <button className='bg-primary font-bold text-white py-2 px-6 rounded-xl texto-2xl'>Contactanos!</button>
</p>
</div>
</div>
    {/* SOLO IMAGEN */}
<div className='md:col-span-3 flex items-center justify-center'>
    <img className='w-180 h-180' src="logo hero.png" alt="" />
</div>

</section> 

};

export default Hero