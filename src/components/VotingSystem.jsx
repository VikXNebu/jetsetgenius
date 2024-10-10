import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const fetchVotes = async () => {
  const response = await fetch('/api/votes');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const updateVotes = async ({ upvotes, downvotes }) => {
  const response = await fetch('/api/votes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ upvotes, downvotes }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const VotingSystem = () => {
  const queryClient = useQueryClient();
  const { data: votes, isLoading, isError, error } = useQuery({
    queryKey: ['votes'],
    queryFn: fetchVotes,
  });

  const mutation = useMutation({
    mutationFn: updateVotes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['votes'] });
    },
  });

  const handleVote = (voteType) => {
    if (votes) {
      const newVotes = {
        upvotes: votes.upvotes + (voteType === 'up' ? 1 : 0),
        downvotes: votes.downvotes + (voteType === 'down' ? 1 : 0),
      };
      mutation.mutate(newVotes);
    }
  };

  if (isLoading) return <div>Loading votes...</div>;
  if (isError) return <div>Error loading votes: {error.message}</div>;

  return (
    <div className="flex justify-center items-center space-x-8 mt-8">
      <button
        onClick={() => handleVote('up')}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        <ThumbsUp />
        <span>{votes?.upvotes || 0}</span>
      </button>
      <button
        onClick={() => handleVote('down')}
        className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        <ThumbsDown />
        <span>{votes?.downvotes || 0}</span>
      </button>
    </div>
  );
};

export default VotingSystem;