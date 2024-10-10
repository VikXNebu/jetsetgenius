import express from 'express';
const router = express.Router();
import NewsletterUser from '../models/NewsletterUser.js';

// Route to register user for newsletter
router.post('/register', async (req, res) => {
  const { email, vote } = req.body;

  try {
    let user = await NewsletterUser.findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'User already registered' });
    }

    user = new NewsletterUser({ email, vote });
    await user.save();

    res.json({ message: 'User registered for newsletter!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
