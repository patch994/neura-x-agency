const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  slug: String,
  content: {
    type: String,
    required: [true, 'Please add content'],
  },
  excerpt: {
    type: String,
    maxlength: [200, 'Excerpt cannot be more than 200 characters'],
  },
  image: {
    type: String,
    default: 'no-photo.jpg',
  },
  author: {
    type: String,
    default: 'NEURA X Team',
  },
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
