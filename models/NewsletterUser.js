import mongoose from 'mongoose';

const NewsletterUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  vote: {
    type: String,
    required: true
  },
  dateRegistered: {
    type: Date,
    default: Date.now
  }
});

const NewsletterUser = mongoose.model('NewsletterUser', NewsletterUserSchema);

export default NewsletterUser;
