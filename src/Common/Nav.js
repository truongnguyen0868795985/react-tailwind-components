import React from "react";
import { FiSearch, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Nav() {
  return (
    <div className="block">
      <nav className="flex justify-between items-center w-full bg-gray-800 h-16 lg:justify-around">
        <div className="flex items-center p-4 space-x-3 cursor-pointer">
          <img
            className="h-10 w-10"
            src="https://lh3.googleusercontent.com/proxy/QfUcORPnWUjxHPtEQPwE7Dgyeid5t_tLnF-Rsnmj8gNz4cJ9CpkR3cYgn9TkFJHzp0YbnOOmsAyvUF5oGwAfPl_ucNxE7I6vDjB362GC18Q"
            alt="Logo"
          />
          <p className="font-light tracking-widest text-white">TRISHOP</p>
        </div>

        {/* search */}
        <div className="hidden lg:flex lg:items-center">
          <input
            className="w-64 py-1 px-3 bg-gray-300 outline-none text-gray-800"
            placeholder="Search for products..."
            onKeyDown={(e) => {
              if (e.key === "Enter") return alert("search button");
            }}
          />
          <FiSearch
            className="h-8 w-8 pr-3 bg-gray-300 outline-none cursor-pointer text-gray-800 hover:text-red-500"
            onClick={() => alert("Search bro")}
          />
        </div>

        {/* 3 navigations */}
        <div className="flex items-center space-x-10 pr-4">
          {/* cart */}
          <div className="cursor-pointer">
            <FiShoppingCart className="text-white mx-auto" />
            <p className="text-white mx-auto hover:text-purple-500">Cart</p>
          </div>
          {/* wishlist */}
          <div className="cursor-pointer">
            <FiHeart className="text-white mx-auto" />
            <p className="text-white mx-auto hover:text-red-500">Wishlist</p>
          </div>
          {/* account */}
          <div className="cursor-pointer">
            <FiUser className="text-white mx-auto" />
            <p className="text-white mx-auto hover:text-blue-500">Account</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
