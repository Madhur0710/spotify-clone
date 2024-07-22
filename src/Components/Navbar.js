import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
    <div className='w-full flex items-center justify-between font-semibold'>
        <div className='flex items-center gap-2'>
         <img onClick={() => navigate(-1)}className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_left} alt='' />
         <img onClick={() => navigate(1)}className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_right} alt='' />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black px-4 py-1 rounded-2xl text-[15px] hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl cursor-pointer text-[15px]'>Install App</p>
          <p className='bg-purple-500 rounded-full text-black w-7 h-7 flex items-center justify-center cursor-pointer'>G</p>
        </div>
   </div>
   <div className='flex items-center gap-2 mt-4'>
     <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
     <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
     <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
   </div>

    </>
)
}
 
export default Navbar