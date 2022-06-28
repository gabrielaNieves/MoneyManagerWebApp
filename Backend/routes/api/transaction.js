const express = require('express');
const router = express.Router();
const transactionAPIController = require('../../controllers/api/transactionController');

//Routes
router.get('/transaction',transactionAPIController.list)
router.post('/transaction/:account/add',transactionAPIController.add)


module.exports = router