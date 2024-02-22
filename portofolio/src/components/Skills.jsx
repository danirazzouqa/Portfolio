import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-slate-100'>
      {/* Container */}
      <div className='container mx-auto px-4 py-8'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-black '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center'>
              <SkillCard img={HTML} name="HTML" />
              <SkillCard img={CSS} name="CSS" />
              <SkillCard img={ReactImg} name="React" />
              <SkillCard img={GitHub} name="GitHub" />
              <SkillCard img={Node} name="Node JS" />
              <SkillCard img={Mongo} name="Mongo DB" />
              <SkillCard img={Tailwind} name="Tailwind" />
          </div>
      </div>
    </div>
  );
};

const SkillCard = ({ img, name }) => (
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
    <img className='w-20 mx-auto' src={img} alt={name + " icon"} />
    <p className='my-4'>{name}</p>
  </div>
);

export default Skills;
