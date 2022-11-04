const express = require("express");
const { get, create } = require("../controllers/roles");

const router = express.Router();

router.get("/", get);
router.post("/", create);

module.exports = router;
