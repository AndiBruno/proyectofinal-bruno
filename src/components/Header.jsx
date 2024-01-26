import React, {useState} from 'react';
import { RiMenuLine , RiCloseFill  } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
return (
    <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50'>
        <div className='xl:w-1/6 text-center -mt-4'>
            <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
                Viajes al Mejor Precio
                </a>
            </div>
            <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "-left-0" : "-left-full" } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
                <a href="" className="">
                    Inicio
                </a>
                <a href="" className="">
                    Quienes somos?
                </a>
                <a href="" className="">
                    Paquetes
                </a>
                <a href="" className="">
                    Contacto
                </a>
            </nav>
            <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>

                {showMenu ? <RiCloseFill /> : <RiMenuLine />}
            </button>
    </header>
);
};

export default Header