const express = require('express');
const userRouter = require('./users')
const accountRouter = require('./accounts')

function routerApi(app) {
  const router = express.Router();
  app.use('', router);

  router.use('/user', userRouter);
  router.use('/account', accountRouter)
}

module.exports = routerApi;
