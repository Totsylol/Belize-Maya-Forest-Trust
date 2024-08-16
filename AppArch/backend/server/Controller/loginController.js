const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../Model/userModel'); // Correct path to userModel

const userController = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Route to login
userController.post('/login', [
    body('user_name').notEmpty(),
    body('password').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { user_name, password } = req.body;

    try {
        const user = await User.findOne({ user_name });

        if (user && await bcrypt.compare(password, user.password_hash)) {
            const accessToken = jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: '1h' });
            console.info(`User ${user_name} logged in successfully`);
            return res.status(200).json({ message: 'Login successful', access_token: accessToken });
        }

        console.error("Invalid login credentials");
        return res.status(401).json({ error: "Invalid credentials" });

    } catch (err) {
        console.error("Error during login process:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = userController; // Export the router
