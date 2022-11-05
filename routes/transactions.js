const express = require('express');
const { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactions');

const router = express.Router();

router.get('/', getTransactions);
router.get('/:id', getTransaction);
router.post("/", createTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);


module.exports = router;