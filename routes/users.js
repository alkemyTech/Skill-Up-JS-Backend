const express = require('express')
const userController = require('../controllers/users')

const router = express.Router()

router.get('/', userController.get);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser)

module.exports = router