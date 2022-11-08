const express = require('express');
const ctrlUser = require('../../controllers/users');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await ctrlUser.get(id);
    return res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  let schema = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account
  // user as a roleId
  try {
    let user = await ctrlUser.post(schema);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    await ctrlUser.delete(id);
    res.status(200).send('deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
