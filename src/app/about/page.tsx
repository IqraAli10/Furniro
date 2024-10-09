"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Updated import for routing
import Image from 'next/image';

const About: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center text-yellow-600 py-12">
        <motion.h1
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Funiro Furniture
        </motion.h1>
        <motion.p
          className="text-lg text-gray-900 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          High-quality, beautiful furniture that transforms your home into a place of comfort and style.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg"
          onClick={() => router.push('/shop')}
        >
          Shop Now
        </motion.button>
      </section>

      {/* About Company Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Start off-screen left
            whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold mb-8">About Our Brand</h2>
            <p className="font-medium text-gray-800 mb-3">
              At Funiro, we believe that furniture transcends mere utility it is a profound means of expressing your unique personality and lifestyle. Our carefully curated collections are crafted with meticulous precision and passion, ensuring that every piece harmonizes style with comfort.
            </p>
            <p className="font-medium text-gray-800 mb-3">
              We understand that your home is a reflection of who you are. That&spos;s why we offer an extensive range of furniture, from timeless classics to cutting-edge contemporary designs. Each item in our collection is more than just a piece of furniture it&apos;s a work of art that enhances your living space and complements your individual taste.
            </p>
            <p className="font-medium text-gray-800 mb-3">
              Whether you&apos;re looking for elegant sofas that invite relaxation, stylish dining sets that foster connection, or innovative storage solutions that marry form and function, Funiro is dedicated to providing options that inspire and delight. Our commitment to quality craftsmanship and attention to detail means you can trust that each piece is built to last, making your living environment not just a place to reside, but a true sanctuary.
            </p>
            <p className="font-medium text-gray-800 mb-3">
              Join us in reimagining your home with furniture that speaks to your style and elevates your everyday living experience. At Funiro, we&spos;re not just furnishing spaces we&apos;re crafting lifestyles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} // Start with opacity 0
            whileInView={{ opacity: 1 }} // Fade to opacity 1
            transition={{ duration: 0.8 }}
          >
            <Image src="/living-room.jpg" alt="About Funiro Furniture" className="w-full rounded-md shadow-lg justify-center items-center mt-10" width={600} height={600} />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Funiro?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Affordable Prices', icon: '💲', description: 'Stylish furniture without breaking the bank.' },
            { title: 'Premium Quality', icon: '🏆', description: 'We use only the best materials.' },
            { title: 'Fast Delivery', icon: '🚚', description: 'Receive your items in record time.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section (Optional) */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Member 1', 'Member 2', 'Member 3'].map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={`/girl${index + 1}.jpg`} // Ensure your image names match the actual images in your project
                alt={member}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={600}
                height={600}
              />
              <h3 className="text-xl font-semibold">{member}</h3>
              <p className="text-gray-500">Role Title</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section className="py-12 text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gray-700 text-white px-6 py-3 rounded-md mx-2"
          onClick={() => router.push('/contact')}
        >
          Contact Us
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-700 text-white px-6 py-3 rounded-md mx-2"
          onClick={() => router.push('/shop')}
        >
          Shop Now
        </motion.button>
      </section>
    </div>
  );
};

export default About; // Make sure to export the component with a capitalized name
