const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET_KEY = 'your_secret_key'; // Replace with your own secret key

router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  // For simplicity, we use a hardcoded user. In a real application, you should check the user credentials from a database.
  const user = { name: username };
  const accessToken = jwt.sign(user, SECRET_KEY);
  res.json({ accessToken });
});

module.exports = router;
