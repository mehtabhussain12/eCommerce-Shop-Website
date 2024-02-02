import React from 'react'
import banner from '../assets/Images/Rectangle 54.png'
import banner1 from '../assets/Images/Rectangle 54 1.png'
import banner2 from '../assets/Images/Rectangle 54 2.png'
import Hot from './Hot'

function Sales() {
  return (
   <>

   <div className='lg:flex lg:flex-row lg:ml-16 lg:gap-x-6 flex flex-col m-2 md:flex md:items-center'> 
   <div className='relative  my-4'>
  <img src={banner} alt="" className="" />
  <div className="absolute top-24 lg:left-6 left-2 transform translate-x-8 -translate-y-12 text-white text-center">
    <p className="text-2xl font-semibold">Best Deals</p>
    <h1 className="text-4xl font-bold">Sale of the Month</h1>
    <button className="bg-white py-2 px-8 rounded-full text-[#00B207]  mt-4">Shop Now</button>
  </div>
</div>
<div className='relative  my-4'>
  <img src={banner1} alt="" className="" />
  <div className="absolute top-24 left-12  transform translate-x-8 -translate-y-12 text-white text-center">
    <p className="text-2xl font-semibold">85% Fat Free</p>
    <h1 className="text-4xl font-bold">Low-Fat Meat</h1>
    <p className="text-2xl font-semibold">Started at <span className='text-[#FF8A00]'>$79.99</span> </p>
    <button className="bg-white py-2 px-8 rounded-full text-[#00B207]  mt-4">Shop Now</button>
  </div>
</div>
<div className='relative  my-4'>
  <img src={banner2} alt="" className="" />
  <div className="absolute top-24 lg:left-6 left-2  transform translate-x-8 -translate-y-12 text-black text-center">
    <p className="text-2xl font-semibold">Summer Sale</p>
    <h1 className="text-4xl font-bold">100% Fresh Fruit</h1>
    <p className="text-2xl font-semibold mt-4">Up to <span className='text-[#FCC900] bg-gray-900 p-2 rounded-lg'>64% OFF    </span> </p>
    <button className="bg-white py-2 px-8 rounded-full text-[#00B207]  mt-4">Shop Now</button>
  </div>
</div>

   </div>
   <Hot></Hot>
   </>
  )
}

export default Sales
