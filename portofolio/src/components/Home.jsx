import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-slate-100'>
      {/* Container */}
      <div className='max-w-[1366px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className=''>Hi, my name is</p>
        <h1 className='text-2xl sm:text-4xl font-bold ]'>
          Dany Razzoqa
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className=' py-4 max-w-[540px]'>
          I’m a full-stack developer with a passion for crafting responsive websites. 
          I specialize in creating user-friendly and visually appealing online experiences that adapt seamlessly to all devices.
        </p>
        <div>
          <button className=' group border-2  px-6 py-3 my-2 flex items-center bg-gray-300 hover:border-gray-300'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;