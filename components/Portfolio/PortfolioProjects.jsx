import React, { useEffect, useState } from 'react'
import SinglePortfolio from './SinglePortfolio'

const PortfolioProjects = ({ categories }) => {
  return (
    <div className='py-1 md:py-3 justify-center bg-black'>
      {categories.map((category) => (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-5'>
          {category.node.projects.map((project) => (
            <div className='bg-white rounded-2xl' key={project.name}>
              <a href={project.link}><SinglePortfolio project={project} /></a>
            </div>
          ))}
        </div>
      ))}
    </div>

  )
}

export default PortfolioProjects