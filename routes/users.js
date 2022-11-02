const express = require('express')
const {
   get,
} = require('../controllers/users')

const { models } = require('../libs/sequelize')

const router = express.Router()

router.get('/', async (req, res) => {
  const rta = await models.User.create({
    firstName: 'Alejandro',
    lastName: 'Senger',
    email: 'Alex.senger@hotmail.com',
    password: 'unPassSeguro:)',
    roleId: 1,
  })
  res.send(rta);
})


module.exports = router
