import React from 'react';
import {Link} from 'react-scroll';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseCircleOutline} from 'react-icons/io5';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false);

    const toggleNav = () => {
    setIsOpen (!isOpen);
    };

    return (
        <div className='bg-orange-50 p-4'>
            <nav className='font-inter flex justify-around items-center '>
                <h1 className='text-2xl font-bold text-gray-700'>Healthico.</h1>
                <ul className=' hidden md:flex  gap-6'>
                    
                     <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4  hover:decoration-red-500'><Link  to="features"  smooth={true} offset={50} duration={500} > Features</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4  hover:decoration-red-500'><Link to="benefits" smooth={true} offset={50} duration={500}>Benefits</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4  hover:decoration-red-500'><Link  to="demo"  smooth={true} offset={50} duration={500} >Demo</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4  hover:decoration-red-500'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>


                </ul>
                 <div className='md:hidden text-slate-700 text-2xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
                </div>

            </nav>
            <ul className={!isOpen ? 'hidden' : ' bg-slate-300 w-full p-8 font-body text-center'}>
                
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link  to="features"  smooth={true} offset={50} duration={500} > Features</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link to="benefits" smooth={true} offset={50} duration={500}>Benefits</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link  to="demo"  smooth={true} offset={50} duration={500} >Demo</Link></li>
                    <li className='text-xl text-gray-700 hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>

            </ul>
            
        </div>
    );
};

export default Navbar;