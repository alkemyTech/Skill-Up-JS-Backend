const { Transaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const createHttpError = require('http-errors')


//Validation middleware is needed.

const getTransactions = async (req, res, next) => {
    try {
        const response = await Transaction.findAll({where:{userId: decodedUserId}})
        endpointResponse({
            res,
            message: 'Operacion Exitosa',
            body: response
        })
    } catch (error) {
        const httpError = createHttpError(error.statusCode, `Error retrieving transactions - ${error.message}`)
        next(httpError)
    }
}

const getTransaction = async (req, res, next) => {
    try {
        const response = await Transaction.findByPk(req.params.id)
        if(response){
            endpointResponse({
                res,
                message: 'Operacion exitosa',
                body: response
            })
        }
        else{
            res.status(404).json({error: "Transaction not found", status: 404 })
        }

    } catch (error) {
        const httpError = createHttpError(error.statusCode, `Error retrieving transaction by id - ${error.message}`)
        next(httpError)
    }
}

module.exports = { getTransactions, getTransaction}
