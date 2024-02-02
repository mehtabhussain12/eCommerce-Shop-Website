import React from 'react'
import img1 from '../assets/Images/Hot deals/Image.png'
import Dbanner from './Dbanner'

function Hot() {
  return (
   <>
   <div className='bg-[#F7F7F7] '>
   <div className=" lg:ml-16 md:m-12 pt-4 text-center">
  <h1 className="text-black m-4 ml-8 text-3xl font-bold">Hot Deals</h1>
</div>
<div className="flex flex-col lg:flex-row m-2 md:ml-16 cursor-pointer">
  {/* Card 1 */}
 
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2 ">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={img1} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Fresh Indian Malta</p>
      <p className="text-black">Price: $20.99</p>
      <p className="text-gray-600 flex items-center">
        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </p>
    </div>
    <div className="absolute bottom-0 right-0  cursor-pointer">
      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    </div>
  </div>
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2 ">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={img1}alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Fresh Indian Malta</p>
      <p className="text-black">Price: $20.99</p>
      <p className="text-gray-600 flex items-center">
        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </p>
    </div>
    <div className="absolute bottom-0 right-0  cursor-pointer">
      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    </div>
  </div>
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={img1} className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Chinese cabbage</p>
      <p className="text-black">Price: $12.99</p>
      <p className="text-gray-600 flex items-center">
        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </p>
    </div>
    <div className="absolute bottom-0 right-0  cursor-pointer">
      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    </div>
  </div>
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={img1} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Green Lettuce</p>
      <p className="text-black">Price: $20.99</p>
      <p className="text-gray-600 flex items-center">
        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </p>
    </div>
    <div className="absolute bottom-0 right-0  cursor-pointer">
      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    </div>
  </div>
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-8 p-2">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={img1} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Eggplant</p>
      <p className="text-black">Price: $2.99</p>
      <p className="text-gray-600 flex items-center">
        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </p>
    </div>
    <div className="absolute bottom-0 right-0  cursor-pointer">
      <span className="material-symbols-outlined text-2xl">shopping_cart</span>
    </div>
  </div>

  
</div>


   </div>
   <Dbanner></Dbanner>
   </>
  )
}

export default Hot
