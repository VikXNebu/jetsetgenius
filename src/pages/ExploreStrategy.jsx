import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, TrendingUpIcon, CoinsIcon, CreditCardIcon, BarChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreStrategy = () => {
  const investmentTools = [
    {
      name: 'Luno',
      url: 'https://www.luno.com/invite/P7M45N',
      description: 'User-friendly platform for buying, storing, and learning about cryptocurrencies.',
      icon: <CoinsIcon className="w-12 h-12 mb-4 text-yellow-400" />
    },
    { 
      name: 'Revolut', 
      url: 'https://revolut.com/referral/?referral-code=vikrame7yu!SEP1-24-AR-H1', 
      description: 'A financial app for managing your money with zero fees and great exchange rates.',
      icon: <CreditCardIcon className="w-12 h-12 mb-4 text-green-400" />
    },
    { 
      name: 'Syfe', 
      url: 'https://www.syfe.com/invite/wealth/SRPTGPC56', 
      description: 'A digital wealth management platform for easy investing.',
      icon: <TrendingUpIcon className="w-12 h-12 mb-4 text-purple-400" />
    },
    { 
      name: 'Endowus', 
      url: 'https://endowus.com/invite?code=O8TRZ', 
      description: 'An investment platform that helps you grow your wealth using CPF, SRS, and cash.',
      icon: <CoinsIcon className="w-12 h-12 mb-4 text-red-400" />
    },
    { 
      name: 'Coinbase', 
      url: 'https://coinbase.com/join/J2ZB9K4?src=ios-whatsapp', 
      description: 'A secure platform to buy, sell, and manage cryptocurrency.',
      icon: <CoinsIcon className="w-12 h-12 mb-4 text-blue-400" />
    },
    {
      name: 'Fund Supermart',
      url: 'https://secure.fundsupermart.com/fsmone/signup/personal/P0291115',
      description: 'A comprehensive platform offering a wide range of investment products, including mutual funds, bonds, and more. Enjoy low fees and access to expert research to make informed investment decisions.',
      icon: <BarChartIcon className="w-12 h-12 mb-4 text-orange-400" />
    },
  ];

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
        Explore My Investment Strategy
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">My Approach to Investing</h2>
        <p className="mb-4">
          I believe in building a robust and diversified portfolio that can weather any financial storm. My strategy encompasses:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Carefully selected stocks for long-term growth</li>
          <li>Cutting-edge cryptocurrencies for potential high returns</li>
          <li>Strategically chosen funds for stability and diversification</li>
        </ul>
        <p className="mb-6">
          This balanced approach allows me to capitalize on various market opportunities while effectively managing risk.
        </p>
      </motion.div>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Investment Tools I Use</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {investmentTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition duration-300"
          >
            {tool.icon}
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="mb-4">{tool.description}</p>
            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-green-600 py-2 px-4 rounded hover:bg-green-500 transition duration-300"
            >
              Explore {tool.name}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExploreStrategy;
