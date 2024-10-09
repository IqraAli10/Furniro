// pages/shop.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Comfy Chair',
    price: '$499',
    image: '/comfychair.jpg',
  },
  {
    id: 2,
    name: 'Wooden Chair',
    price: '$299',
    image: '/woodchair.jpg',
  },
  {
    id: 3,
    name: 'Office Chair',
    price: '$199',
    image: '/officechair.jpg',
  },
  {
    id: 4,
    name: 'Chair',
    price: '$149',
    image: '/chair3.jpg',
  },
  {
    id: 5,
    name: 'Sofa Set',
    price: '$499',
    image: '/sofa.jpg',
  },
  {
    id: 6,
    name: 'Sofa Set',
    price: '$299',
    image: '/sofaset1.jpg',
  },
  {
    id: 7,
    name: 'Sofa Set',
    price: '$199',
    image: '/sofaset2.jpg',
  },
  {
    id: 8,
    name: 'Sofa Set',
    price: '$149',
    image: '/sofaset3.jpg',
  },
  {
    id: 9,
    name: 'Bed',
    price: '$499',
    image: '/bed2.jpg',
  },
  {
    id: 10,
    name: 'Wooden Bed',
    price: '$299',
    image: '/bed1.jpg',
  },
  {
    id: 11,
    name: 'Bed',
    price: '$199',
    image: '/bed3.jpg',
  },
  {
    id: 12,
    name: 'Bed',
    price: '$149',
    image: '/bed4.jpg',
  },
  {
    id: 13,
    name: 'Lamp',
    price: '$149',
    image: '/lamp.jpg',
  },
  {
    id: 14,
    name: 'Lamp',
    price: '$149',
    image: '/lamp1.jpg',
  },
  {
    id: 15,
    name: 'Lamp',
    price: '$149',
    image: '/lamp2.jpg',
  },
  {
    id: 16,
    name: 'Lamp',
    price: '$149',
    image: '/lamp3.jpg',
  },
];

const Shop: React.FC = () => {
  return (
    <div className="container mx-auto mb-10 p-4">
      <h1 className="text-3xl font-bold text-center my-4 text-yellow-600">Shop Our Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={150}
              className="w-full h-24 object-cover md:h-48 lg:h-48" // Mobile pe chhoti height, dusre screen sizes par badi
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-md text-gray-700">{product.price}</p>
              <button className="mt-2 bg-yellow-600 text-white px-4 py-1 rounded-md transition-transform transform hover:scale-105">
                <Link href="/detail">Add To Cart</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
