const express = require('express')
const usersRouter = require('./users')
const transactionRouter = require('./transaction')

const router = express.Router()

// example of a route with index controller get function
router.use('/users', usersRouter)
router.use('/transactions', transactionRouter)


module.exports = router
