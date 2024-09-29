import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createClient }  from '@supabase/supabase-js';
import {  useNavigate } from 'react-router-dom';



const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const RequestQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    description: '',
  });
  const [isSubmittinng, setIsSubmitting] = useState(false);
  const [ submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { data, error } = await supabase
      .from('quote_requests') // Make sure this matches your table name exactly
      .insert([formData]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Inserted data:', data);
      setNotification('Your quote request has been submitted successfully. Redirecting to home page...');


      setSubmitMessage('Message submitted successfully');
      setFormData({ name: '', email: '', projectName: '', description: ''});
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
        console.error('There was an error submitting form')
    } finally {
        setIsSubmitting(false);
    }

  };
  const Alert: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );

  return (
    <div className="bg-white py-12 md:py-20 w-full px-4 md:px-6 lg:px-8">
      {notification && <Alert message={notification} />}
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
              {isSubmittinng ? 'Submittig...' : 'Submit Request'}
              
            </motion.button>
          </div>
        </form>
        {submitMessage && (
          <p className='mt-4 text-lg font-medium text-green-600'>{submitMessage}</p>
        )}
      </div>
    </div>
  );
};

export default RequestQuoteForm;