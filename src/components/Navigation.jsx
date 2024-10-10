import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/explore-strategy" className="hover:text-blue-300">Explore Strategy</Link></li>
        <li><Link to="/travel-tools" className="hover:text-blue-300">Travel Tools</Link></li>
        <li><Link to="/sports-hospitality" className="hover:text-blue-300">Sports Hospitality</Link></li>
        <li><Link to="/online-education" className="hover:text-blue-300">Online Education</Link></li>
        <li><Link to="/entrepreneurship" className="hover:text-blue-300">Entrepreneurship</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;