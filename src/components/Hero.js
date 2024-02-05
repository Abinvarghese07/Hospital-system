import React from 'react';
import heroImage from '../assets/pexels-jonathan-meyer-668298.jpg'
import {Link} from 'react-scroll';



const Hero = () => {
    return (
        <div>
            <div  className='w-full h-[550px] font-inter'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r  from-slate-600  '></div>
                <img src={heroImage} alt='/' className=' w-full h-full object-cover'></img>
                <div className= 'relative bottom-[70%] md:absolute md:top-[35%] p-[40px]'>
                    <h2 className='text-2xl md:text-5xl font-semibold text-gray-200 leading-2 py-2'>Your Health, Our Priority</h2>
                    <p className='text-xl md:text-4xl font-medium text-gray-200  '>Nurturing Wellness, Embracing Care</p>
                    <div className='p-3'>
                        <button className='px-6 bg-slate-600 text-white py-2 rounded-2xl text-[16px] font-semibold hover:bg-orange-100 hover:text-slate-900'><Link to="demo" smooth={true} offset={50} duration={500}>Book an Appointment.</Link></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;