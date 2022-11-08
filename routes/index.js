const express = require("express");
const usersRouter = require("./users");
const authRouter = require("./login");
const transactionsRouter = require("./transactions");
const categoriesRouter = require("./category");
const router = express.Router();
const tokenRouter = require("./tokenValidations");

// example of a route with index controller get function
router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/transactions", transactionsRouter);
router.use("/token", tokenRouter);
router.use("/categories", categoriesRouter);
module.exports = router;
