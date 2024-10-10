import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const subscribeToNewsletter = async (email) => {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const mutation = useMutation({
    mutationFn: subscribeToNewsletter,
    onSuccess: () => {
      alert('Successfully subscribed to the newsletter!');
      setEmail('');
    },
    onError: () => {
      alert('Failed to subscribe to the newsletter. Please try again.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(email);
  };

  return (
    <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
      <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;