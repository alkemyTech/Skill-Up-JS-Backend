const express = require('express');

const { models } = require('../../libs/sequelize');

const newUser = {
  firstName: 'Carlos',
  lastName: 'Senger',
  email: 'email@mail.com',
  password: 'asdfdfdf',
  roleId: 1
}

const newRole = {
  name: 'client',
  description: 'un cliente'
}

const newAccount = {
  userId: '047c8790-40cf-4547-bf8a-97dcbd327ff7'
}

const newTransaction = {
  amount: 50,
  type: 'esto se borra',
  accountId: '742d3398-db22-4ef9-a43d-2a5f23f8cc73',
}

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // const rta3 = await models.Role.create(newRole);
    // const rta4 = await models.User.create(newUser);
    // const rta3 = await models.Account.create(newAccount);
    const rta3 = await models.Transaction.create(newTransaction);
    res.send(rta3);
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;
