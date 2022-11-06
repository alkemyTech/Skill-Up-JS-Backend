const express = require("express");
const { get, getById, deleteById, editById } = require("../controllers/users");
const { validateUser } = require("../middlewares/userValidators");
const { signUp } = require("../controllers/login");

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", validateUser, signUp);
router.delete("/:id", deleteById);
router.put("/:id", editById);

module.exports = router;
