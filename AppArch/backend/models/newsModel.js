const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    type: String,
    content: Buffer,
    title: String,
    year: Number,
    author: String,
    description: String,
    uploadDate: { type: Date, default: Date.now }
});

const File = mongoose.model('File', fileSchema, 'BMFT.News'); // Specify 'BMFT.News' collection

module.exports = File;