const express = require('express');
const { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactions');
const getToken = require('../helpers/getToken');
const { userAuthenticated } = require('../middlewares/userAuthenticated');
const { schemaValidator } = require('../middlewares/validator');
const { transactions } = require('../schemas/transactions');

const router = express.Router();

router.get('/', getToken, userAuthenticated, getTransactions);
router.get('/:id',  getToken, userAuthenticated, getTransaction);
router.post("/",  getToken, userAuthenticated, schemaValidator(transactions), createTransaction);
router.put("/:id", getToken, userAuthenticated, schemaValidator(transactions), updateTransaction);
router.delete("/:id",  getToken, userAuthenticated,deleteTransaction);


module.exports = router;