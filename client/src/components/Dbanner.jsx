import React from 'react'
import banner from "../assets/Images/Products/Discount Bannar.png"
import img1 from '../assets/Images/Hot deals/Image.png'
import News from './News'

function Dbanner() {
  return (
    <>
    <div className='lg:flex hidden ml-24 mt-12 m-2'>
        <div className=' w-[1320px] h-[358px] relative'>
            <img src={banner} alt="" />
            <div className='absolute top-24 lg:left-[44.5rem] left-2 transform translate-x-8 -translate-y-12 text-white'>
                <p>SUMMER SALE</p>
                <h1 className='text-6xl font-semibold'> <span className='text-[#FF8A00]'>37% OFF</span> OFF</h1>
                <p>Free on all your order, Free Shipping and  30 days <br /> money-back guarantee</p>
                <button className="bg-[#00B207] py-2 px-8 rounded-full text-white  mt-4  ml-24">Shop Now</button>
            </div>
        </div>
    </div>
    <div>
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

    <News></News>
    </>
  )
}

export default Dbanner
