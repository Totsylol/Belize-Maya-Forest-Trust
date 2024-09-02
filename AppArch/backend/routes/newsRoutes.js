const express = require('express');
const multer = require('multer');
const File = require('../models/newsModel'); 
const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/news', upload.single('image'), async (req, res) => {
    try {
        const { title, year, author, description } = req.body;
        const image = req.file;

        if (!image) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const newFile = new File({
            name: image.originalname,
            type: image.mimetype,
            content: image.buffer,
            title: title,
            year: year,
            author: author,
            description: description,
        });

        await newFile.save();

        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (err) {
        console.error('Error uploading the file:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/news', async (req, res) => {
    try {
        const newsPosts = await File.find({});
        res.status(200).json(newsPosts);
    } catch (err) {
        console.error('Error fetching news posts:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
