// Filename: database.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const certPath = require('tls').rootCertificates.join('\n');

process.env.SSL_CERT_FILE = certPath;

async function connectDB(app) {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DATABASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true, 
            sslValidate: true, 
            sslCA: process.env.SSL_CERT_FILE || undefined, 
        });

        console.log(`Successful connection to MongoDB Atlas at ${process.env.MONGODB_URI}.`);
    } catch (error) {
        console.error(`An error occurred while connecting to MongoDB: ${error.message}`);
    }
}

module.exports = connectDB;
