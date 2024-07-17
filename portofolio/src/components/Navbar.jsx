import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    if (nav) {
      // Disable scrolling when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when the menu is closed
      document.body.style.overflow = 'visible';
    }

    // Cleanup function to enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [nav]);

  return (
    <div className='fixed w-full h-[40px] flex items-center justify-between'>
      <div>
        <img src={Logo} alt="logo" style={{ width: '250px' }} />
      </div>

      <ul className='hidden md:flex px-8 font-bold '>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden p-4 z-10 '>
        {!nav ? <FaBars /> : <FaTimes className='text-gray-100' />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300'}>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/dany-razzouqa/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/danirazzouqa"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto:danirazzouqa@gmail.com.com?subject=SendMail&body=Description"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://danycvnew.tiiny.site"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
