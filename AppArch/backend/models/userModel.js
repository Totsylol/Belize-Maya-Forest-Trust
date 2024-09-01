const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // For generating unique user IDs

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4, // Automatically generate a unique user ID
    unique: true, // Ensure the userId is unique
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensure the email is unique
    lowercase: true, // Convert email to lowercase before saving
    trim: true, // Remove whitespace from email
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], // Basic email validation
  },
  username: {
    type: String,
    required: true, // Username is required
    unique: true, // Ensure the username is unique
    trim: true, // Remove whitespace from username
    minlength: [3, 'Username must be at least 3 characters long'], // Min length validation
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  verificationToken: {
    type: String,
    default: '', // Default value, can be set when needed
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
}, { collection: 'Users' }); // Explicitly setting the collection name to 'Users'

const User = mongoose.model('User', userSchema);

module.exports = User;
