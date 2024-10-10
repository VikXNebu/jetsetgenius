import React from 'react';
import { motion } from 'framer-motion';

const referralLinks = [
  { 
    name: 'Revolut', 
    url: 'https://revolut.com/referral/?referral-code=vikrame7yu!SEP1-24-AR-H1', 
    description: 'A financial app for managing your money with zero fees and great exchange rates.',
    icon: '/revolut-icon.svg'
  },
  { 
    name: 'Syfe', 
    url: 'https://www.syfe.com/invite/wealth/SRPTGPC56', 
    description: 'A digital wealth management platform for easy investing.',
    icon: '/syfe-icon.svg'
  },
  { 
    name: 'Endowus', 
    url: 'https://endowus.com/invite?code=O8TRZ', 
    description: 'An investment platform that helps you grow your wealth using CPF, SRS, and cash.',
    icon: '/endowus-icon.svg'
  },
  { 
    name: 'Coinbase', 
    url: 'https://coinbase.com/join/J2ZB9K4?src=ios-whatsapp', 
    description: 'A secure platform to buy, sell, and manage cryptocurrency.',
    icon: '/coinbase-icon.svg'
  },
];

const ReferralLinks = () => {
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {referralLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="bg-white bg-opacity-10 p-4 rounded-lg text-center hover:bg-opacity-20 transition duration-300"
        >
          <img 
            src={link.icon} 
            alt={`${link.name} Icon`} 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">{link.name}</h3>
          <p className="mt-2 text-sm">{link.description}</p>
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block bg-green-600 py-2 px-4 rounded hover:bg-green-500 transition duration-300"
            aria-label={`Explore ${link.name}`}
          >
            Explore Tool
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReferralLinks;
