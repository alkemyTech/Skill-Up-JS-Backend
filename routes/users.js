const express = require('express')
const { get, createUser, updateUser, deleteUser, updateUserPassword} = require('../controllers/users')

const router = express.Router()

router.get('/', get);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/changepassword/:id', updateUserPassword)

module.exports = router