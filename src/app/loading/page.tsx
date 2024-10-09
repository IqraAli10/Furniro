// src/app/loading/LoadingPage.tsx

"use client"; // Ensure this is a Client Component

import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Logo with animation */}
        <motion.h1
          className="text-black text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          FURNIRO.
        </motion.h1>
        
        {/* Loading Spinner */}
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-yellow-600">Loading...</span>
        </div>

        {/* Welcome Message */}
        <p className="text-center text-lg text-gray-700">
          Welcome to <strong>FURNIRO.io</strong>! We&apos;re glad to have you here.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
