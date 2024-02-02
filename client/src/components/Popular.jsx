import React from 'react'
import Apple from "../assets/Images/Products/apple.png"
import cab from "../assets/Images/Products/Cabbge.png"
import orange from "../assets/Images/Products/Orange.png"
import Green from "../assets/Images/Products/Green.png"
import plant from "../assets/Images/Products/plant.png"
import cauliflower from "../assets/Images/Products/cauliflower.png"
import corn from "../assets/Images/Products/corn.png"
import greencap from "../assets/Images/Products/greencap.png"
import greenchilli from "../assets/Images/Products/greenchilli.png"
import potato from "../assets/Images/Products/potato.png"

import Sales from './Sales'

function Popular() {
  return (
   <>
<div className="ml-6 md:ml-16 lg:m-6">
  <h1 className="text-black m-4 ml-8 text-3xl font-bold">Popular Products</h1>
</div>
<div className='lg:my-8 flex flex-col items-center lg:mr-24'>
<div className="flex flex-col lg:flex-row ml-6 md:ml-16 cursor-pointer">
  {/* Card 1 */}
 
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2 ">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={Apple} alt="" className="w-full md:w-auto" />
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
    <img src={orange} alt="" className="w-full md:w-auto" />
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
    <img src={cab} alt="" className="w-full md:w-auto" />
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
    <img src={Green} alt="" className="w-full md:w-auto" />
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
    <img src={plant} alt="" className="w-full md:w-auto" />
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
<div className="flex flex-col lg:flex-row ml-6 md:ml-16 cursor-pointer">
  {/* Card 1 */}
 
  <div className="relative border border-gray-300 hover:shadow-2xl hover:border-[#2C742F]  ml-0 hover:text-[#2C742F] md:mr-0 p-2">
    <p className='absolute top-0 left-0 bg-[#EA4B48] text-white rounded-md px-2 py-1 mt-2 ml-4 '>Sales 50%</p>
    <img src={potato} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Big Potatoes</p>
      <p className="text-black">Price: $2.99</p>
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
    <img src={corn} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Corn</p>
      <p className="text-black">Price: $2.99</p>
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
    <img src={cauliflower} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Fresh Cauliflower</p>
      <p className="text-black">Price: $2.99</p>
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
    <img src={greencap} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] mb-2">Green Capsicum</p>
      <p className="text-black">Price: $2.99</p>
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
    <img src={greenchilli} alt="" className="w-full md:w-auto" />
    <div className="">
      <p className="text-[#4D4D4D] ">Green Chili</p>
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

<Sales></Sales>
 </>
  )
}

export default Popular
