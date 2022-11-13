const express = require("express");
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getBalance,
  sendMoney,

  getAllTransactions,
} = require("../controllers/transactions");
const { validateTransaction } = require("../middlewares/transactionValidators");

const router = express.Router();

router.get("/admin/all", getAllTransactions);

router
  .route("/")
  .get(getTransactions)
  .post(validateTransaction, createTransaction);

router
  .route("/:id")
  .get(getTransactionById)
  .put(updateTransaction)
  .delete(deleteTransaction);

router.get("/balance/user", getBalance);
router.post("/send", sendMoney);
module.exports = router;
