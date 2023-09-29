const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res
      .status(403)
      .json({ message: 'token is required for authentication' });
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    console.log(err);
  }
};

module.exports = verifyToken;
