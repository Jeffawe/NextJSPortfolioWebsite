import React from 'react'
import Image from 'next/image'

const SinglePortfolio = ({ project }) => {
    return (
        <div className='col-span-1'>
            <div className='text-center relative'>
                <div className=''>
                    <img src={project.featuredImage.url} alt={project.name} className='w-full h-60 object-fill' />
                </div>
                <div className='pt-3 md:pt-5 px-5'>
                    <h1 className='font-bold md:text-xl text-lg'>{project.name}</h1>
                    <p className='font-light md:text-lg text-base pt-2'>{project.description}</p>
                </div>
                <div className='px-5 flex py-5 md:py-8 gap-3 flex-wrap'>
                    {project.tags.map((tag) => (
                        <div className='md:flex-row' key={tag.tag}>
                            <p className='bg-black opacity-70 text-white p-1 text-xs md:text-base px-3 rounded-full'>#{tag.tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SinglePortfolio