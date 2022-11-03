const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
   const rta = 'Accounts';
   res.send(rta);
 })

module.exports = router
