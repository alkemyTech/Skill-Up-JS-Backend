const express = require('express')

<<<<<<< HEAD:routes/users/index.js
=======

const { models } = require('../libs/sequelize')

>>>>>>> development:routes/users.js
const router = express.Router()

router.get('/', async (req, res) => {
   const rta = 'hola mundo';
   res.send(rta);
 })

<<<<<<< HEAD:routes/users/index.js
=======

>>>>>>> development:routes/users.js
module.exports = router
