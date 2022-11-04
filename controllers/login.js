const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { createUser } = require("./users");
const db = require("../db");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
const bcrypt = require("bcrypt");

// example of a controller. First call the service, then build the controller method
module.exports = {
  signUp: catchAsync(async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashPass = await bcrypt.hash(password, 10).then(function (hash) {
        return hash;
      });
      if (!firstName || !lastName || !email || !password) {
        const httpError = createHttpError(
          404,
          `[Error retrieving info] - [index - POST]: 'Missing fields to fill'`
        );
        next(httpError);
      }

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        const user = await User.create({
          firstName,
          lastName,
          email,
          password: hashPass,
        });
        const token = jwt.sign({ id: user.id }, config.SECRET, {
          expiresIn: 86400,
        });
        endpointResponse({
          res,
          message: "User created successfully",
          body: { token, user },
        });
      } else {
        const httpError = createHttpError(
          404,
          `[Error email already exist] - [index - POST]: 'Error the email: ${email} already exist`
        );
        next(httpError);
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [index - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),

  signIn: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const userFound = await User.findOne({ where: { email } });
      if (!userFound)
        return res.json({ error: "Incorrect password or email." });
      const token = jwt.sign({ id: userFound.id }, config.SECRET, {
        expiresIn: 86400,
      });
      const validPassword = await User.prototype.comparePassword(
        password,
        userFound.password
      );
      if (!validPassword)
        return res.json({ error: "Incorrect password or email." });
      res.json({
        token,
        user: userFound,
      });
    } catch (err) {
      next(err);
    }
  }),
};
