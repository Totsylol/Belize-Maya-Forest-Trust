const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes.js');
const newsRoutes = require('./routes/newsRoutes.js');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', newsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

