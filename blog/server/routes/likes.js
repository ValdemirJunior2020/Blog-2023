const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

// Create a new like
router.post('/likes', async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all likes for a specific blog post
router.get('/likes/blogPost/:blogPostId', async (req, res) => {
  try {
    const likes = await Like.find({ blogPost: req.params.blogPostId });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a like
router.delete('/likes/:id', async (req, res) => {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    if (!like) {
      return res.status(404).json({ message: 'Like not found' });
    }
    res.json({ message: 'Like deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
