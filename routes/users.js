const express = require('express')
const { get, createUser, updateUser, deleteUser} = require('../controllers/users')

const router = express.Router()

router.get('/', get);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router