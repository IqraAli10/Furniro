'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="text-3xl font-extrabold text-black">
          <a href="/" className="flex items-center">
            <span className="ml-2">Furniro.</span>
          </a>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            isOpen ? 'fixed inset-0 backdrop-blur-md flex flex-col items-center justify-center z-50' : 'hidden'
          }`}
        >
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-black">
            <AiOutlineClose size={24} />
          </button>

          {/* Mobile Links */}
          <div className="space-y-4 text-center ">
            <Link href="/" onClick={handleLinkClick} className="block text-black font-medium hover:text-gray-600 px-4 py-2">Home</Link>
            <Link href="/shop" onClick={handleLinkClick} className="block text-black font-medium hover:text-gray-600 px-4 py-2">Shop</Link>
            <Link href="/about" onClick={handleLinkClick} className="block text-black font-medium hover:text-gray-600 px-4 py-2">About</Link>
            <Link href="/contact" onClick={handleLinkClick} className="block text-black font-medium hover:text-gray-600 px-4 py-2">Contact</Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link href="/" className="text-black font-medium hover:text-gray-600">Home</Link>
          <Link href="/shop" className="text-black font-medium hover:text-gray-600">Shop</Link>
          <Link href="/about" className="text-black font-medium hover:text-gray-600">About</Link>
          <Link href="/contact" className="text-black font-medium hover:text-gray-600">Contact</Link>
        </div>

        {/* Icon Section */}
        <div className="hidden md:flex space-x-6 items-center">
          <FaUser className="text-black cursor-pointer" />
          <FaSearch className="text-black cursor-pointer" />
          <FaHeart className="text-black cursor-pointer" />
          <FaShoppingCart className="text-black cursor-pointer" />
        </div>

        {/* Mobile Icon Section */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden space-y-4 mt-4`}>
          <FaUser className="text-black cursor-pointer" />
          <FaSearch className="text-black cursor-pointer" />
          <FaHeart className="text-black cursor-pointer" />
          <FaShoppingCart className="text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
