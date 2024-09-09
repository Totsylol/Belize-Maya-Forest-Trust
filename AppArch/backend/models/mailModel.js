const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    subject: {
        type: String,
        default: 'Newsletter Subscription'
    },
    content: {
        type: String,
        default: 'Thank you for subscribing to our newsletter!',
        required: true
    },
    sentDate: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Mail' });

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;
