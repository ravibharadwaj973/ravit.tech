'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fixed positions for floating elements to avoid hydration mismatch
  const fixedPositions = [
    { left: '10%', top: '20%' },
    { left: '25%', top: '60%' },
    { left: '40%', top: '30%' },
    { left: '55%', top: '80%' },
    { left: '70%', top: '40%' },
    { left: '85%', top: '70%' },
    { left: '15%', top: '85%' },
    { left: '90%', top: '15%' }
  ];

  // Don't render floating elements until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            RAVI BHARADWAJ
          </h1>
          <div className="flex justify-center space-x-2 mb-8">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-3 h-3 bg-cyan-400 rounded-full opacity-50"
              />
            ))}
          </div>
          <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-1/2" />
          </div>
          <p className="text-gray-400 text-sm mt-6">Loading awesome content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RAVI BHARADWAJ
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Full Stack Developer & DevOps Engineer</p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Loading Text with Typing Animation */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-gray-400 text-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Loading awesome content...
          </motion.p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {['⚛️', '🚀', '☁️', '🐳', '⚡'].map((icon, index) => (
            <motion.div
              key={index}
              className="text-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements - Only rendered on client */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {fixedPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Status Messages */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p
            className="text-cyan-400 text-xs font-mono"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            Initializing systems...
          </motion.p>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border border-gray-600" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;