const express = require('express')
const { get, createUser, updateUser, deleteUser, updateUserPassword, getUser} = require('../controllers/users')

const router = express.Router()

router.get('/', get);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/changepassword/:id', updateUserPassword)

router.get('/:id', getUser)

module.exports = router