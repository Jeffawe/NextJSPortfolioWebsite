import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const MenuBarAndroid = ({ OnExit, HomePage }) => {
  return (
    <div className='md:hidden grid grid-cols-9 w-3/4 bg-black h-96 absolute z-40 rounded-r-lg '>
      <div className='p-10 flex flex-col col-span-7'>
        {HomePage &&
          <div className='flex-col gap-y-10 flex divide-y-2'>
            <p className='hidden transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Dummy Line</p>
            <Link href='#home'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Home</p></a></Link>
            <Link href='/projects'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Projects</p></a></Link>
            <Link href='#aboutme'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>About</p></a></Link>
            <Link href='#contact'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Contact</p></a></Link>
          </div>
        }

        {!HomePage &&
          <div className='flex-col h-full gap-y-10 flex divide-y-2'>
            <p className='hidden transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Dummy Line</p>
            <Link href='/'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Home</p></a></Link>
            <Link href='/projects'><a><p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Projects</p></a></Link>
          </div>
        }

        <div className='flex flex-row gap-x-5 pt-8'>
          <Link href='https://github.com/Jeffawe'><a><FaGithub size={30} color='white' className='cursor-pointer' /></a></Link>
          <Link href='https://www.instagram.com/jeff_awagu/'><a><FaInstagram size={30} color='white' className='cursor-pointer' /></a></Link>
          <Link href='https://www.linkedin.com/in/jeffery-ozoekwe-awagu/'><a><FaLinkedin size={30} color='white' className='cursor-pointer' /></a></Link>
        </div>
      </div>
      <div className='col-end-10 col-span-2 p-3'>
        <AiOutlineClose size={30} onClick={OnExit} color='white' />
      </div>
    </div>
  )
}

export default MenuBarAndroid