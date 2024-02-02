import React from "react";
import logo from "../assets/Images/logo.jpg";
import Nav from "./Nav";

function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mx-2 md:mx-auto lg:flex lg:justify-around lg:mt-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>
          <h1 className="text-[#002603] font-[poppins] font-semibold text-3xl">
            Ecobazar
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex mt-4 md:mt-0 border border-gray-300 rounded-md">
          <div className="pl-2 pt-3 pr-2">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border-none focus:border-gray-300 pr-4 md:pr-32 rounded-md focus:outline-none"
          />
          <button className="bg-[#00b207] text-white px-4 md:px-6 rounded-r-md focus:outline-none">
            Search
          </button>
        </div>

        {/* Cart and Favorites */}
        <div className="lg:flex mt-4 md:mt-0 cursor-pointer gap-x-3 hidden md:flex">
          <div className="mr-2 pr-2 border-r-2 border-gray-300 h-8">
            <span className="material-symbols-outlined text-lg">favorite</span>
          </div>
          <div>
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
          </div>
          <div className="text-sm">
            <p>Shopping cart:</p>
            <p className="font-bold">$57.00</p>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Navbar;
