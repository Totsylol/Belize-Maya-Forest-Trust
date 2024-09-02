const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4, 
    unique: true, 
  },
  email: {
    type: String,
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true, 
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], 
  },
  username: {
    type: String,
    required: true, 
    unique: true, 
    trim: true, 
    minlength: [4, 'Username must be at least 3 characters long'], 
  },
  password: {
    type: String,
    required: true, 
  },
  verificationToken: {
    type: String,
    default: '', 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
}, { collection: 'Users' }); 

const User = mongoose.model('User', userSchema);

module.exports = User;
