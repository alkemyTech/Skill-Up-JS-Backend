const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateUser = [
  check("email").exists().isEmail(),
  check("firstName").exists().not().isEmpty(),
  check("lastName").exists().not().isEmpty(),
  check("password").exists().isLength({ min: 6 }).isAlphanumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateUser };
