import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlobeIcon, TrendingUpIcon, PlaneIcon, BookOpenIcon, BriefcaseIcon, TrophyIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import VotingSystem from '../components/VotingSystem';
import NewsletterSignup from '../components/NewsletterSignup';

const fetchPageHits = async () => {
  const response = await fetch('/api/page-hits');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const incrementPageHits = async () => {
  const response = await fetch('/api/page-hits', { method: 'POST' });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const queryClient = useQueryClient();
  const { data: pageHits, isLoading: isLoadingHits } = useQuery({
    queryKey: ['pageHits'],
    queryFn: fetchPageHits,
  });

  const mutation = useMutation({
    mutationFn: incrementPageHits,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pageHits'] });
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-center"
        >
          Welcome to Your Global Lifestyle Hub
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-xl font-light mb-6 text-center"
        >
          Discover investment strategies, travel tips, educational opportunities, and exciting events from around the world.
        </motion.h2>

        {!isLoadingHits && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg mb-8"
          >
            Page Visits: {pageHits?.count || 0}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12"
        >
          <InfoCard
            icon={<GlobeIcon className="w-12 h-12 mb-4 text-blue-400" />}
            title="About Me"
            description="I'm a passionate explorer of global opportunities, from investments to travel. Join me as I share insights and experiences to help you navigate the world of finance, travel, and personal growth."
            buttonText="Connect on LinkedIn"
            buttonColor="bg-blue-600"
            buttonLink="https://www.linkedin.com/in/ramvgrs"
          />
          <InfoCard
            icon={<TrendingUpIcon className="w-12 h-12 mb-4 text-green-400" />}
            title="My Investment Approach"
            description="Discover a balanced investment strategy that combines stocks, cryptocurrencies, and carefully selected funds. Learn how to build a portfolio that can thrive in various market conditions."
            buttonText="Explore Strategy"
            buttonColor="bg-green-600"
            buttonLink="/explore-strategy"
          />
          <InfoCard
            icon={<PlaneIcon className="w-12 h-12 mb-4 text-yellow-400" />}
            title="Smart Travel Tips"
            description="Uncover the secrets of efficient and cost-effective travel. From finding the best deals to managing your trips like a pro, I'll share tools and platforms that make your journeys seamless."
            buttonText="Explore Travel Tools"
            buttonColor="bg-yellow-600"
            buttonLink="/travel-tools"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12"
        >
          <InfoCard
            icon={<TrophyIcon className="w-12 h-12 mb-4 text-red-400" />}
            title="Sports Hospitality Events"
            description="Discover the world of premium sports experiences. Learn about exclusive events and how they can elevate your sports viewing to new heights."
            buttonText="Learn More"
            buttonColor="bg-red-600"
            buttonLink="/sports-hospitality"
          />
          
          <InfoCard
            icon={<BookOpenIcon className="w-12 h-12 mb-4 text-purple-400" />}
            title="Online Education"
            description="Explore the power of online learning. From professional development to personal growth, discover how digital education can transform your life and career."
            buttonText="Learn More"
            buttonColor="bg-purple-600"
            buttonLink="/online-education"
          />
          
          <InfoCard
            icon={<BriefcaseIcon className="w-12 h-12 mb-4 text-orange-400" />}
            title="Entrepreneurship"
            description="Embark on your entrepreneurial journey with insights and resources. Learn about starting and growing your own business in the digital age."
            buttonText="Learn More"
            buttonColor="bg-orange-600"
            buttonLink="/entrepreneurship"
          />
        </motion.div>

        <VotingSystem />
        <NewsletterSignup />
      </div>
    </div>
  );
};

// InfoCard Component
const InfoCard = ({ icon, title, description, buttonText, buttonColor, buttonLink }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md hover:bg-opacity-20 transition duration-300 ease-in-out">
    {icon}
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-justify">{description}</p>
    {buttonLink && buttonText && (
      buttonLink.startsWith('http') ? (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonColor} mt-4 py-2 px-4 inline-block rounded text-white hover:opacity-80`}
        >
          {buttonText}
        </a>
      ) : (
        <Link
          to={buttonLink}
          className={`${buttonColor} mt-4 py-2 px-4 inline-block rounded text-white hover:opacity-80`}
        >
          {buttonText}
        </Link>
      )
    )}
  </div>
);

export default Index;