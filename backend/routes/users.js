const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get user's posts
    const posts = await Post.find({ author: req.params.id, isPublished: true }).select('title excerpt image createdAt');

    res.json({
      user,
      postCount: posts.length,
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
router.put('/:id', verifyToken, async (req, res) => {
  try {
    // Check authorization
    if (req.params.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this user' });
    }

    const { name, bio, avatar } = req.body;

    let user = await User.findByIdAndUpdate(
      req.params.id,
      { name, bio, avatar },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({ message: 'User profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;