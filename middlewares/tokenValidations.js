const jwt = require("jsonwebtoken");
const config = require("../config/config");
const db = require("../database/models");
const { User } = db;

async function checkToken(req, res, next) {
  const token = req.headers["x-access-token"];

  try {
    if (!token) return res.status(400).json({ message: "no token provided" });

    const tokenData = jwt.verify(token, config.SECRET); //colocar en .env
    req.userId = tokenData.id;
    const usrExists = await User.findOne({ where: { id: tokenData.id } });

    if (!usrExists)
      return res.status(400).json({ message: "user doesnt exist" });
    next();
  } catch (err) {
    return res.status(400).json({ message: err });
  }
}

module.exports = {
  checkToken,
};
