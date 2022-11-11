const express = require('express');
const auth = require('../../controllers/auth');
const dataValidator = require('../../middlewares/dataValidator');
const loginSchema = require('../../schemas/login');
const router = express.Router();

router.post('/', dataValidator(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const rta = await auth.login(email, password);
    res.status(201).send(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
