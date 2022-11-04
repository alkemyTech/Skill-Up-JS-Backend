const express = require("express");
const { signUp, signIn } = require("../controllers/login");

const router = express.Router();

const authCtrl = require("../controllers/login");
const userVal = require("../middlewares/userValidations");

router.post("/signUp", userVal.checkUser, authCtrl.signUp);
router.post("/signIn", authCtrl.signIn);
