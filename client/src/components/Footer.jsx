import React from 'react'
import icon1 from"../assets/Images/facebook 1.png"
import icon2 from"../assets/Images/Social Media.png"
import icon3 from"../assets/Images/Social Media1.png"
import icon4 from"../assets/Images/twitter 1.png"
import logo from '../assets/Images/flogo.png'

function Footer() {
  return (
<>
<div className='bg-[#F7F7F7] lg:flex lg:flex-row lg:items-center lg:justify-between p-4'>
    <div className='lg:ml-20 mb-4 text-center'>
        <h1 className='font-bold text-3xl mt-8'>Subscribe to our Newsletter</h1>
        <p className='text-[#999999] mt-2'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. <br /> Phasellus imperdiet elit eu magna.</p>
    </div>

    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4 border border-gray-300 overflow-hidden rounded-md mb-4 lg:mb-0">
        <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border-none focus:outline-none rounded-t-md lg:rounded-l-md lg:rounded-t-none w-full lg:w-64"
        />
        <button className="bg-[#00b207] text-white px-6 py-3 focus:outline-none rounded-b-md lg:rounded-r-md lg:rounded-b-none mt-2 lg:mt-0">
            Subscribe
        </button>
    </div>

    <div className="flex items-center justify-center lg:justify-start space-x-4">
        <a href="#" className="bg-[#00b207] hover:text-green-500 p-2 rounded-full">
            <img src={icon1} alt="" />
        </a>
        <a href="#" className="bg-white hover:text-green-500 rounded-full">
            <img src={icon2} alt="" />
        </a>
        <a href="#" className="bg-white hover:text-green-500 rounded-full">
            <img src={icon3} alt="" />
        </a>
        <a href="#" className="bg-white hover:text-green-500 rounded-full">
            <img src={icon4} alt="" />
        </a>
    </div>
</div>


<div className="bg-black text-white p-8">
    <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <div className='flex flex-col mb-4 lg:mb-0 lg:ml-20'>
            <h1 className="text-3xl font-bold mt-2 mb-4">Ecobazar</h1>
            <p className="text-sm">Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div className="flex flex-col mt-4 p-4">
                <p>Phone: +123 456 7890</p>
                <p>Email: info@ecobazar.com</p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-28 lg:ml-16 ">
            <div className="flex flex-col mb-8 lg:mb-0 mr-44">
                <h2 className="text-lg font-semibold mb-4">My Account</h2>
                <p>My Account</p>
                <p>My Account</p> 
                <p>Shoping Cart</p>
                <p>Wishlist</p>
            </div>

            <div className="flex flex-col mb-8 lg:mb-0">
                <h2 className="text-lg font-semibold mb-4">Help</h2>
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex flex-col mb-8 lg:mb-0">
                <h2 className="text-lg font-semibold mb-4">Proxy</h2>
                <p>About</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Track Order</p>
            </div>

            <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <p>Fruit & Vegetables</p>
                <p>Meat & Fish</p>
                <p>Bread & Bakery</p>
                <p>Beauty & Health</p>
            </div>
        </div>
    </div>
</div>



</>
  )
}

export default Footer
