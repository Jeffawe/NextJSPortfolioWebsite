import React from 'react'
import Link from 'next/link'
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className='items-center md:p-20 p-10 py-20 backgroundImage overflow-div' id='home'>
      <div className='w-full md:p-10 p-0'>
        <h1 className='text-white font-medium text-2xl md:text-5xl text-center px-5 md:px-8'>Web and Game Developer</h1>
        <div className='text-center py-5'>
        <Link href='https://docs.google.com/document/d/1T2NTzUUpIvl4uYU_Jm7UwO4CjwtJ33WbbbtslTcT4Rc/edit?usp=sharing'>
            <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-red-500 text-xs sm:text-sm md:text-base lg:text-base font-normal rounded-full text-white px-8 py-3 cursor-pointer'>
              <BsFillPlayFill size={30} className='inline-block pb-0.5'/>  Resume
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home