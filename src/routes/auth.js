require('dotenv').config();
const express = require('express');
const register = require('../controllers/auth/register');
const router = express.Router();
const auth = require('../middleware/is-auth');

router.post('/register', register);
router.get('/welcome', auth, (req, res) => {
  res.json('welcome');
});

module.exports = router;
