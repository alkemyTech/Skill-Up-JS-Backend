const express = require("express");
const { decode, verify, encode } = require("../controllers/auth");

const router = express.Router();

router.post("/login", encode);
// router.get("/me", decode);
// router.get("/verify", verify);

module.exports = router;
