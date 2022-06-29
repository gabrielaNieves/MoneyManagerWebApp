const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

//Routes
router.post('/register', userAPIController.register);
router.post('/login',userAPIController.auth_login );
router.get('/logout', userAPIController.auth_logout)
router.get('/:id',userAPIController.list);


module.exports = router;