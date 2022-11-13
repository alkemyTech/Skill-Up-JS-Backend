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
    const { firstName, lastName, email, password, avatar } = req.body.values;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(400).send({ error: "User not found" });

      const hashPass = password
        ? await bcrypt.hash(password, 10).then((hash) => hash)
        : user.password;

      const emailExist = await User.findOne({ where: { email } });

      if (emailExist && emailExist.email !== user.email) {
        return res.status(404).send({ error: "Error Email Exist!" });
      }

      const response = await user.update({
        firstName,
        lastName,
        email,
        password: hashPass,
        avatar,
      });
      endpointResponse({
        res,
        message: "User updated successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error in put options] - [index - PUT]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
