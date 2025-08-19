"use client";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaRegUser, FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      {}
      <div className="fixed top-0 left-0 w-full z-30 bg-black text-white py-2 px-6 flex items-center justify-between text-xs">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <span className="font-semibold underline cursor-pointer">ShopNow</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          English <FaChevronDown className="inline text-xs ml-1" />
        </div>
      </div>
      {}
      <header className="fixed top-8 left-0 w-full bg-white shadow z-20 px-8 py-3 flex items-center justify-between">
        <div className="font-bold text-2xl text-black">Exclusive</div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <Link href="/signup" className="text-gray-700 hover:text-black">Sign Up</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="ml-2 bg-transparent outline-none text-sm w-40"
            />
          </div>
          <FaHeart className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <FaShoppingCart className="text-xl text-gray-700 hover:text-black cursor-pointer" />
          <FaRegUser className="text-xl text-gray-700 hover:text-black cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Header;