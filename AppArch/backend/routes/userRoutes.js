const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const User = require('../models/userModel'); 
const router = express.Router();

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      return res.status(400).json({ error: 'Invalid token.' });
    }
};

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: 'All fields (email, username, and password) are required.' });
    }

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            const field = existingUser.email === email ? 'email' : 'username';
            return res.status(400).json({ error: `A user already exists with this ${field}.` });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            username,
            password: hashedPassword
        });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id }, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: '1h' } 
        );

        res.status(201).json({ 
            message: 'User created successfully', 
            userId: newUser._id, 
            token 
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: 'Logged in successfully', token });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/delete_user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log('User ID:', userId);

        const user = await User.findOne({ userId: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' }); 
        }

        await user.deleteOne();
        return res.status(200).json({ message: 'User deleted successfully' }); 
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Server error' }); 
    }
});


router.get('/details', verifyToken, async (req, res) => {
    try {
      const user = await User.findOne({ userId: req.userId }).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({
        user_id: user.userId,
        email: user.email,
        user_name: user.username,
      });
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
