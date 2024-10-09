'use client';
import Image from "next/image";
import { motion } from "framer-motion"; // Importing Framer Motion

const Range: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-4 md:p-16"> {/* Padding adjusted for mobile */}
      <div className="container mx-auto py-8"> {/* Adjusted padding for mobile */}
        {/* Heading Section with animation */}
        <motion.div
          className="text-center mb-6" // Margin adjusted for mobile
          initial={{ opacity: 0, y: -50 }} // Start above and transparent
          animate={{ opacity: 1, y: 0 }} // Animate to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
        >
          <h1 className="text-2xl font-bold">Browse The Range</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Adjusted gap for mobile */}
          {/* Dining Image */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }} // Hidden at first
            whileInView={{ opacity: 1 }} // Visible when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition settings
            viewport={{ once: true }} // Animation happens only once
          >
            <Image
              src="/dining.jpg"
              alt="Dining room setup with a cozy table and decor"
              className="w-full h-[250px] rounded-lg cursor-pointer" // Height reduced for mobile
              width="600" // Width increased for mobile
              height="250" // Height reduced for mobile
              priority
            />
            <h2 className="mt-4 text-lg font-semibold">Dining</h2>
          </motion.div>

          {/* Living Image */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Adding delay for staggered effect
            viewport={{ once: true }}
          >
            <Image
              src="/living.jpg"
              alt="Living room setup with a comfortable sofa and decor"
              className="w-full h-[250px] rounded-lg cursor-pointer" // Height reduced for mobile
              width="600" // Width increased for mobile
              height="250" // Height reduced for mobile
              priority
            />
            <h2 className="mt-4 text-lg font-semibold">Living</h2>
          </motion.div>

          {/* Bedroom Image */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Slightly more delay
            viewport={{ once: true }}
          >
            <Image
              src="/bedroom1.jpg"
              alt="Bedroom setup with a cozy bed and decor"
              className="w-full h-[250px] rounded-lg cursor-pointer" // Height reduced for mobile
              width="600" // Width increased for mobile
              height="250" // Height reduced for mobile
              priority
            />
            <h2 className="mt-4 text-lg font-semibold">Bedroom</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Range;
