// pages/index.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/bedroom2.jpg', title: '01 — Bedroom', desc: 'Inner Peace' },
  { src: '/livingroom.jpg', title: '02 — Living Room', desc: 'Cozy Comfort' },
  { src: '/kitchen.jpg', title: '03 — Kitchen', desc: 'Modern Brightness' },
  { src: '/diningtable2.jpg', title: '04 — Dining Room', desc: 'Elegant Dining' },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative bg-[#f5f5dc] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      {/* Flexbox for mobile view */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Text Section for mobile */}
        <div className="flex flex-col justify-center items-start mb-4 md:mb-0 md:flex-1 md:pr-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-2">50+ Beautiful Rooms Inspiration</h2>
          <p className="text-xl md:text-xl text-gray-700 mb-2">
            Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you.
          </p>
          <button className="bg-[#F6A623] text-white rounded-md px-4 py-2 mb-4">
            Explore More
          </button>

          {/* Current Slide Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{images[currentIndex].title}</h3>
            <p className="text-md md:text-lg text-gray-600">{images[currentIndex].desc}</p>
          </div>
        </div>

        {/* Main (Current) Image for mobile */}
        <div className="flex-1 relative text-center">
          <Image
            src={images[currentIndex].src}
            alt="Current Image"
            className="w-full h-auto rounded-lg"
            height={400}
            width={400}
            priority
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Home;
