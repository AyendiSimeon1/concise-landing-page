import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20 w-full px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
          Transform Your Business <br /> with  Cutting-Edge <br /> Web Design and Development
          
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            See how we help businesses like yours grow through tailored web solutions, stunning designs, and innovative technology.
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-navy-900 text-white text-lg font-semibold rounded-md hover:bg-navy-800 transition-colors duration-200"
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-navy-900 text-lg font-semibold rounded-md border border-navy-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Learn more
            </motion.button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, index) => (
              <motion.div
                key={index}
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${getRandomColor()}`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index % 3 === 0 && (
                  <img src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt="User" className="w-full h-full object-cover rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  
  
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['bg-blue-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-cyan-500', 'bg-navy-900'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Hero;
