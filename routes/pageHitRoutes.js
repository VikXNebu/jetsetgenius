import express from 'express';
const router = express.Router();
import PageHit from '../models/PageHit.js';

// Route to update page hits
router.post('/hit', async (req, res) => {
  try {
    let hit = await PageHit.findOne();

    if (!hit) {
      hit = new PageHit();
    }

    hit.count += 1;
    hit.lastUpdated = new Date();
    await hit.save();

    res.json({ message: 'Page hit updated!', count: hit.count });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
