import React from 'react'
import image from "../assets/images/background.png";
import ScheduleConsultation from '../components/ScheduleConsultation';
const Contact = () => {
  return (
    <div>
      <div className='h-[80vh] flex flex-col items-center justify-center relative w-full'>
        <img src={image} alt="about image" className='w-full h-full -z-10 absolute top-0 object-cover' />
        <h1 className="text-white text-center text-2xl font-['Roboto'] font-bold mt-5">Get In Touch</h1>
        <h1 className=' lg:text-7xl md:text-5xl font-["Roboto"] sm:text-4xl text-3xl font-bold text-white'>
          Ecomscaled
        </h1>
      </div>
      <div className='md:w-1/2 w-11/12 px-3 py-5 rounded-2xl -mt-14 mx-auto shadow-xl bg-white text-black text-center'>
        <h1 className="font-bold mb-2 font-['Roboto'] text-2xl">Let’s Scale Your Brand.</h1>
        <p className='text-gray-900 text-md'>We’d love to hear about your product and your goals. Whether you're starting <br /> fresh or scaling an existing store, we’re here to support you with <br /> the tools and strategies that actually work.</p>
      </div>
      <ScheduleConsultation />

      <div className="w-full h-[60vh] rounded-lg overflow-hidden shadow-xl">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24192.119871147674!2d-74.0060159!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ1LjgiTiA3NMKwMDAnMjIuNiJX!5e0!3m2!1sen!2sus!4v1634231120077!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full border-0"
        ></iframe>
      </div>

    </div>
  )
}

export default Contact