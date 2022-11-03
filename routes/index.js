const express = require('express');
const userRouter = require('./users')
const accountRouter = require('./accounts')
const roleRouter = require('./roles');

function routerApi(app) {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send("Hola mundo");
  })
  app.use('', router);

  router.use('/user', userRouter);
  router.use('/account', accountRouter);
  router.use('/', roleRouter);
}

module.exports = routerApi;
