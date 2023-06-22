const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI, PORT } = require('./config');
const usersRouter = require('./routes/users');
const blogPostsRouter = require('./routes/blogPosts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const { authenticateUser } = require('./middleware/authMiddleware');

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Routes
app.use('/api/users', authenticateUser, usersRouter);
app.use('/api/blogPosts', authenticateUser, blogPostsRouter);
app.use('/api/comments', authenticateUser, commentsRouter);
app.use('/api/likes', authenticateUser, likesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app instance
module.exports = app;