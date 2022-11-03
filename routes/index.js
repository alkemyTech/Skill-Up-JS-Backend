const express = require('express')
//const usersRouter = require('./users')

const router = express.Router()

// example of a route with index controller get function

router.get('/', async (req, res) => {
    const rta = 'hola mundo';
    res.send(rta);
  })

module.exports = router
