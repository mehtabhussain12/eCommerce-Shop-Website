import React from 'react';
import banner from "../assets/Images/Bannar Big.png";
import bg from "../assets/Images/BG.png";
import bg1 from '../assets/Images/bann.png';
import Banner1 from './Banner1';

function Banner() {
  return (
    <>
    <div className='flex flex-col md:flex-row m-4'>

<div className='md:ml-16 mb-4 md:mb-0'>
  <img className='w-full md:w-auto' src={banner} alt="" />
</div>

<div className='mt-2 md:ml-4'>

  {/* First Image with Sale */}
  <div className="w-full md:w-[423px] h-[288px] relative mb-4 md:mb-0">
    <div className="absolute top-12 left-20 transform -translate-x-1/2 -translate-y-1/2 text-white text-center m-4">
      <p className="text-[#1A1A1A] font-semibold mt-16">SUMMER SALE</p>
      <h1 className="text-3xl font-bold text-[#1A1A1A]">75% OFF</h1>
      <p className='text-[#666666] py-4'>Only Fruit & Vegetable</p>
      <button className='text-[#00B207] font-bold text-2xl pt-2'>
        Shop Now
      </button>
    </div>
    <img className="w-full h-full object-cover" src={bg} alt="" />
  </div>

  {/* Second Image with Best Deal */}
  <div className="ml-4 relative mt-4 text-center text-white flex">
    <div className="absolute text-white mt-12 ">
      <p className="font-semibold">Best Deal</p>
      <h1 className="text-3xl font-bold ">Special Products Deal of the Month</h1>
      <button className='text-[#00B207] font-bold text-2xl pt-2'>
        Shop Now
      </button>
    </div>
    <img className="w-full h-full object-cover" src={bg1} alt="" />
  </div>
</div>
</div>



      <Banner1 />
    </>
  );
}

export default Banner;
