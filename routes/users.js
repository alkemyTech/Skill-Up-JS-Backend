const express = require("express");
const {
  get,
  getById,
  createUser,
  deleteById,
  editById,
} = require("../controllers/users");

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
// router.post("/", createUser); deprecated, use route /auth/signUp
router.delete("/:id", deleteById);
router.put("/:id", editById);

module.exports = router;
