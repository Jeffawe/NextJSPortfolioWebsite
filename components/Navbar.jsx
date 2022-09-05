import React, { useState } from 'react'
import { FcMenu } from "react-icons/fc";
import Link from 'next/link'

const Navbar = ({ OnButtonPress, HomePage }) => {
    const [OpenMenu, setOpenMenu] = useState(false)

    return (
        <div className='w-full bg-black md:px-10 p-6 px-5'>
            <div className='flex'>
                <div className='flex-row w-full'>
                    <Link href='./'><a><p className='text-white text-bold text-base md:text-xl cursor-pointer'>Jeffery Ozoekwe-Awagu</p></a></Link>
                </div>
                <div className='hidden md:flex md:flex-row-reverse w-full'>
                    {HomePage &&
                        <div className='flex flex-row gap-x-10 font-normal'>
                            <Link href='#home'>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Home</p>
                            </Link>
                            <Link href={{ pathname: "/projects" }}>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Projects</p>
                            </Link>
                            <Link href='#aboutme'>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>About</p>
                            </Link>
                            <Link href='#contact'>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Contact</p>
                            </Link>

                        </div>
                    }

                    {!HomePage &&
                        <div className='flex flex-row gap-x-10 font-normal'>
                            <Link href='/'>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Home</p>
                            </Link>
                            <Link href={{ pathname: "/projects" }}>
                                <p className='transition duration-500 ease-in-out text-white text-lg cursor-pointer hover:text-red-500 hover:-translate-y-1'>Projects</p>
                            </Link>

                        </div>
                    }
                </div>

                <div className='flex flex-row-reverse md:hidden w-full pt-1'>
                    <FcMenu size={35} onClick={OnButtonPress} />
                </div>
            </div>
        </div>
    )
}

export default Navbar