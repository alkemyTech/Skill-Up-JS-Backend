const createHttpError = require("http-errors");
const { User } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { getPagination, paginateData } = require("../helpers/pagination");
const bcrypt = require("bcrypt");
// example of a controller. First call the service, then build the controller method
module.exports = {
  get: catchAsync(async (req, res, next) => {
    const { page = 0, size = 5 } = req.query;
    const { limit, offset } = getPagination(page, size);
    try {
      const data = await User.findAndCountAll({ limit, offset });

      const response = paginateData(data, page, limit);
      endpointResponse({
        res,
        message: "Users retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  getById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const response = await User.findByPk(id);
      if (response !== null) {
        endpointResponse({
          res,
          message: "Users retrieved successfully",
          body: response,
        });
      } else {
        const httpError = createHttpError(
          404,
          `[Error retrieving users] - [index - GET]: 'User not exist'`
        );
        next(httpError);
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  deleteById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        endpointResponse({
          res,
          message: "User deleted",
          body: "User deleted successfully",
        });
      } else {
        const httpError = createHttpError(
          304,
          `[Id not found] - [index - DELETE]: 'User not found'`
        );
        next(httpError);
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error in delete options] - [index - DELETE]: ${error.message}`
      );
      next(httpError);
    }
  }),
  editById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    try {
      const currentUser = await User.findByPk(id);
      const hashPass = password
        ? await bcrypt.hash(password, 10).then((hash) => hash)
        : currentUser.password;
      const userEdit = await User.update(
        {
          firstName: firstName || currentUser.firstName,
          lastName: lastName || currentUser.lastName,
          email: email || currentUser.email,
          password: hashPass,
        },
        {
          where: { id },
        }
      );
      if (userEdit[0] !== 0) {
        endpointResponse({
          res,
          message: "User updated successfully",
          //Si el body es 1 es que se modificaron bien los datos
          //Si es 0 no se modifico ningun dato tira
          body: userEdit[0],
        });
      } else {
        const httpError = createHttpError(
          304,
          `[Error in put options] - [index - PUT]: 'Not fields founds to update'`
        );
        next(httpError);
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error in put options] - [index - PUT]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
