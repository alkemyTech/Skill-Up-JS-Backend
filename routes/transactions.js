const express = require('express')
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactions')

const router = express.Router()

router.route('/').get(getTransactions).post(createTransaction)

router.route('/:id').get(getTransactionById).put(updateTransaction).delete(deleteTransaction)
module.exports = router