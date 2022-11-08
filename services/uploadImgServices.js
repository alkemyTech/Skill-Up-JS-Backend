const {v4: uuid} = require('uuid');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, next) => {
        const destFilename = uuid() + path.extname(file.originalname);
        next(
            null,
            destFilename,
            req.body.mimetype = file.mimetype
        )
    },
});

const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/uploads'),
}).single('image');

module.exports = { upload }
