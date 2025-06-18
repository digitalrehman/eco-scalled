import React from 'react'

const Banner = ({image, title}) => {
  return (
    <div className='h-[80vh] flex items-center justify-center relative w-full'>
        <img src={image} alt={title} className='w-full h-full -z-10 absolute top-0 ' />
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-white">{title}</h1>
        <button className='bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition absolute bottom-10 left-10'>Free Schedule</button>
    </div>
  )
}

export default Banner