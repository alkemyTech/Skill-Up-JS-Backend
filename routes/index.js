const express = require('express');
const userRouter = require('./users')
const accountRouter = require('./accounts')

function routerApi(app) {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send("Hola mundo")
  })
  app.use('', router);

  router.use('/user', userRouter);
  router.use('/account', accountRouter)
}

module.exports = routerApi;
