const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
   const rta = 'hola mundo';
   res.send(rta);
 })

module.exports = router
