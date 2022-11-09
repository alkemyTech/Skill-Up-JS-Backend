const express = require('express')
const { get, createUser, updateUser, deleteUser, updateUserPassword, testImg, loginUser} = require('../controllers/users');

const { upload } = require('../services/uploadImgServices');
const { schemaValidator } = require('../middlewares/validator');
const { image } = require('../schemas/image');
const { user } = require('../schemas/users');
const { login } = require('../schemas/login');


const router = express.Router()

router.get('/', get);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/changepassword/:id', updateUserPassword)

router.post('/login', schemaValidator(login), loginUser)

/** Test/example route for upload with multer
* router.post('/upload', upload, schemaValidator(image), testImg);
* router.post('/upload', upload, schemaValidator(user), schemaValidator(image), testImg);
* route + multer + schemas + controller method, use in that order
*/

module.exports = router