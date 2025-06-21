import React from 'react'

const Banner = ({ image, title }) => {
  return (
    <div className='h-[80vh] font-["Poppins"] flex items-center justify-center relative w-full'>
      <img src={image} alt={title} className='w-full h-full -z-10 absolute top-0 ' />
      <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-white">{title}</h1>
      <button className='bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition absolute bottom-10 left-10'>Free Schedule</button>
    </div>
  )
}


const Benefit = ({ main, data }) => {
  return (
    <div className="max-w-6xl mx-auto mt-16 text-center">
      <div className='md:w-[60%] mx-auto'>
        <h3 className="text-lg md:text-3xl font-['Roboto'] text-center font-black mb-10">
          {main}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
        {
          data.map((item, index) => (
            <div>
              <h4 className='font-bold text-lg mb-2'>{item.title}</h4>
              <p className="text-sm">
                {item.description}
              </p>
            </div>
          ))
        }
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">
          Ready To Launch
        </button>
      </div>
    </div>
  )
}



const ShopAbout = ({ image, data }) => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-gray-400 h-60 md:h-80 w-2/3  mx-auto rounded-xl"></div>
      <div className='text-black'>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.title}</h2>
        <p className="mb-4">{data.description1}</p>
        <p>{data.description2}</p>
      </div>
    </div>
  )
}
export { Benefit, Banner, ShopAbout }