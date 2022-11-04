const createHttpError = require('http-errors')
const { Category } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')


// example of a controller. First call the service, then build the controller method
module.exports = {
  getCategories: catchAsync(async (req, res, next) => {
    try {
      const response = await Category.findAll()
      endpointResponse({
        res,
        message: 'Categories retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving categories] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  getCategoryById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const response = await Category.findByPk(id)

      if (!response) {
        const httpError = createHttpError(
          401,
          `[Error retrieving categories] - [index - GET]: Couldn't find a category`, 
        )
        return next(httpError)
      }

      endpointResponse({
        res,
        message: 'Categories retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving categories] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  deleteCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    try {
      const response = await Category.destroy({where: {id}})
      endpointResponse({
        res,
        message: 'Categories removed successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting categories] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  createCategory: catchAsync(async (req, res, next) => {
    const { name, description } = req.body;
    if (!name || !description) {
      const httpError = createHttpError(
        400,
        `[Error creating category] - [index - POST]: All fields are required`

      )
      return next(httpError)
    }
    try {
      const response = await Category.create({ name, description })

      endpointResponse({
        res,
        message: 'Category created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating Category] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  updateCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      const httpError = createHttpError(
        400,
        `[Error updating category] - [index - POST]: All fields are required`

      )
      return next(httpError)
    }

    const foundCategory = await Category.findByPk(id)

    if (!foundCategory) {
      const httpError = createHttpError(
        401,
        `[Error updating category] - [index - PUT]: Couldn't find a category`,
      )
      return next(httpError)
    }
    try {
      const response = await foundCategory.update({ name, description })

      
      endpointResponse({
        res,
        message: 'Category update successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating Category] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
