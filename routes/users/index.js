const express = require('express');
const bcrypt = require('bcrypt')
const { models } = require('../../libs/sequelize');

const router = express.Router();



router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: {
        id
      },
      include: ["role"]
    })
    const account = await models.Account.findOne({
      where: {
        userId: id
      }
    })
    if (user && account) res.send({ user, account })
    else throw new Error("User not found")
  } catch (error) {
    res.status(404).send(error.message)
  }


})

router.post('/create', async (req, res) => {
  // backlog says: - Deberá encriptar la contraseña en la base de datos con la librería bcrypt
  // so we need to implement a middleware on the DB to hash it OR a method inside the schema
  // I'm gonna do it here because I've never use sequelize's inyection in class way. tomorrow in the daily I'll be commenting this.
  let { schema } = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account
  // user as a roleId
  try {
    const saltRounds = 10;
    const pass = await bcrypt.hash(schema.password, saltRounds).then(function (hash) {
      return hash;
    });
    // TODO: if not already exists, create an account
    const [row, created] = await models.User.findOrCreate({
      where: {
        email: schema.email
      },
      defaults: {
        ...schema,
        password: pass
      }
    })
    if (created) {
      //here the axios.post with userId to accounts.post/create to link an account in a new user
      // if needed also to fetch the description of the role
      return res.status(201).send(row);
    }
    else throw new Error('This email belongs to an existing account')

  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
