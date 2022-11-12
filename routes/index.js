const express = require("express");
const usersRouter = require("./users");
const authRouter = require("./login");
const transactionsRouter = require("./transactions");
const categoriesRouter = require("./category");
const { authMiddleware } = require("../helpers/tokensFunctions");
const router = express.Router();

// example of a route with index controller get function
router.use("/users", authMiddleware, usersRouter);
router.use("/auth", authRouter);
router.use("/transactions", authMiddleware, transactionsRouter);
router.use("/categories", authMiddleware, categoriesRouter);
module.exports = router;
