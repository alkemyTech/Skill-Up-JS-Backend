const express = require('express')
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactions')
const {validateTransaction} = require("../middlewares/transactionValidators")

const router = express.Router()

router.route('/').get(getTransactions).post(validateTransaction, createTransaction)

router.route('/:id').get(getTransactionById).put(updateTransaction).delete(deleteTransaction)
module.exports = router