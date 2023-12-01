const express=require('express');
const cors = require('cors');
const mongoose=require("mongoose");
const jwt=require('jsonwebtoken');
const User=require('./models/User.js')
require('dotenv').config()
const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

app.get('/test',(req,res)=>{
    res.json('test ok');
});
app.post('/register', async (req, res) => {
    const { name, email, password, userType } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json('Email already exists');
        }

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            password,
            userType,
        });

        res.json(newUser);
    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((err) => err.message);
            return res.status(422).json(errors);
        }

        // Internal server error
        console.error('Error during registration:', error);
        res.status(500).json('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email });

        if (userDoc) {
            if (password === userDoc.password) {
                // Passwords match
                res.json(userDoc);
            } else {
                // Passwords don't match
                res.status(422).json('Invalid email or password');
            }
        } else {
            // User not found
            res.status(422).json('Invalid email or password');
        }
    } catch (error) {
        // Internal server error
        res.status(500).json('Internal Server Error');
    }
});
app.get('/profile',(req,res)=>{
    res.json('user info');
})

  
app.listen(4000); 