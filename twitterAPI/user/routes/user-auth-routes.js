//api/user/auth

const express = require('express');
const router = express.Router();
const userAuthController = require('../controller/user-auth-controller');

router.post('/register',userAuthController.register)
router.post('/login',userAuthController.login)
router.delete('/delete',userAuthController.delete)

module.exports = router;