import React from 'react';
import { useState } from 'react';

const Booking = () => {
     const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (event)=> {
    event.preventDefault()
    alert("Booked")

  }
    return (
        <div name='demo' className='bg-orange-50 flex justify-center p-[120px]'>
            <form className='bg-gray-200  flex flex-col p-8 shadow-lg shadow-slate-700 w-[380px] h-[440px] text-slate-600 rounded-xl'>
                <h1 className='text-3xl font-medium underline-offset-4 underline  pb-4'>Book a Demo</h1>
                <label className='text-start p-2'>Name</label>
                <input placeholder='Enter your Name' type='text' className='px-6 py-1 rounded-lg'></input>
                  <label className='text-start p-2'>Phone</label>
                <input placeholder='Enter your Phone number' type='phone' className='px-6 py-1 rounded-lg'></input>
                <label className='text-start p-2'>Email</label>
                <input placeholder='Enter your email address' type='mail' className='px-6 py-1 rounded-lg'></input>
                <select id="mySelect" value={selectedOption} onChange={handleSelectChange} className='p-2 mt-6 rounded-xl'>
                    <option value="">Select a Specialaity</option>
                    <option value="option1">ENT</option>
                    <option value="option2">Pediatrics</option>
                    <option value="option3">Cardiology</option>
                    <option value="option4">Dental</option>
                    <option value="option5">Urology</option>
                    <option value="option6">Dermatology</option>
                    <option value="option7">Physiotherapy</option>
                    
                </select>
                <div className='p-3'>
                    <button className=' py-2 px-6 bg-slate-600 text-white  rounded-2xl text-[16px] font-medium hover:bg-orange-100 hover:text-slate-900' type='submit' onClick={handleClick}>Book Now</button>
                </div>


            </form>
            
        </div>
    );
};

export default Booking;