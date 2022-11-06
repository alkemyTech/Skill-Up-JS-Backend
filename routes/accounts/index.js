const express = require('express');
const ctrlAccount = require("../../controllers/account");
const router = express.Router()


router.put('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    let updated = await ctrlAccount.update(id, 500)
    res.status(200).send(updated)
  } catch (error) {
    next(error)
  }

})

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

router.get('/:id', async (req, res, next) => {

  const { id } = req.params;

  try {
    let account = await ctrlAccount.getAccount(id);
    res.status(200).send(account)
  } catch (error) {
    next(error)
  }
})

module.exports = router
