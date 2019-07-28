var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.post('/addUser', userController.adduserConroller)

module.exports = router