const express = require('express');
const router = express.Router();
const transactionAPIController = require('../../controllers/api/transactionController');

//Routes
router.get('/transaction',transactionAPIController.list)
router.post('/transaction/add',transactionAPIController.add)
router.put('/transaction/:id/edit', transactionAPIController.edit)
router.delete('/transaction/delete/:id', transactionAPIController.delete); 

module.exports = router