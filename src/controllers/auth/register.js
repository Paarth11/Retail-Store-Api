require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../db/model/userModel');

const register =  async (req, res) => {
    try {
      // register
      const { username, password, email } = req.body;
      if (!(username && password && email)) {
        res.status(400).json('Please fill the the details');
      }
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        res.status(400).json('User already exists');
      }
      // Encrypt password using bcrypt
      encryptedPassword = await bcrypt.hash(password, 12);
  
      // Create user in the database
      const user = await User.create({
        username,
        password: encryptedPassword,
        email: email.toLowerCase(),
      });
  
      // create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );

      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = register; 
  
