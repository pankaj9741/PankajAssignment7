const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/Products');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});