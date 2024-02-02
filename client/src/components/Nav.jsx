import React from 'react';
import Banner from './Banner';

function Nav() {
  return (
    <>
      {/* Navigation Bar */}
      <div className='flex flex-col md:flex-row bg-[#333333] h-[60px] mt-4 justify-between items-center'>
        <ul className='flex text-[#999999] py-4 md:ml-24 gap-x-3 cursor-pointer '>
          <li className='text-white'>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='text-white lg:flex hidden lg:ml-4 md:mr-28 lg:p-4 lg:gap-x-2'>
          <span className="material-symbols-outlined">phone_in_talk</span>
          <p>(219) 555-0114</p>
        </button>
      </div>
      
   
      <Banner />
    </>
  );
}

export default Nav;
