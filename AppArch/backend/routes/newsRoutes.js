const express = require('express');
const multer = require('multer');
const File = require('../models/newsModel');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/news', upload.single('image'), async (req, res) => {
    try {
        const { title, year, author, description, tag } = req.body; 
        const image = req.file;

        if (!image) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        if (!['news', 'newsletter', 'annual report'].includes(tag)) {
            return res.status(400).json({ error: 'Invalid tag' });
        }

        const newFile = new File({
            name: image.originalname,
            type: image.mimetype,
            content: image.buffer,
            title: title,
            year: year,
            author: author,
            description: description,
            tags: tag  
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
        const filter = {};
        if (req.query.tag) {
            filter.tags = req.query.tag;
        }
        const newsPosts = await File.find(filter); // Find files based on the filter
        res.status(200).json(newsPosts);
    } catch (err) {
        console.error('Error fetching news posts:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/news/:title', async (req, res) => {
    try {
      const newsPost = await File.findOne({ title: req.params.title }); // Find the news by title
      if (!newsPost) {
        return res.status(404).json({ error: 'News post not found' });
      }
      res.status(200).json(newsPost);
    } catch (err) {
      console.error('Error fetching news post:', err);
      res.status(500).json({ error: 'Server error' });
    }
});
  

module.exports = router;
