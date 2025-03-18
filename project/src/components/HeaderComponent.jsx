import React, { useState } from 'react';
import logo from '/logo.svg';

const HeaderComponent = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        
        <img className="logo"
              src={logo}
              alt="Logo"/>
       

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Search Field for Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Suche..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Links and Cart Icon */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Navigation Links */}
          <a href="#" className="text-white hover:text-indigo-400 font-bold">
            Home
          </a>
          <a href="#" className="text-white hover:text-indigo-400 font-bold">
            Shop
          </a>
          <a href="#" className="text-white hover:text-indigo-400 font-bold">
            Login
          </a>

          {/* Cart Icon */}
          <a href="#" className="text-white hover:text-indigo-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.68 8.39a2 2 0 01-1.97 1.61H7.65a2 2 0 01-1.97-1.61L4 3H3z"
              />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="flex flex-col items-center space-y-4 bg-gray-800 py-4">
          <input
            type="text"
            placeholder="Suche..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <a key="home" href="#" className="text-white hover:text-indigo-400">
            Home
          </a>
          <a key="shop" href="#" className="text-white hover:text-indigo-400">
            Shop
          </a>
          <a key="login" href="#" className="text-white hover:text-indigo-400">
            Login
          </a>
          <a key="cart" href="#" className="text-white hover:text-indigo-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.68 8.39a2 2 0 01-1.97 1.61H7.65a2 2 0 01-1.97-1.61L4 3H3z"
              />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
  

export default HeaderComponent;