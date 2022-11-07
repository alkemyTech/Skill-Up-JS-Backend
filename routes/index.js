const express = require('express')
const usersRouter = require('./users')
const transactionsRouter = require('./transactions')
const categoriesRouter = require('./categories')

const router = express.Router()

// example of a route with index controller get function
router.use('/users', usersRouter)
router.use('/transactions', transactionsRouter)
router.use('/categories', categoriesRouter)

router.get('/', (_req, res) => res.json('OK'))

module.exports = router
