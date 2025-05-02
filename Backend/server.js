const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./model/user'); // user.js inside the model folder
const app = express();

// Enable CORS for all origins (or restrict as needed)
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// MongoDB connection string (use your connection string)
const mongoURI = 'mongodb+srv://divesh:saini987@cluster0.tlvjl04.mongodb.net/stocksgod?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Signup route
app.post('/api/auth/signup', async (req, res) => {
  let { name, email, dob, password } = req.body;
  
  // Convert dob string to a Date object since the model expects a Date type.
  dob = new Date(dob);
  
  try {
    const newUser = new User({ name, email, dob, password });
    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    // Compare submitted password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    // For now, simply send a success response. In a real application, you might return a JWT token.
    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Server listening on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});