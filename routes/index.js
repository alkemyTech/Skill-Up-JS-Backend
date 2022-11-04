
const express = require('express')
const usersRouter = require('./users')
const transactionsRouter = require('./transactions')
//const rolesRouter = require('./role')
const categoriesRouter = require('./category')
const router = express.Router()

// example of a route with index controller get function
router.use('/users', usersRouter)
router.use('/transactions', transactionsRouter)
//router.use('/roles', rolesRouter)
router.use('/categories', categoriesRouter)
module.exports = router;
