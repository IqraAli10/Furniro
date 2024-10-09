// components/Loading.tsx
'use client';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  const shakeAnimation = {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        {...shakeAnimation}
        className="text-6xl font-bold text-black"
      >
        FURNIRO.
      </motion.div>
      <p className="absolute bottom-10 text-lg text-gray-600">
        Welcome to FURNIRO.io
      </p>
    </div>
  );
};

export default Loading;
