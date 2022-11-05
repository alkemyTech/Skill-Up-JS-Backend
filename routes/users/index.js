const express = require('express');
const bcrypt = require('bcrypt')
const { models } = require('../../libs/sequelize');
const userController = require("../../controllers/users");
const router = express.Router();



router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await userController.get(id);
    return res.status(201).send(user);
  } catch (error) {
    next(error)
  }
})

router.post('/create', async (req, res) => {

  let { schema } = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account
  // user as a roleId
  try {
    let user = await userController.post(schema);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
