import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mr-2"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4A90E2" />
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <span className="text-xl font-bold text-navy-900">oopx</span>
      </div>
      <div className="flex items-center space-x-8">
        <NavItem text="Templates" />
        <NavItem text="About Us" />
        <NavItem text="Pricing" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 font-semibold text-white bg-navy-900 rounded-md hover:bg-navy-800 transition-colors duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? "Let's go!" : "Request A Quote"}
        </motion.button>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ text: string }> = ({ text }) => (
  <motion.a
    href="#"
    className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors duration-200"
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {text}
  </motion.a>
);

export default Navbar;