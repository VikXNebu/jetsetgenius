import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, PlaneIcon, CreditCardIcon, BusIcon, MapIcon, CarIcon, SmartphoneIcon, WalletIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const travelTools = [
  { 
    name: 'YouTrip', 
    url: 'https://youtrip.onelink.me/3xWB/n3uif5xw', 
    description: 'Multi-currency travel card for fee-free overseas spending.',
    icon: <CreditCardIcon className="w-12 h-12 mb-4 text-blue-400" />
  },
  { 
    name: 'Wise', 
    url: 'https://wise.com/invite/ihpw/ramvikramganeshr', 
    description: 'International money transfers and multi-currency account.',
    icon: <PlaneIcon className="w-12 h-12 mb-4 text-green-400" />
  },
  { 
    name: 'easybook', 
    url: 'https://www.easybook.com/en-sg/account/register?raf=3CEEF1DA&fro=Whatsapp', 
    description: 'Hassle-free bus and ferry ticket booking platform.',
    icon: <BusIcon className="w-12 h-12 mb-4 text-red-400" />
  },
  { 
    name: 'Klook Travel', 
    url: 'https://s.klook.com/c/vXnNpD4WyD', 
    description: 'Discover and book amazing travel experiences worldwide.',
    icon: <MapIcon className="w-12 h-12 mb-4 text-yellow-400" />
  },
  { 
    name: 'SOCAR', 
    url: 'https://socar.my/dl/pm5gFo', 
    description: 'Convenient car-sharing service for your travel needs.',
    icon: <CarIcon className="w-12 h-12 mb-4 text-purple-400" />
  },
  { 
    name: "Touch 'n Go eWallet", 
    url: 'https://touchngoewallet.onelink.me/8mmV/linkshare', 
    description: 'Essential e-wallet for hassle-free payments in Malaysia.',
    icon: <WalletIcon className="w-12 h-12 mb-4 text-orange-400" />
  },
];

const TravelTools = () => {
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
        My Travel Tools
      </motion.h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Traveling smart is all about using the right tools. Here are the platforms and services I rely on to make my travels smooth, enjoyable, and budget-friendly. Each of these tools has been personally tested and approved by me for the best travel experiences.
      </p>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelTools.map((tool, index) => (
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
              className="inline-block bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
            >
              Explore {tool.name}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TravelTools;
