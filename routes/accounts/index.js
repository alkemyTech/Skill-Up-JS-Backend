const express = require('express')
const { models } = require('../../libs/sequelize');
const router = express.Router()

//!!!!!! user should only have ONE account, right?    o.O     this creates multiple accounts for the same user!

router.post('/create', async (req, res) => {
  const { userId } = req.body; // if user fetchs here, will be passing an id to add
  // an account has a fk(userId)
  try {
    let account = await models.Account.create({
      userId
    })
    res.status(201).send(account)
  } catch (error) {
    res.status(400).send(error.message)
  }
  // need to create a row to be added to the user when its created.
  // user endpoint will fetch (axios) to this endpoint to collect the row created -> and from there include this model in the query result

})

module.exports = router
