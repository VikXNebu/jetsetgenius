import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import VotingSystem from '../components/VotingSystem';

const Entrepreneurship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white p-8">
      <Link to="/" className="inline-flex items-center text-white hover:text-blue-300 mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Entrepreneurship Resources
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Start Your Business Journey</h2>
        <p className="mb-4">
          Embarking on an entrepreneurial journey can be both exciting and challenging. Here's how it can benefit you:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Create innovative solutions to real-world problems</li>
          <li>Build financial independence and wealth</li>
          <li>Develop valuable skills in leadership and management</li>
          <li>Enjoy the freedom to pursue your passions</li>
          <li>Make a positive impact on your community or industry</li>
        </ul>
        <p className="mb-6">
          Whether you're just starting with an idea or looking to scale your existing business, entrepreneurship offers a path to personal and professional growth. It requires dedication, resilience, and continuous learning, but the rewards can be truly transformative.
        </p>
        <p className="mb-6">
          Are you interested in learning more about entrepreneurship resources, workshops, or potential deals on business tools? Let me know by voting below:
        </p>
        <VotingSystem category="entrepreneurship" />
      </motion.div>
    </div>
  );
};

export default Entrepreneurship;
