import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/Online.png";
import { useSearch } from "../context/SearchContext";

const HeaderComponent = () => {
  const { setSearchTerm } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu Open:", !isMenuOpen); // Debugging
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-blue-600 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img className="h-30 w-25" src={logo} alt="Logo" />

        <div className="lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center relative z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                Home
              </Link>
              <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                Shop
              </Link>
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                About
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                Contact
              </Link>
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-2xl font-bold no-underline">
            Home
          </Link>
          <Link to="/products" className="text-white hover:text-2xl font-bold no-underline">
            Shop
          </Link>
          <Link to="/about" className="text-white hover:text-2xl font-bold no-underline">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-2xl font-bold no-underline">
            Contact
          </Link>
          <Link to="/login" className="text-white hover:text-2xl font-bold no-underline">
            Login
          </Link>
          <Link to="/checkout" className="relative text-white hover:text-indigo-400 no-underline">
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
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
