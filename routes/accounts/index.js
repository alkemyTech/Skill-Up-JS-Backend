const express = require('express')
const ctrlAccount = require("../../controllers/account");
const router = express.Router()

router.post('/create', async (req, res, next) => {
  const { userId } = req.body;
  // an account has a fk(userId)
  try {
    let account = await ctrlAccount.post(userId);
    res.status(201).send(account)
  } catch (error) {
    next(error)
  }
})

module.exports = router
