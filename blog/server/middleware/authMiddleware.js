const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// Middleware to authenticate the user
const authenticateUser = (req, res, next) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Missing authentication token' });
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the user ID to the request object
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid authentication token' });
  }
};

module.exports = {
  authenticateUser,
};
