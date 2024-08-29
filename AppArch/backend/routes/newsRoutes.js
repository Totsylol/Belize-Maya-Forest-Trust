// newsRoutes.js
const express = require('express');
const { addNews } = require('../controllers/newsController');

const router = express.Router();

router.post('/news', addNews);

module.exports = router;
