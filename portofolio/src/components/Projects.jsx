import React, { useState } from 'react';
import Project1 from '../assets/project1.gif';

function ProjectsPage() {
  const [gifPlaying, setGifPlaying] = useState(true);

  const toggleGif = () => {
    setGifPlaying(!gifPlaying);
  };

  return (
    <div name="projects" className="full h-full mx-auto py-8 bg-slate-100">
      <div className="w-full md:w-[80%] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Projects</h1>
        <div className="flex flex-col md:flex-row mb-8 lg:max-w-[80%] mx-auto space-x-8 ">
          <div className="md:w-1/2 bg-black p-2 rounded-md shadow-lg shadow-black]">
            <img
              src={Project1}
              alt="Karam Gallery"
              className="w-full h-auto rounded-lg mb-4 md:mb-0"
              onClick={toggleGif}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="md:w-1/2 md:pl-4 text-center md:text-left">
            <h2 className="text-xl font-bold my-8 text-center ">Karam Gallery</h2>
            <p className="text-gray-700 mx-auto text-center">Karam Gallery is an online platform dedicated to showcasing captivating photography. Explore curated galleries featuring stunning images, browse a selection of prints available for purchase, and delve into insightful blog posts. Experience the art of visual storytelling with Karam Gallery.</p>
            <div className="font-bold my-4 text-center">Note:Backend needs 1-2 minutes to load & Admin user will allow you to Add/Delete  Images,Blogs,Prints.</div>
            <div className="my-8 text-center mx-auto">
              <a href="https://karamgallery.netlify.app/" className="text-white  bg-black mr-4 p-2 rounded-md" target="_blank" rel="noopener noreferrer">View Site</a>
              <a href="https://github.com/danirazzouqa/Photography_Reactjs" className="text-white  bg-black mr-4 p-2 rounded-md " target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto border-b-2 py-6'></div>
    </div>
  );
}

export default ProjectsPage;
