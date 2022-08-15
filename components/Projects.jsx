import React from 'react'
import Link from 'next/link'
import { BsFillPlayFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className='bg-white h-96 backgroundImageProjects relative' id='projects'>
      <div className='absolute inset-0 top-1/2'>
        <div className='text-center'>
          <Link href='/projects'>
            <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-red-500 text-xs sm:text-sm md:text-base lg:text-lg font-normal rounded-full text-white px-8 py-3 cursor-pointer'>
              <BsFillPlayFill size={30} className='inline-block pb-0.5'/>  Check Out my Projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects