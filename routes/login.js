const express = require("express");
const { signUp, signIn } = require("../controllers/login");
const { upload } = require("../helpers/multer");
const { validateUser } = require("../middlewares/userValidators");
const router = express.Router();

router.post("/register", [validateUser, upload.single("avatar")], signUp);
router.post("/login",  signIn);
// const authCtrl = require("../controllers/login");

// router.route("/signUp").post(signUp);
router.route("/").get(signIn);
module.exports = router;
