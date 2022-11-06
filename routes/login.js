const express = require("express");
const { signUp, signIn } = require("../controllers/login");

const router = express.Router();

router.route("/").post(signUp).post(signIn);

// const authCtrl = require("../controllers/login");

router.route("/signUp").post(signUp);
router.route("/signIn").get(signIn);
module.exports = router;
