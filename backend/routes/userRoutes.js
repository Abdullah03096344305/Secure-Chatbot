const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Login Route
// Login Route
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });
  

module.exports = router;
