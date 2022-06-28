const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

//Routes
router.get('/:id',userAPIController.list)


module.exports = router