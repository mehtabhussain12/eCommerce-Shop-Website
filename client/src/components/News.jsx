import React from 'react'
import news from "../assets/Images/news.png"
import Testi from './Testi'


export default function News() {
  return (
<>
<div className='lg:flex lg:flex-row flex flex-col  lg:mr-12'>
  <div className='flex flex-col md:flex-row ml-2 md:ml-24 mt-12 m-2'>
    {/* Latest News Section */}
    <div className="relative p-4 rounded-md">
      <img src={news} alt="" className="w-full h-auto" />

      {/* Date at the bottom left */}
      <div className='bg-white w-[58px] h-58px absolute bottom-[10.5rem] left-[2.5rem] p-4'>
        <p className="text-gray-900 font-semibold ">18 <br /> NOV</p>
      </div>

      <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2">
        <span className="material-symbols-outlined">sell</span>
        <p>Admins</p>
        <span className="material-symbols-outlined">account_circle</span>
        <p>Admin</p>
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <p>10 Comments</p>
      </div>
      <p className='text-sm mt-2'>
        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
      </p>
      <button className="bg-[#00B207] py-1 px-4 rounded-full text-white mt-2">Read More</button>
    </div>
  </div>

  <div className='flex flex-col md:flex-row ml-2 mt-12 m-2'>
    {/* Latest News Section */}
    <div className="relative p-4 rounded-md">
      <img src={news} alt="" className="w-full h-auto" />

      {/* Date at the bottom left */}
      <div className='bg-white w-[58px] h-58px absolute bottom-[10.5rem] left-[2.5rem] p-4'>
        <p className="text-gray-900 font-semibold ">18 <br /> NOV</p>
      </div>

      <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2">
        <span className="material-symbols-outlined">sell</span>
        <p>Admins</p>
        <span className="material-symbols-outlined">account_circle</span>
        <p>Admin</p>
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <p>10 Comments</p>
      </div>
      <p className='text-sm mt-2'>
        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
      </p>
      <button className="bg-[#00B207] py-1 px-4 rounded-full text-white mt-2">Read More</button>
    </div>
  </div>

  <div className='flex flex-col md:flex-row ml-2 mt-12 m-2'>
    {/* Latest News Section */}
    <div className="relative p-4 rounded-md">
      <img src={news} alt="" className="w-full h-auto" />

      {/* Date at the bottom left */}
      <div className='bg-white w-[58px] h-58px absolute bottom-[10.5rem] left-[2.5rem] p-4'>
        <p className="text-gray-900 font-semibold ">18 <br /> NOV</p>
      </div>

      <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2">
        <span className="material-symbols-outlined">sell</span>
        <p>Admins</p>
        <span className="material-symbols-outlined">account_circle</span>
        <p>Admin</p>
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <p>10 Comments</p>
      </div>
      <p className='text-sm mt-2'>
        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
      </p>
      <button className="bg-[#00B207] py-1 px-4 rounded-full text-white mt-2">Read More</button>
    </div>
  </div>
</div>


<Testi></Testi>
</>
  )
}
