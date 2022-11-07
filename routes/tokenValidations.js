const express = require("express");
const { checkToken } = require("../controllers/tokenValidations");

const router = express.Router();

router.get("/", checkToken);

module.exports = router;
