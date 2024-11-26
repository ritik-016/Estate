import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='text-gray-400 flex flex-col gap-2'>
                    <a href="#header" className='hover:text-white'>Home</a>
                    <a href="#about" className='hover:text-white'>About Us</a>
                    <a href="#contact" className='hover:text-white'>Contact Us</a>
                    <a href="#" className='hover:text-white'>Privacy policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2'>
                    <input className='rounded p-2 bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' type="text" placeholder='Enter your email'/>
                    <button className='bg-blue-500 px-4 py-2 rounded text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 © Ritik. All Right Reserved.
        </div>
    </div>
  )
}

export default footer