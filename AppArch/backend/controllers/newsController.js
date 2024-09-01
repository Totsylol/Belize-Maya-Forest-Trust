// controllers/newsController.js
const File = require('../models/file'); // Adjust path to your file model

// Controller function to handle file uploads
exports.uploadNewsPost = async (req, res) => {
    try {
        const { title, year, author, description } = req.body;
        const image = req.file;

        if (!image) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Create a new document with the file and metadata
        const newFile = new File({
            name: image.originalname,
            type: image.mimetype,
            content: image.buffer,
            title: title,
            year: year,
            author: author,
            description: description,
        });

        // Save the document to the database
        await newFile.save();

        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (err) {
        console.error('Error uploading the file:', err);
        res.status(500).json({ error: 'Server error' });
    }
};