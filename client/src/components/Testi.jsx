import React from 'react'
import avtar from "../assets/Images/avatar.png"
import Brands from './Brands'
function Testi() {
  return (
    <>
   <div className='bg-[#F7F7F7]'>
      <div className="lg:ml-16 md:m-12 pt-4">
        <h1 className="text-black m-4 ml-8 text-3xl font-bold">Client Testimonials</h1>
      </div>
      <div className='lg:flex flex-wrap lg:ml-16'>
        <div className="bg-white p-8 rounded-md shadow-md lg:w-[424px] md:w-full mx-2 mb-4">
          <p className="text-gray-600 mb-4">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum,
            bibendum cursus velit sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center mt-14">
            <div className="flex-shrink-0">
              <img src={avtar} alt="Client Avatar" className="w-10 h-10 rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Robert Fox</div>
              <div className="text-sm text-gray-500">Customer</div>
            </div>
          </div>
        </div>


        <div className="bg-white p-8 rounded-md shadow-md lg:w-[424px] md:w-full mx-2 mb-4">
          <p className="text-gray-600 mb-4">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum,
            bibendum cursus velit sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center mt-14">
            <div className="flex-shrink-0">
              <img src={avtar} alt="Client Avatar" className="w-10 h-10 rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Robert Fox</div>
              <div className="text-sm text-gray-500">Customer</div>
            </div>
          </div>
        </div>


        <div className="bg-white p-8 rounded-md shadow-md lg:w-[424px] md:w-full mx-2 mb-4">
          <p className="text-gray-600 mb-4">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum,
            bibendum cursus velit sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center mt-14">
            <div className="flex-shrink-0">
              <img src={avtar} alt="Client Avatar" className="w-10 h-10 rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Robert Fox</div>
              <div className="text-sm text-gray-500">Customer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Brands></Brands>
    </>
  )
}

export default Testi
