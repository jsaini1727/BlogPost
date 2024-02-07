const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
      const newUser = req.body;
      // create the newUser with the hashed password and save to DB
      const userData = await User.create(newUser);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  };