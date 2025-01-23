const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "albinshiju"
const User = require('../models/User')
const authenticateToken = require('./middlewares/authenticateToken');
const { getProfile } = require('./controllers/authController');
const app = express()

// Middleware to parse JSON
app.use(express.json())

// Enable CORS for all routes
app.use(cors())

// Define a port
const PORT = process.env.PORT || 5000

// MongoDB connection (using 127.0.0.1)
const dbURI = 'mongodb://127.0.0.1:27017/vediocallapp' // Replace with your database name


mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err))

// A simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to you r server!')
})

app.get('/data', (req, res) => {
  res.json('Welco me to your server!')
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body
  console.log('/auth/login', email, password)
  const existingUser = await User.findOne({ email })
  if (existingUser && existingUser.password === password) {
    const token = jwt.sign({ id: existingUser._id, email }, JWT_SECRET, {
      expiresIn: '1h',
    })
    res.status(200).json({ message: 'User verified', token })
  } else {
    res.status(401).json({ message: 'Unauthorized user' })
  }
})
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body
  try {

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "user already exists." })
    }

    const newUser = new User({ email, password })
    await newUser.save()

  } catch (error) {
    console.error('Error during registration:', error)
    res.status(500).json({ message: 'Internal server error.' })
  }
})
app.get('/api/auth/profile', getProfile , (req, res) => {
  // At this point, req.user contains the decoded token data
  res.status(200).json({ message: 'Token is valid', user: req.user });
}); 

// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
