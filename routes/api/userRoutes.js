const express = require('express')
const router = express.Router();
const userController = require('../../controllers/user_controller')

// CREATE a new user
router.post('/',userController.createUser);

module.exports = router;
