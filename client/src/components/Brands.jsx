import React from 'react'
import B1 from "../assets/Images/brand1.png"
import B2 from "../assets/Images/brand2.png"
import B3 from "../assets/Images/brand3.png"
import B4 from "../assets/Images/brand4.png"
import B5 from "../assets/Images/brand5.png"
import B6 from "../assets/Images/brand6.png"
import ipost from "../assets/Images/InstPost.png"
import Footer from './Footer'

function Brands() {
  return (
    <>
    
    <div className=' lg:ml-20 lg:my-8'>
        <div className='lg:flex lg:flex-row gap-x-4 flex flex-col place-items-center '>
            <div className='lg:px-14 py-6  cursor-pointer '>
                <img src={B1} alt="" />
            </div>
            <div className='lg:px-14 py-6  cursor-pointer '>
                <img src={B2} alt="" />
            </div>
            <div  className='lg:px-14 py-6  cursor-pointer '>
                <img src={B3} alt="" />
            </div>
            <div className='lg:px-14 py-6  cursor-pointer '>
                <img src={B4} alt="" />
            </div>
            <div className='lg:px-14 py-6  cursor-pointer '>
                <img src={B5} alt="" />
            </div>
            <div className='lg:px-14 py-6  cursor-pointer '>
                <img src={B6} alt="" />
            </div>
        </div>

        <div className='text-center m-8 text-3xl font-bold'>
    <h1>Follow us on Instagram</h1>
</div>
<div className='lg:ml-12 lg:flex flex-wrap gap-x-4 m-2'>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
    <div className='mb-4'>
        <img src={ipost} alt="Instagram Post" className="w-full h-auto lg:w-auto" />
    </div>
</div>

    </div>

<Footer></Footer>

    </>
  )
}

export default Brands
