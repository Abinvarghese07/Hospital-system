import React from 'react';

const Testimonials = () => {


        const str = "The treatment of this hospital was very good. The nursing staff and doctor gave nice treatment, caring and helping. Thanks for all the care and help";
        const slicedStr = str.slice(0,120) + "..."

    return (
        <div className='bg-orange-50 h-full w-full'>
            <div className='font-inter '>
                <h2 className='text-4xl font-semibold underline underline-offset-4'>Our Testimonials</h2>
                <p className='text-3xl font-medium p-3'>What our Patients say</p>
                <div className='flex flex-col  md:grid md:grid-cols-4 p-10 md:px-[120px] items-center md:ml-[100px] gap-7'>
                    <div className='h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Andrews Thomas</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                    </div>
                    <div className='h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Akshaya Chithra</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                <div className='h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Kevin George</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                <div className='hidden md:flex md:flex-col  h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Joseph Mathew</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                 <div className='hidden md:flex md:flex-col md: h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Euseph Mathew</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                 <div className=' hidden md:flex md:flex-col h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>ALbert Mathew</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                 <div className='hidden md:flex md:flex-col h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Adhitya Andrews</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                 <div className=' hidden md:flex md:flex-col h-[200px] w-[200px] bg-gray-200 p-4 rounded-xl shadow-2xl shadow-slate-600'>
                    <h1 className='text-gray-700 text-xl'>Akhil Varghese</h1>
                    <p className='text-start text-[14px] text-gray-700 p-2'>{slicedStr}</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;