const createHttpError = require('http-errors')
const { Transaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  getTransactions: catchAsync(async (req, res, next) => {
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
  getTransactionById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const response = await Transaction.findByPk(id)

      if (!response) {
        const httpError = createHttpError(
          401,
          `[Error retrieving transaction] - [index - GET]: Couldn't find a transaction with the ID ${id}`,
        )
        return next(httpError)

      }
      endpointResponse({
        res,
        message: 'Transaction retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transaction] - [index - GET]: ${error.message}`,
      )
      return next(httpError)
    }
  }),
  createTransaction: catchAsync(async (req, res, next) => {
    const { amount, description, type, userId, categoryId } = req.body;

    // if (!amount || !description || !userId || !categoryId || !type) {
    //   const httpError = createHttpError(
    //     400,
    //     `[Error creating transactions] - [index - POST]: All fields are required`

    //   )
    //   return next(httpError)
    // }
    // if (amount <= 0) {
    //   const httpError = createHttpError(
    //     403,
    //     'apllication/json'
    //       `[Error creating transactions] - [index - POST]: Amount must be greater than 0`,
    //   )
    //   return next(httpError)
    // }
    const date = new Date()
    try {

      const response = await Transaction.create({ amount, description, date, type, userId, categoryId })

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
    const { userId, categoryId, amount } = req.body
    const { id } = req.params;
    if (!amount || !userId || !categoryId) {
      const httpError = createHttpError(
        400,
        `[Error updating transactions] - [index - PUT]: amount, userId, categoryId and date are required`,
      )
      return next(httpError)
    }
    if (amount <= 0) {
      const httpError = createHttpError(
        403,
        `[Error updating transactions] - [index - PUT]: Amount must be greater than 0`,
      )
      return next(httpError)
    }
    const foundTransaction = await Operation.findByPk(id)
    if (!foundTransaction) {
      const httpError = createHttpError(
        401,
        `[Error updating transactions] - [index - PUT]: Couldn't find a transaction with the ID ${id}`,
      )
      return next(httpError)
    }
    const date = new Date()
    try {
      const response = await foundTransaction.update({ amount, userId, categoryId, date })
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
