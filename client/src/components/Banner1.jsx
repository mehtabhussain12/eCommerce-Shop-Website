import React from 'react'
import Cata from './Cata'
function Banner1() {
  return (
    <>
<div className=' flex-col ml-12  lg:flex-row lg:ml-20 lg:w-[1320px] lg:h-[128px] lg:flex lg:items-center lg:justify-between lg:shadow-sm'>
    <div className='lg:flex lg:gap-x-4 flex gap-x-4 p-2'>
        <span className="material-symbols-outlined mt-2 text-4xl text-[#00B207]">
            local_shipping
        </span>
        <div className='flex flex-col'>
            <h1 className='font-bold font-poppins'>Free Shipping</h1>
            <p className='text-[#999999]'>Free shipping on all orders</p>
        </div>
    </div>
    <div className='lg:flex lg:gap-x-4 flex gap-x-4 p-2'>
    <span class="material-symbols-outlined text-4xl text-[#00B207]">
headset_mic
</span>
        <div className='flex flex-col'>
            <h1 className='font-bold font-poppins'>Customer Support 24/7</h1>
            <p className='text-[#999999]'>Instant access to Support</p>
        </div>
    </div>
    <div className='flg:flex lg:gap-x-4 flex gap-x-4 p-2'>
    <span class="material-symbols-outlined text-4xl text-[#00B207]">
local_mall
</span>
        <div className='flex flex-col'>
            <h1 className='font-bold font-poppins'>100% Secure Payment</h1>
            <p className='text-[#999999]'>We ensure your money is save</p>
        </div>
    </div>
    <div className='lg:flex lg:gap-x-4 flex gap-x-4 p-2'>
    <span class="material-symbols-outlined text-4xl text-[#00B207]">
attach_money
</span>
        <div className='flex flex-col'>
            <h1 className='font-bold font-poppins'>Money-Back Guarantee</h1>
            <p className='text-[#999999]'>30 Days Money-Back Guarantee</p>
        </div>
    </div>
</div>
<Cata></Cata>

    </>
  )
}

export default Banner1
