const express = require('express');
const nodemailer = require('nodemailer');
const Mail = require('../models/mailModel');

const router = express.Router();

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 0000,
    auth: {
        user: "YOUR_MAILTRAP_USER", // Replace with your Mailtrap credentials
        pass: "YOUR_MAILTRAP_PASS"  // Replace with your Mailtrap credentials
    }
});

router.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    const mailOptions = {
        from: 'newsletter@BMFT.org',
        to: email,
        subject: 'Newsletter Subscription',
        text: 'Thank you for subscribing to our newsletter!',
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        }

        try {
            const mail = new Mail({
                email: email,
                subject: 'Newsletter Subscription',
                content: 'Thank you for subscribing to our newsletter!',
                sentDate: new Date()
            });
            await mail.save();
            res.status(200).json({ message: 'Subscription successful, check your inbox!' });
        } catch (err) {
            console.error('Error saving email to database:', err);
            res.status(500).json({ message: 'Failed to save email data' });
        }
    });
});

module.exports = router;
