const express = require('express');

const { models } = require('../../libs/sequelize');

const router = express.Router();

router.post('/create', async (req, res) => {
  const { schema } = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account 
  // user as a roleId
  try {

    // backlog says: - Deberá encriptar la contraseña en la base de datos con la librería bcrypt
    // so we need to implement a middleware on the DB to hash it OR a method inside the schema
    // I'm gonna do it here because I've never use sequelize's inyection in class way. tomorrow in the daily I'll be commenting this.


    const [row, created] = await models.User.findOrCreate({
      where: {
        email: schema.email
      },
      defaults: {
        ...schema,
        roleId: "1"
      }
    })
    if (created) return res.status(201).send(row);
    else throw new Error("This email belongs to an existing account")

  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
