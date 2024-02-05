import React from 'react';

const Contact = () => {
     const handleClick = (event)=> {
    event.preventDefault()
    alert("Message sent!")

  }
    return (
        <div name='contact' className='flex justify-center bg-orange-50 px-[120px]'>
           
            <form className='bg-gray-200 mt-[90px]  flex flex-col gap-7 p-8  w-[380px] h-[540px] text-slate-600  mb-10 shadow-lg shadow-slate-700 rounded-2xl '>
                <h1 className='text-3xl font-medium underline-offset-4 underline  pb-4'>Get in touch</h1>
                <input placeholder='Name' className='px-6 py-2 rounded-lg'></input>
                <input placeholder='phone' className='px-6 py-2 rounded-lg'></input>
                <input placeholder='Email Address' className='px-6 py-2 rounded-lg'></input>
                <textarea rows={5} cols={4} className='rounded-xl px-6 py-2' placeholder='Message'></textarea>
                <div>
                    <button className='py-2 px-6 bg-slate-600 text-white  rounded-2xl text-[16px] font-medium hover:bg-orange-100 hover:text-slate-900' onClick={handleClick}>Send</button>
                </div>
            </form>
            
           
        </div>
    );
};

export default Contact;