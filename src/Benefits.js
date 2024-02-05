import React from 'react';
import {LuBed} from 'react-icons/lu';
import {FaStethoscope} from 'react-icons/fa6';
import {LiaBrainSolid} from 'react-icons/lia';
import {LuSiren} from 'react-icons/lu';
import {LuMicroscope} from 'react-icons/lu';
import {MdAddchart} from 'react-icons/md';


const Benefits = () => {
    return (
        <div className='bg-orange-50'>
            <div className='font-inter flex px-[115px] py-14'>
                <h2 className='text-4xl font-bold text-gray-800 underline-offset-4 underline'>Patient Care & Services</h2>
                
            </div>
            <div className='grid grid-cols-3 px-[140px] font-inter gap-11'>
                    <div className='flex gap-12'>
                        <LuBed  size={60} className='text-red-600  '/>
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Inpatient Services</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                    <div className='flex gap-12'>
                        <FaStethoscope size={60} className='text-red-600 '/> 
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Outpatient Services</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                    <div className='flex gap-12'>
                        <LiaBrainSolid size={60} className='text-red-600  '/>
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Specialty Clinics</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                   <div className='flex gap-12'>
                        <LuSiren size={60} className='text-red-600  '/>
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Emergency Services</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                      <div className='flex gap-12'>
                        <LuMicroscope size={60} className='text-red-600  '/>
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Lab Services</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                     <div className='flex gap-12'>
                        <MdAddchart size={60} className='text-red-600  '/>
                        <div className='flex flex-col text-start w-[300px]'>
                            <h3 className='text-[18px] text-slate-600 font-semibold'>Other Services</h3>
                            <p className='text-[16px] text-slate-600'>Your health is your most important asset. You should entrust it only to the best professionals.</p>
                        </div>
                    </div>
                     

                </div>
        </div>
    );
};

export default Benefits;