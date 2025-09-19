import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Nav (){
    const [open,SetOpen] = useState(false);

    
    return (
        <nav className="relative flex justify-between items-center bg-blue-900 text-white">
            <div className="m-3"> <span className="text-2xl font-bold  ">Logo</span></div>
            <div className=" flex justify-between items-center ">
              
                {/* desktop view menu */}
                    <ul className="hidden md:flex p-4 justify-around ">
                        <li className="ml-6"><a href="/">Home</a></li>
                        <li className="ml-6"><a href="#sale">Sale</a></li>
                        <li className="ml-6"><a href="#service">Services</a></li>
                        <li className="ml-6"><a href="#about">About</a></li>
                        <li className="ml-6"><a href="#contact">Contact Us</a></li>

                    </ul>
                {/* mobile view menu */}
                    <ul className={`absolute bg-blue-900 z-20 left-0 w-full sm:flex flex-col md:hidden lg:hidden p-4 justify-center text-center transition-all duration-500 ease-in-out
                            ${open? "top-[100%] opacity-100 visible":"top-[70%] opacity-0 invisible"}
                        `}>
                        <li className="mt-6"><a href="/"  onClick={( ) => SetOpen(!open)}>Home</a></li>
                        <li className="mt-6"><a href="#sale" onClick={( ) => SetOpen(!open)}>Sale</a></li>
                        <li className="mt-6"><a href="#service" onClick={( ) => SetOpen(!open)}>Services</a></li>
                        <li className="mt-6"><a href="#about" onClick={( ) => SetOpen(!open)}>About</a></li>
                        <li className="mt-6"><a href="#contact" onClick={( ) => SetOpen(!open)}>Contact Us</a></li>

                    </ul>
                
                
            </div>
            <div className="mr-[20px] opacity-0 ">
                    <span className="mr-10">
                        Cart
                    </span>
                    <span  >
                        Log in
                    </span>
            </div>   
            <div className='menu-btn block md:hidden'>
                
                <button onClick={( ) => SetOpen(!open)}
                 className='openBtn'>{open?<CloseIcon/>:<MenuIcon/>}</button>
                

            </div>
        </nav>
    )
}

export default Nav;