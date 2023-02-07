import React from 'react'
import Link from 'next/link'

const About = ({details}) => {
  return (
    <div className='bg-black w-screen' id='aboutme'>
      <div className='md:p-10 p-8 pt-12'>
        <h1 className='text-white text-bold text-xl md:text-2xl text-center'>About Me</h1>
      </div>
      <div className='pb-20'>
        <p className='text-white text-bold text-base md:text-xl text-center px-8 md:px-10 lg:px-20'>
          {details.aboutMe}
          <a href='https://www.instagram.com/jeff_awagu/'><br />Connect with me @jeff_awagu on instagram or </a><Link href="#contact"><a>send me a mail at ozoekweawagu@gmail.com</a></Link>.
        </p>
      </div>
    </div>
  )
}

export default About