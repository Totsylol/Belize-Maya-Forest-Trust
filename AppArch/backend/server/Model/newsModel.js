const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    images: { type: [String], default: [] }, 
    description: { type: String, required: true },
    author: { type: String, required: true }, 
    posted_at: { type: Date, default: () => new Date().toISOString() },
    location: { type: String, required: true },
});

postSchema.methods.serialize = function() {
    return {
        images: this.images,
        description: this.description,
        author: this.author,
        posted_at: this.posted_at ? this.posted_at.toISOString() : null,
        location: this.location,
    };
};

module.exports = mongoose.model('Post', postSchema);
