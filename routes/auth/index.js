const express = require('express');
const auth = require('../../controllers/auth');
const router = express.Router()


router.post('/', async(req, res, next) => {
  try {
    const body = req.body;

    res.status(201).send(body);
  } catch (error) {
    next(error);
  }
})

module.exports = router
