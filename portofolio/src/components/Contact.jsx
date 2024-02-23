import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-100 flex justify-center items-center text-center p-4'>
        <form method='POST' action="https://getform.io/f/f5704890-6b1d-49bc-98f7-757e1ee9de12" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  '>Contact</p>
                <p className=' py-4'> Submit the form below or shoot me an email - danirazzouqa@gmail.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2 bg-gray-300 hover:border-gray-000 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>  
  )
}

export default Contact