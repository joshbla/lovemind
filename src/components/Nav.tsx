import React, { useState } from 'react';
import './Nav.css';

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Logo</div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                        <a href="/" className="text-white">Home</a>
                        </li>
                        <li>
                            <div className="relative group">
                                <a href="#" className="text-white">Services</a>
                                <div className="absolute left-0 mt-1 hidden text-black bg-white rounded-md shadow-md group-hover:block z-10">
                                    <ul className="p-2 space-y-1">
                                        <li><a href="#" className="block px-2 py-1">Service 1</a></li>
                                        <li><a href="#" className="block px-2 py-1">Service 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                        <div className="relative group">
                            <a href="#" className="text-white">About</a>
                            <div className="absolute left-0 mt-1 hidden text-black bg-white rounded-md shadow-md group-hover:block z-10">
                                <ul className="p-2 space-y-1">
                                    <li><a href="#" className="block px-2 py-1">About 1</a></li>
                                    <li><a href="#" className="block px-2 py-1">About 2</a></li>
                                </ul>
                            </div>
                        </div>
                        </li>
                        <li>
                            <a href="#" className="text-white">Contact</a>
                        </li>
                        <li>
                            <div className="relative group">
                                <a href="#" className="text-white">Policies</a>
                                <div className="absolute left-0 mt-1 hidden text-black bg-white rounded-md shadow-md group-hover:block z-10">
                                    <ul className="p-2 space-y-1">
                                        <li><a href="#" className="block px-2 py-1">Policy 1</a></li>
                                        <li><a href="#" className="block px-2 py-1">Policy 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="text-white">Jobs</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Research</a>
                        </li>
                    </ul>
                </div>
            </ul>
          </div>
          <button
            className="block md:hidden"
            onClick={toggleMobileMenu}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10.25V10H2v.25A.75.75 0 101 10V10a1.75 1.75 0 001.75-1.75h.5A1.75 1.75 0 000 10v.25a.75.75 0 001.5 0V10h17v.25a.75.75 0 101.5 0V10a1.75 1.75 0 00-1.75 1.75h-.5A1.75 1.75 0 0020 10v-.25a.75.75 0 10-1.5 0v.25h-.5A1.75 1.75 0 0018 10z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="block md:hidden mt-2">
            <ul>
              // Add mobile menu items here
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
