import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ageGroups = [
  { range: '20-30 years old', strategy: 'Focus on aggressive growth, with a high allocation to stocks and emerging markets. Start building an emergency fund and consider low-cost index funds.' },
  { range: '30-40 years old', strategy: 'Continue with a growth-oriented portfolio, but start to increase allocation to bonds. Consider real estate investments and maximize retirement account contributions.' },
  { range: '40-50 years old', strategy: 'Begin to shift towards a more balanced portfolio. Increase bond allocation and consider dividend-paying stocks. Start estate planning.' },
  { range: '50-60 years old', strategy: 'Focus on capital preservation and income. Increase allocation to bonds and consider annuities. Review and adjust retirement plans.' },
];

const InvestmentStrategies = () => {
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
        Investment Strategies by Age Group
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ageGroups.map((group, index) => (
          <motion.div
            key={group.range}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{group.range}</h2>
            <p className="text-lg">{group.strategy}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentStrategies;