const express = require('express')
const router = express.Router();
const userController = require('../../controllers/blog_controller')

// CREATE a new blog
router.post('/',blogController.createBlog);

module.exports = router;
