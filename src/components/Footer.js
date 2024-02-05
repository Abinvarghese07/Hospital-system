import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {FaLinkedinIn} from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className='h-[300px] w-full p-16 flex flex-col md:flex-row gap-3 items-center justify-around'>
                <div className='flex flex-col '>
                    <h1 className='text-3xl font-bold text-slate-600 hover:text-red-500'>Healthico.</h1>
                    <p className='text-slate-600 hover:text-red-500'>Trivandrum, India 695022</p>
                </div>
                <div className='flex flex-col text-slate-600'>
                    <h1 className='text-2xl font-semibold hover:text-red-500'>Contact</h1>
                    <p className='hover:text-red-500'>Ph-9123412222</p>
                    <p className='hover:text-red-500'>Email: relations@healthico.org</p>
                </div>
                <div className='flex gap-4 items-center text-slate-600 text-3xl'>
                    <FaFacebookF className='hover:-translate-y-2 hover:text-red-500'/>
                    <FaInstagram  className='hover:-translate-y-2 hover:text-red-500'/>
                    <FaXTwitter  className='hover:-translate-y-2 hover:text-red-500'/>
                    <FaLinkedinIn  className='hover:-translate-y-2 hover:text-red-500'/>
                </div>
                <div>
                    <p className='text-slate-700 hover:text-red-500'>&copy;abinsvarghese18@gmail.com</p>
                </div>

                    

            </div>
        </div>
    );
};

export default Footer;