import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import logo from "../../public/images/Online.png";
import { FaHome, FaShoppingBag, FaInfoCircle, FaEnvelope, FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const HeaderComponent = () => {
  const { setSearchTerm } = useSearch();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu Open:", !isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-blue-600 sticky top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/"><img className="h-40 d-none d-md-block" src={logo} alt="Logo" /></a>
        
        <div className="lg:flex items-center">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={handleSearch}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>

        <div className="lg:hidden flex items-center relative z-50 ml-3">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <HiMenuAlt3 size={24} />
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                <FaHome className="inline mr-2" /> Home
              </Link>
              {/* <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                <FaShoppingBag className="inline mr-2" /> Shop
              </Link> */}
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                <FaInfoCircle className="inline mr-2" /> About
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                <FaEnvelope className="inline mr-2" /> Contact
              </Link>
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline">
                <FaSignInAlt className="inline mr-2" /> Login
              </Link>
              <Link to="/checkout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline relative">
                <FaShoppingCart className="inline mr-2 text-lime-500" /> Cart
                {totalItems > 0 && (
                  <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-6 links">
          <Link to="/" className="text-white hover:scale-125 transition-all duration-200 ease-in-out font-bold no-underline">
            <FaHome className="inline" /> Home
          </Link>

          {/* <Link to="/products" className="text-white hover:scale-125 transition-all duration-200 ease-in-out font-bold no-underline">
            <FaShoppingBag className="inline mr-2" /> Shop
          </Link> */}
          <Link to="/about" className="text-white hover:scale-125 transition-all duration-200 ease-in-out font-bold no-underline">
            <FaInfoCircle className="inline text-lime-500" /> About
          </Link>
          <Link to="/contact" className="text-white hover:scale-125 transition-all duration-200 ease-in-out font-bold no-underline">
            <FaEnvelope className="inline" /> Contact
          </Link>
          <Link to="/login" className="text-white hover:scale-125 transition-all duration-200 ease-in-out font-bold no-underline">
            <FaSignInAlt className="inline" /> Login
          </Link>
          <Link to="/checkout" className="relative text-white hover:text-indigo-400 no-underline">
            <FaShoppingCart size={30} className="text-lime-500"/>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;