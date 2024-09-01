const express = require('express');
const multer = require('multer');
const newsController = require('../controllers/newsController');
const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });


router.post('/api/news', upload.single('image'), newsController.uploadNewsPost);

module.exports = router;
