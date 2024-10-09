'use client'
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

const ImageGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-14">
      <h2 className="text-center font-bold text-1xl mb-6">
        Share your setup with <br /> <span className="text-4xl text-gray-900 font-ebold">#FuniroFurniture</span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <motion.div
          className="col-span-2 row-span-1 sm:row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bed.jpg"
            alt="Setup 1"
            className="h-full object-fill"
            width={400}
            height={300}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/lamp.jpg"
            alt="Setup 2"
            className="h-full object-cover"
            width={200}
            height={100}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/kitchen.jpg"
            alt="Setup 3"
            className="h-full object-cover"
            width={200}
            height={100}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/pot2.jpg"
            alt="Setup 4"
            className="h-full object-cover"
            width={200}
            height={100}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/wall2.jpg"
            alt="Setup 5"
            className="h-full object-cover"
            width={200}
            height={100}
            priority
          />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-1 sm:row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/couch.jpg"
            alt="Setup 6"
            className="h-full object-cover"
            width={400}
            height={300}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/diningtable.jpg"
            alt="Setup 7"
            className="h-full object-cover"
            width={200}
            height={150}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Image
            src="/wallframe.jpg"
            alt="Setup 8"
            className="h-full object-cover"
            width={200}
            height={150}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageGrid;
