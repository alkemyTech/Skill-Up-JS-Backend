const express = require("express");
const {
  createCategory,
  getCategories,
  getCategoryById,
  modifyCategory,
  deleteCategory,
} = require("../controllers/categories");

const router = express.Router();

router.post("/", createCategory);

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.put("/:id", modifyCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
