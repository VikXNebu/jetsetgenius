import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import VotingSystem from '../components/VotingSystem';

const SportsHospitality = () => {
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
        Sports Hospitality Events
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Experience the Thrill of Premium Sports Events</h2>
        <p className="mb-4">
          Sports hospitality events offer an unparalleled way to enjoy your favorite sporting events. While I don't provide these packages directly, I'm excited to share information about these exclusive experiences:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>VIP seating with the best views of the action</li>
          <li>Gourmet catering and premium beverages</li>
          <li>Opportunities to meet athletes and sports personalities</li>
          <li>Access to exclusive pre and post-event parties</li>
          <li>Luxury transportation and accommodation options</li>
        </ul>
        <p className="mb-6">
          These events can range from major international tournaments to local championship games, offering a blend of sport, luxury, and networking opportunities. If I come across any exceptional deals or unique experiences, I'll be sure to share them here!
        </p>
        <p className="mb-6">
          Are you interested in learning about sports hospitality events and exclusive deals? Let me know by voting below:
        </p>
        <VotingSystem category="sportsHospitality" />
      </motion.div>
    </div>
  );
};

export default SportsHospitality;
