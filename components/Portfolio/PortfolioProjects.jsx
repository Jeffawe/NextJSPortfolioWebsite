import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SinglePortfolio from './SinglePortfolio'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  }
};

const PortfolioProjects = ({categories}) => {
  return (
    <div className='md:px-10 p-6 px-5 pb-20 justify-center bg-black'>
      {categories.map((category) => (
        <Carousel key={category.node.name}
          additionalTransfrom={0}
          focusOnSelect={false}
          swipeable
          draggable
          responsive={responsive}
          arrows
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          autoplay
          autoPlaySpeed={3000}
          rewind={false}
          rewindWithAnimation={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          className='rounded-2xl container'
          transitionDuration={1000}
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carouselItem"
          rtl={false}
          shouldResetAutoplay
          partialVisible={false}
        >
          {category.node.projects.map((project) => (
            <div className='py-8' key={project.name}>
              <a href={project.link}><SinglePortfolio project={project}/></a>
            </div>
          ))}

        </Carousel>
      ))}
    </div>
  )
}

export default PortfolioProjects