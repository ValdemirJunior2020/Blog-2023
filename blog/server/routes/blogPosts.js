const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Create a new blog post
router.post('/blogPosts', async (req, res) => {
  try {
    const blogPost = await BlogPost.create(req.body);
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blog posts
router.get('/blogPosts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'username');
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific blog post
router.get('/blogPosts/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author', 'username');
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blog post
router.put('/blogPosts/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post
router.delete('/blogPosts/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
