import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { IconName } from "react-icons/fa";
// import { IconName } from "react-icons/fa";


const BottomFooter = () => {
  return (
    <div className='md:flex bg-black md:px-10 p-6 px-5 w-full'>
        <div className='md:flex-row w-full'>
            <h2 className='text-white font-normal text-sm text-center md:text-left md:text-base cursor-default'>Designed by Jeffery-Ozoekwe-Awagu</h2>
        </div>
        <div className='flex w-full md:flex-row-reverse py-6 md:py-0 justify-center md:justify-start'>
            <div className='flex flex-row gap-x-8 pb-2'>
            <Link href='https://github.com/Jeffawe'><a><FaGithub size={30} color='white' className='cursor-pointer' /></a></Link>
                <Link href='https://www.instagram.com/jeff_awagu/'><a><FaInstagram size={30} color='white' className='cursor-pointer'/></a></Link>
                <Link href='https://www.linkedin.com/in/jeffery-ozoekwe-awagu/'><a><FaLinkedin size={30} color='white' className='cursor-pointer'/></a></Link>
            </div>
        </div>
    </div>
  )
}

export default BottomFooter