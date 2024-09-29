import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-indigo-600 py-16 px-4 md:px-8 lg:px-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Ready to Take Your Business to the Next Level?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Whether you need a new website, a redesign, or a custom web application, our team is here to help you achieve your goals.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to='https://wa.me/2349075754477'>
        <p
          className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          Contact Us
          </p>
        </Link>
        <a
          href="/request-quote"
          className="bg-indigo-800 text-white font-semibold py-4 px-8 rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Start a Project
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
