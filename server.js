const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactDB');

// Define a schema for the contact form
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for handling POST requests to '/contact'
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();
        res.sendFile(path.join(__dirname, 'success.html'));
    } catch (err) {
        res.status(500).send('Error saving contact information.');
    }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
