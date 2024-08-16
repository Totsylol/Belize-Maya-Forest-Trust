const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const loginController = require('./Controller/loginController'); // Assuming you have the controller in this path

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and handling CORS
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

// Connect to MongoDB
async function connectDB() {
  try {
      await mongoose.connect(process.dotenv.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
  } catch (err) {
      console.error("MongoDB connection error:", err);
      process.exit(1);
  }
}

connectDB();

// Simple API endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Register the user controller routes under /api
app.use('/api', loginController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
