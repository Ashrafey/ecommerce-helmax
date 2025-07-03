import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
                  <Link to={'/'} >
                      <h1 className='text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-wide mb-5'>
                        <span className='text-black'>Hel</span><span className='text-red-500'>ma</span><span className='text-black'>X</span>
                    </h1>
                  </Link>
                <p className='w-full md:w-2/3 text-gray-600'>
                    HelmaX is your ultimate destination for premium-quality helmets designed for every rider — men, women, and kids alike. Built with safety, comfort, and style in mind, we offer a wide range of certified full-face, modular, open-face, and off-road helmets tailored to your riding needs
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-324-7869</li>
                        <li>contact@HelmaX.com</li>      
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2024 @HelmaX.com. All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer