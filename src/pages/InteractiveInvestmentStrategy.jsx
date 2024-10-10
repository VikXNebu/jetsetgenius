import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ageCategories = ['20-30', '30-40', '40-50', '50-60'];
const financialGoals = ['Retirement', 'Home Purchase', 'Education', 'Wealth Building'];
const investmentDurations = ['Short-term (0-5 years)', 'Medium-term (5-10 years)', 'Long-term (10+ years)'];

const services = {
  Revolut: {
    description: 'A financial app for managing your money with zero fees and great exchange rates.',
    plans: {
      'Short-term': "Use Revolut's savings vaults for short-term goals.",
      'Medium-term': "Explore Revolut's stock trading feature for medium-term growth.",
      'Long-term': "Consider Revolut's cryptocurrency trading for long-term diversification."
    }
  },
  Syfe: {
    description: 'A digital wealth management platform for easy investing.',
    plans: {
      'Short-term': 'Use Syfe Cash+ for low-risk, liquid investments.',
      'Medium-term': 'Consider Syfe REIT+ for real estate exposure.',
      'Long-term': 'Opt for Syfe Core portfolios for long-term growth.'
    }
  },
  Endowus: {
    description: 'An investment platform that helps you grow your wealth using CPF, SRS, and cash.',
    plans: {
      'Short-term': 'Use Endowus Cash Smart for short-term cash management.',
      'Medium-term': 'Consider Endowus Core portfolios for balanced growth.',
      'Long-term': 'Leverage Endowus CPF investing for retirement planning.'
    }
  },
  Coinbase: {
    description: 'A secure platform to buy, sell, and manage cryptocurrency.',
    plans: {
      'Short-term': 'Use Coinbase for small, strategic crypto investments.',
      'Medium-term': 'Consider Coinbase Pro for more advanced trading.',
      'Long-term': 'Explore Coinbase Earn for long-term crypto accumulation.'
    }
  }
};

const InteractiveInvestmentStrategy = () => {
  const [ageCategory, setAgeCategory] = useState('');
  const [financialGoal, setFinancialGoal] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const resetForm = () => {
    setAgeCategory('');
    setFinancialGoal('');
    setInvestmentDuration('');
    setShowResults(false);
  };

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
        Interactive Investment Strategy
      </motion.h1>
      
      {!showResults ? (
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
        >
          <div className="mb-4">
            <label className="block mb-2">Age Category:</label>
            <select
              value={ageCategory}
              onChange={(e) => setAgeCategory(e.target.value)}
              required
              className="w-full p-2 bg-transparent border border-white rounded"
            >
              <option value="">Select Age Category</option>
              {ageCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Financial Goal:</label>
            <select
              value={financialGoal}
              onChange={(e) => setFinancialGoal(e.target.value)}
              required
              className="w-full p-2 bg-transparent border border-white rounded"
            >
              <option value="">Select Financial Goal</option>
              {financialGoals.map((goal) => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Investment Duration:</label>
            <select
              value={investmentDuration}
              onChange={(e) => setInvestmentDuration(e.target.value)}
              required
              className="w-full p-2 bg-transparent border border-white rounded"
            >
              <option value="">Select Investment Duration</option>
              {investmentDurations.map((duration) => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
            Get Investment Strategy
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Your Investment Strategy</h2>
          <p className="mb-4">Based on your inputs:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Age Category: {ageCategory}</li>
            <li>Financial Goal: {financialGoal}</li>
            <li>Investment Duration: {investmentDuration}</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">Recommended Plans:</h3>
          {Object.entries(services).map(([serviceName, serviceInfo]) => (
            <div key={serviceName} className="mb-6">
              <h4 className="text-lg font-semibold">{serviceName}</h4>
              <p className="mb-2">{serviceInfo.description}</p>
              <p className="font-medium">Recommended plan: {serviceInfo.plans[investmentDuration.split(' ')[0]]}</p>
            </div>
          ))}
          <button onClick={resetForm} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-4">
            Start Over
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveInvestmentStrategy;
