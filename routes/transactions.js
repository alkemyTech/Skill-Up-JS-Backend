const express = require("express");
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getBalance,
} = require("../controllers/transactions");
const { validateTransaction } = require("../middlewares/transactionValidators");
const { authMiddleware } = require("../helpers/tokensFunctions");

const router = express.Router();

router
  .route("/")
  .get(getTransactions)
  .post(validateTransaction, createTransaction);

router
  .route("/:id")
  // .get(getTransactionById)
  .put(updateTransaction)
  .delete(deleteTransaction);

router.get("/balance", getBalance);
router.post("/send", createTransaction);
module.exports = router;
