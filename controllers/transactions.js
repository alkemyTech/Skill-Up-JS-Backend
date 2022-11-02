const createHttpError = require('http-errors')
const { Transaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  getTransaction: catchAsync(async (req, res, next) => {
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
  createTransaction: catchAsync(async (req, res, next) => {
    const { amount, description, userId, categoryId, date, type } = req.body;
    if (!amount || !description || !userId || !categoryId || !date || !type) {
      const httpError = createHttpError(
        400,
        `[Error creating transactions] - [index - POST]: All fields are required`,
      )
      next(httpError)
    }
    if (amount <= 0) {
      const httpError = createHttpError(
        403,
        `[Error creating transactions] - [index - POST]: Amount must be greater than 0`,
      )
      next(httpError)
    }
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
        `[Error creating transactions] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  updateTransaction: catchAsync(async (req, res, next) => {
    const { userId, categoryId, amount, date } = req.body
    const { id } = req.params;
    if (!amount || !userId || !categoryId || !date) {
      const httpError = createHttpError(
        400,
        `[Error updating transactions] - [index - PUT]: amount, userId, categoryId and date are required`,
      )
      next(httpError)
    }
    if (amount <= 0) {
      const httpError = createHttpError(
        403,
        `[Error updating transactions] - [index - PUT]: Amount must be greater than 0`,
      )
      next(httpError)
    }
    try {
      const response = await Transaction.update({ amount, userId, categoryId, date })
      endpointResponse({
        res,
        message: 'Transaction updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating transactions] - [index - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  deleteTransaction: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    try {
      const response = await Transaction.destroy({ where: { id } })
      endpointResponse({
        res,
        message: 'Transaction removed successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting transactions] - [index - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  })
}
