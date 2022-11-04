
const express = require('express')
const {
   get,
   getById,
   createUser,
   deleteById,
   editById
} = require('../controllers/users')
const {validateUser} = require("../middlewares/userValidators")

const router = express.Router();


router.get('/', get)
router.get('/:id', getById)
router.post('/', validateUser ,createUser)
router.delete('/:id',deleteById)
router.put('/:id',editById)


router.get("/login", (req, res) => {
  res.send(
    `<HTML>
      <head>
        <title>Login</title>
      </head>
      <body>
        <form action="/auth" method="POST">
          User: <input type="text" name="text" />
          <br />
          password: <input type="password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </body>
    </HTML>`
  );
});

module.exports = router;
