import React, { useEffect, useState } from 'react'
import SinglePortfolio from './SinglePortfolio'

const PortfolioProjects = ({ categories }) => {
  return (
    <div className="">
      {categories.map((category) => (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-10 justify-items-center'>
          {category.node.projects.map((project) => (
            <div key={project.id}>
              <SinglePortfolio project={project} />
            </div>
          ))}
        </div>
      ))}
    </div>

  )
}

export default PortfolioProjects