const express = require("express");
const { get } = require("../controllers/users");

const router = express.Router();

router.get("/", get);

router.get("/api", (req, res) => {
  res.json({
    asd: "jhg",
  });
});

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
