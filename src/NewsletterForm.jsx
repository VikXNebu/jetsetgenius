import { useState } from 'react';
import axios from 'axios';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [vote, setVote] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('${process.env.REACT_APP_API_BASE_URL}/api/newsletter/register', {
        email,
        vote
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error registering for the newsletter');
    }
  };

  return (
    <div>
      <h2>Register for our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={vote} onChange={(e) => setVote(e.target.value)} required>
          <option value="">Select your vote</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default NewsletterForm;
