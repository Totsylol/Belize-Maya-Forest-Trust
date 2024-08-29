const News = require('../models/newsModel');

const addNews = async (req, res) => {
    try {
        const { title, year, author, description, image } = req.body;

        const news = new News({
            title,
            year,
            author,
            description,
            image,
        });

        const createdNews = await news.save();
        res.status(201).json(createdNews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { addNews };