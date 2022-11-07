const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { User } = require("../database/models");
const { catchAsync } = require("../helpers/catchAsync");
const createHttpError = require("http-errors");

module.exports = {
  checkToken: catchAsync(async (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log("asd");
    try {
      if (!token) {
        const httpError = createHttpError(
          404,
          `[Error no token provided] - [index - GET]: 'Error no token provided`
        );
        next(httpError);
      }

      const tokenData = jwt.verify(token, config.SECRET);
      req.userId = tokenData.id;
      const usrExists = await User.findOne({ where: { id: tokenData.id } });

      if (!usrExists) {
        const httpError = createHttpError(
          404,
          `[Error User not exist] - [index - POST]: 'Error User not exist`
        );
        next(httpError);
      }
      next();
    } catch (httpError) {
      next(httpError);
    }
  }),
};
