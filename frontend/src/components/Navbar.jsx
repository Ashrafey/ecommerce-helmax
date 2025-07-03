import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (

        <div className='flex items-center justify-between py-5 font-medium '>
            <Link to='/'>
                <h1 className='group text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-wide'>
                    <span className='text-black'>Hel</span>
                    <span className='text-red-500 '>ma</span>
                    <span className='text-black inline-block duration-700 tranform transition-transform group-hover:rotate-1080 '>X</span>
                </h1>
            </Link>



            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p className="hover:text-black transition-all  duration-200  hover:scale-110">HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p className="hover:text-black transition-all  duration-200  hover:scale-110">COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className="hover:text-black transition-all  duration-200  hover:scale-110">ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className="hover:text-black transition-all  duration-200  hover:scale-110">CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={(e) => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:text-black transition-all  duration-200  hover:scale-110' alt="search" />

                <div className='group relative'>

                    <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer hover:text-black transition-all  duration-200  hover:scale-110' alt="profile" />
                    {/* dropdown */}
                    {
                        token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100'>
                                <p className='cursor-pointer hover:text-black transition-all  duration-200  hover:scale-110  hover:bg-gray-200'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black transition-all  duration-200  hover:scale-110  hover:bg-gray-200'>Orders</p>
                                <p onClick={logout} className='cursor-pointer  hover:text-black transition-all  duration-200  hover:scale-110 hover:bg-gray-200'>Logout</p>
                            </div>
                        </div>
                    }
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5hover:text-black transition-all  duration-200  hover:scale-110' alt="cart" />
                    <p className='absolute right-[-5px] bottom-[-5px]  w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:text-black transition-all  duration-200  hover:scale-110' alt="menu" />
            </div>

            {/*side bar menu for smaller screen  */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180 hover:text-black transition-colors  duration-200' src={assets.dropdown_icon} alt="dropdown" />
                        <p className='hover:text-black transition-colors  duration-200'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-black transition-colors  duration-200' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-black transition-colors  duration-200' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-black transition-colors  duration-200' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-black transition-colors  duration-200' to='/contact'>CONTACT</NavLink>

                </div>
            </div>

        </div>
    )
}

export default Navbar