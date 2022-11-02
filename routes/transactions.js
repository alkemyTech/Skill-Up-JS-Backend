const express = require('express')
const {
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactions')

const router = express.Router()

router.route('/').get(getTransaction).post(createTransaction)

router.route('/:id').put(updateTransaction).delete(deleteTransaction)
module.exports = router