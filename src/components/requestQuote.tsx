import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RequestQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white py-12 md:py-20 w-full px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
          Request a Quote
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Fill out the form below to get a custom quote for your project. We'll review your requirements and get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-navy-900 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-navy-900 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="projectName" className="block text-lg font-medium text-navy-900 mb-2">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-navy-900 mb-2">Project Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
              required
            ></textarea>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-4 bg-navy-900 text-white text-lg font-semibold rounded-md hover:bg-navy-800 transition-colors duration-200"
            >
              Submit Request
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteForm;