import React from 'react';
import { motion } from 'framer-motion';

// import myImage from './growth.jpg';

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
 
          {/* <img src={myImage} alt="Description" /> */}
        </div>
      </div>

    
  );
};


export default Hero;