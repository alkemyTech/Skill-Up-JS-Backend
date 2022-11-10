const {check} = require('express-validator')
const {validateResult} = require ('../helpers/validateHelper')


const validateTransaction = [
    check('amount')
    .exists()
    .custom((value,{req}) => {
        if(value <= 0){
            throw new Error('Amount must be greater than 0')
        }
        return true
    }),
    check('description')
    .exists()
    .not()
    .isEmpty(),
    check('userId')
    .exists()
    .not()
    .isEmpty(),
    check('categoryId')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = {validateTransaction}