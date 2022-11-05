const express = require('express')
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getBalance,
  sendMoney
} = require('../controllers/transactions')

const router = express.Router()

router.route('/').get(getTransactions).post(createTransaction)

router.route('/:id').get(getTransactionById).put(updateTransaction).delete(deleteTransaction)
router.get('/balance/:id', getBalance)
router.post('/send', sendMoney)
module.exports = router