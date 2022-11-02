const createHttpError = require('http-errors')
const { Transaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await Transaction.findAll()
      endpointResponse({
        res,
        message: 'Transactions retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transactions] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: createAsync(async (req, res, next) => {
    const { amount, description, userId, categoryId, date } = req.body;
    try {
      const response = await Transaction.create({ amount, description, userId, categoryId, date })
      endpointResponse({
        res,
        message: 'Transaction created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transactions] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: createAsync(async (req, res, next) => {

  })
}
