const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes.js');
const newsRoutes = require('./routes/newsRoutes.js');
const mailRoutes = require('./routes/mailRoutes.js');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.use('/api', newsRoutes);
app.use('/api', mailRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

