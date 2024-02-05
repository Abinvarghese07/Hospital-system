import React from 'react';
import aboutImage from '../assets/pexels-jonathan-borba-3279209.jpg'
import {BsPersonCheckFill} from 'react-icons/bs';
import {MdDateRange} from 'react-icons/md';
import {FaCheck} from 'react-icons/fa';
import {FaRegSmileBeam} from 'react-icons/fa';




const About = () => {
    return (
        <div name='features' className='flex gap-6 p-20 bg-orange-50'>
            <div className='font-inter text-slate-800 flex  w-full h-full flex-col '>
                <h2 className='text-[18px] md:text-[70px] text-gray-700 font-semibold '>Trusted by Thousands!</h2>
                <p className=' md:text-4xl font-semibold text-gray-700 p-1 tracking-tight'>World Class Infrastructure and Facilities</p>
                <p className='text-xl md:text-5xl font-semibold text-gray-700 p-3 '>Heart warming patient stories</p>
                <div className='grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-8 p-5 mt-3 md:bg-neutral-100 rounded-2xl '>
                    <div className='flex flex-col items-center p-7 shadow-xl shadow-slate-700 rounded-lg'>
                        <BsPersonCheckFill size={20} className='text-slate-700'/>
                        <p className='font-bold text-slate-600 '>20000+</p>
                        <p className='text-slate-600 text-xs md:text-lg'>Patients</p>
                    </div>
                    <div className='flex flex-col items-center p-7 shadow-xl shadow-slate-700 rounded-lg'>
                        <FaCheck size={20} className='text-slate-700' />
                        <p className='font-bold text-slate-600 '>200+</p>
                        <p className='text-slate-600 text-xs md:text-lg'>Doctors</p>
                    </div>
                     <div className='flex flex-col items-center p-7 shadow-xl shadow-slate-700 rounded-lg '>
                        <MdDateRange size={20}/>
                        <p className='font-bold text-slate-600 '>10000+</p>
                        <p  className='text-slate-600 text-xs md:text-lg'>Sessions</p>
                    </div>
                     <div className='flex flex-col items-center p-7 shadow-xl shadow-slate-700 rounded-lg'>
                        <FaRegSmileBeam size={20}/>
                        <p className='font-bold text-slate-600 '>9.6/10</p>
                        <p className='text-slate-600 text-xs md:text-lg'>Avg.Rating</p>
                    </div>
                </div>
            </div>
            <div className='w-[800px] h-full shadow-xl shadow-slate-800 mt-11 hidden md:flex'>
                <img src={aboutImage} alt='/' className='rounded'></img>
            </div>
            
        </div>
    );
};

export default About;