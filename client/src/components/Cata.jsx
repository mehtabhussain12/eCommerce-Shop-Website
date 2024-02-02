import React from "react";
import image1 from "../assets/Images/image 1.png";
import image2 from "../assets/Images/image 2.png"
import image3 from "../assets/Images/image 3.png"
import image4 from "../assets/Images/image 4.png"
import image5 from "../assets/Images/image 5.png"
import image6 from "../assets/Images/image6.png"
import image7 from "../assets/Images/image 7.png"
import image8 from "../assets/Images/image 8.png"
import image9 from "../assets/Images/image 9.png"
import image10 from "../assets/Images/image 10.png"
import image11 from "../assets/Images/image 11.png"
import image12 from "../assets/Images/image 12.png"
import Popular from "./Popular";






function Cata() {
  return (
    <>
      <div className="ml-16 m-6 flex items-center justify-center p-8 ">
        <h1 className="text-black text-3xl font-bold ">Popular Categories</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:ml-16 lg:gap-x-4  cursor-pointer flex-col m-4">
        <div>
          <div className="flex flex-col items-center border border-gray-300 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]  rounded-md m-2 hover:text-[#2C742F] ">
            <img src={image1} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Fresh Fruit</h1>
          </div>
        </div>
{/* 2 */}

<div>
          <div className="flex flex-col items-center border border-gray-300   hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]  rounded-md m-2 hover:text-[#2C742F]">
            <img src={image2} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Fresh Vegetables</h1>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2  hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image3} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Meat & Fish</h1>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F]  ">
            <img src={image4} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Snacks</h1>
          </div>
        </div>
        {/* 5 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2  hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image5} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Beverages</h1>
          </div>
        </div>
        {/* 6 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image6} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Beauty & Health</h1>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:ml-16 lg:gap-x-4  cursor-pointer flex-col m-4">
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image7} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Bread & Bakery</h1>
          </div>
        </div>
{/* 2 */}

<div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image8} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Baking Needs</h1>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image9} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Cooking</h1>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F]  ">
            <img src={image10} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Diabetic Food</h1>
          </div>
        </div>
        {/* 5 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2 hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F]  ">
            <img src={image11} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Dish Detergents</h1>
          </div>
        </div>
        {/* 6 */}
        <div>
          <div className="flex flex-col items-center border border-gray-300  rounded-md m-2  hover:shadow-2xl hover:shadown-[#2C742F] hover:border-[#2C742F]   hover:text-[#2C742F] ">
            <img src={image12} alt="" />
            <h1 className="my-4 font-semibold text-1xl">Oil</h1>
          </div>
        </div>
      </div>
      <Popular></Popular>
    </>
  );
}

export default Cata;
