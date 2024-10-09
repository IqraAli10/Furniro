// pages/contact.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const iconVariants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: [0, -10, 10, -10, 10, 0], 
    transition: { duration: 0.5 } 
  },
};

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center my-8 text-yellow-600">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                id="message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Login Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-email">Email</label>
              <input
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="email"
                id="login-email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-password">Password</label>
              <input
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="password"
                id="login-password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>

      {/* Social Media Links Section */}
      <div className="mt-12 text-center mb-9">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <motion.div 
            variants={iconVariants} 
            initial="initial" 
            whileHover="hover" 
            className="text-yellow-600 hover:text-yellow-700"
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </motion.div>
          <motion.div 
            variants={iconVariants} 
            initial="initial" 
            whileHover="hover" 
            className="text-yellow-600 hover:text-yellow-700"
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </motion.div>
          <motion.div 
            variants={iconVariants} 
            initial="initial" 
            whileHover="hover" 
            className="text-yellow-600 hover:text-yellow-700"
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </motion.div>
          <motion.div 
            variants={iconVariants} 
            initial="initial" 
            whileHover="hover" 
            className="text-yellow-600 hover:text-yellow-700"
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
