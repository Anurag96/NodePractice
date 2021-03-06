//api/user

const userController = require("../controller/user-controller")
const express = require('express');
const router = express.Router();

router.put('/',userController.update)
//api/user/id
router.get('/:id',userController.getByID)
router.delete('/:id',userController.delete)

module.exports = router;