import mongoose from 'mongoose';

const PageHitSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const PageHit = mongoose.model('PageHit', PageHitSchema);

export default PageHit;
