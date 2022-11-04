const {check} = require('express-validator')
const {validateResult} = require ('../helpers/validateHelper')

const validateUser = [
    check('email')
    .exists()
    .isEmail(),
    check('firstName')
    .exists()
    .not()
    .isEmpty(),
    check('lastName')
    .exists()
    .not()
    .isEmpty(),
    check('password')
    .exists()
    .isLength({min:6})
    .isAlphanumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

// const validateTransaction = [
//     check('amount')
//     .exists()
//     .custom((value,{req}) => {
//         if(value <= 0){
//             throw new Error('Amount must be greater than 0')
//         }
//         return true
//     }),
//     check('description')
//     .exists()
//     .not()
//     .isEmpty(),
//     check('userId')
//     .exists()
//     .not()
//     .isEmpty(),
//     check('categoryId')
//     .exists()
//     .not()
//     .isEmpty(),
//     check('type')
//     .exists()
//     .not()
//     .isEmpty(),
//     (req, res, next) => {
//         validateResult(req, res, next)
//     }
// ]


module.exports = {validateUser}