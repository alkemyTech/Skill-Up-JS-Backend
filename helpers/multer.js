const multer = require("multer");
const path = require("path");
const { v4: uuid } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = { upload };
