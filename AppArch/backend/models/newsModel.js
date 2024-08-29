const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // Assuming you're storing the file path or URL
});

const News = mongoose.model('News', newsSchema);

module.exports = News;