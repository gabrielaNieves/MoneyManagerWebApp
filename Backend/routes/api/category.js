const express = require('express');
const router = express.Router();
const categoryAPIController = require('../../controllers/api/categoryController');

//Routes
router.get('/category/:id', categoryAPIController)


module.exports = router