import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <h1 className='text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-wide'>
        <span className='text-black'>Hel</span>
        <span className='text-red-500'>ma</span>
        <span className='text-black'>X</span>
      </h1>
      <button onClick={() => setToken('')}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm transform transition-colors hover:bg-red-800'>Logout</button>
    </div>
  )
}

export default Navbar