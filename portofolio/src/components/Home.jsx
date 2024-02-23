import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import myPic from '../assets/Pic.png'; // Import your image file

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-slate-100'>
      {/* Container */}
      <div className='container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-center items-center h-full pt-16'>
        {/* Content */}
        <div className='text-center lg:text-left lg:w-1/2'>
          <div className="mt-12 md:mt-0"> {/* Add margin-top for small devices */}
            <p className=''>Hi, my name is</p>
            <h1 className='text-2xl sm:text-4xl font-bold'>Dany Razzoqa</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='py-4 max-w-[540px]'>
              I’m a full-stack developer with a passion for crafting responsive websites. 
              I specialize in creating user-friendly and visually appealing online experiences that adapt seamlessly to all devices.
            </p>
            <div className="text-center lg:text-left">
              <button className='group border-2 px-6 py-3 my-2 inline-flex items-center bg-gray-300 hover:border-gray-300 lg:justify-start'>
                View Projects
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className='lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
          <img src={myPic} alt='Dany Razzoqa' className='rounded-full md:w-[80%]  ' />
        </div>
      </div>
      <div className='container mx-auto border-b-2 py-6'></div>
    </div>
  );
};

export default Home;
