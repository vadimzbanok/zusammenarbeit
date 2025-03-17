import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-80 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:text-indigo-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navbar */}
        <div className="bg-white shadow w-full">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <h1 className="text-xl font-semibold">Animated Drawer</h1>
            <button
              className="text-gray-500 hover:text-gray-600"
              onClick={toggleSidebar}
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
        </div>
        {/* Content Body */}
        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <h1 className="text-2xl font-semibold">Welcome to our website</h1>
          <p>... Content goes here ...</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;