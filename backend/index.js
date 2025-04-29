const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/UserRData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
