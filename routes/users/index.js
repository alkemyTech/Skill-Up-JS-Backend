const express = require('express');
const ctrlUser = require('../../controllers/users');
const router = express.Router();
const { authenticateUser, checkRole } = require('../../middlewares/authentication.middleware');

router.get(
  '/:id',
  authenticateUser,
  checkRole([1, 3]),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      let user = await ctrlUser.get(id);
      return res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/',
  authenticateUser,
  async (req, res, next) => {
    const id = req.user.sub;
    try {
      let user = await ctrlUser.get(id);
      return res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/create', async (req, res, next) => {
  let { schema } = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account
  // user as a roleId
  try {
    let user = await ctrlUser.post(schema);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});

router.delete(
  '/:id',
  authenticateUser,
  checkRole([1, 3]),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      await ctrlUser.delete(id);
      res.status(200).send('deleted');
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/',
  authenticateUser,
  async (req, res, next) => {
    const id = req.user.sub;

    try {
      await ctrlUser.delete(id);
      res.status(200).send('deleted');
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
