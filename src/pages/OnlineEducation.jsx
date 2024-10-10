import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import VotingSystem from '../components/VotingSystem';

const OnlineEducation = () => {
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
        Online Education Resources
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Empower Your Learning Journey</h2>
        <p className="mb-4">
          Online education has revolutionized the way we learn and grow professionally. Here are some key benefits:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Flexibility to learn at your own pace and schedule</li>
          <li>Access to courses from top universities and institutions worldwide</li>
          <li>Diverse range of subjects from business to technology and beyond</li>
          <li>Opportunities to network with professionals globally</li>
          <li>Cost-effective compared to traditional education options</li>
        </ul>
        <p className="mb-6">
          Whether you're looking to advance your career, explore new interests, or gain specific skills, online education offers a wealth of opportunities. From professional certifications to full degree programs, the digital learning landscape continues to expand and innovate.
        </p>
        <p className="mb-6">
          Are you interested in learning more about online education opportunities and potential deals on courses? Let me know by voting below:
        </p>
        <VotingSystem category="onlineEducation" />
      </motion.div>
    </div>
  );
};

export default OnlineEducation;
