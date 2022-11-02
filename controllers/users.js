const createHttpError = require('http-errors');
const { User } = require('../database/models');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const bcrypt = require('bcryptjs');

// example of a controller. First call the service, then build the controller method
module.exports = {
    get: catchAsync(async (req, res, next) => {
        try {
            const response = await User.findAll();
            endpointResponse({
                res,
                message: 'Users retrieved successfully',
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
    post: catchAsync(async (req, res, next) => {
        const { body } = req;
        try {
            const emailExists = await User.findOne({
                where: { email: body.email },
            });
            if (emailExists) {
                const httpError = createHttpError(403, 'Email already exists');
                next(httpError);
            }

            const newUser = { ...body };
            const salt = bcrypt.genSaltSync();

            newUser.password = bcrypt.hashSync(body.password, salt);

            const response = await User.create(newUser);

            endpointResponse({
                res,
                message: 'User created successfuly',
                body: response,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error creating user] - [index - POST]: ${error.message}`
            );
            next(httpError);
        }
    }),
    put: catchAsync(async (req, res, next) => {
        const { body } = req;
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                const httpError = createHttpError(404, 'User does not exist');
                next(httpError);
            }

            const newUser = { ...body };

            if (newUser.password) {
                const salt = bcrypt.genSaltSync();
                newUser.password = bcrypt.hashSync(body.password, salt);
            }
            const response = await user.update(newUser);

            console.log(response);
            endpointResponse({
                res,
                message: 'User updated successfuly',
                body: response,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error updating user] - [index - PUT]: ${error.message}`
            );
            next(httpError);
        }
    }),

    getById: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                const httpError = createHttpError(404, 'User does not exist');
                return next(httpError);
            }
            endpointResponse({
                res,
                message: 'Users retrieved successfully',
                body: user,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `['Error retrieving user] - [index - GET]: ${error.message}`
            );
            return next(httpError);
        }
    }),
    del: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                const httpError = createHttpError(404, 'User does not exist');
                next(httpError);
            }
            user.destroy();
            endpointResponse({
                res,
                message: 'User deleted successfuly',
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error deleting user] - [index - DELETE]: ${error.message}`
            );
            next(httpError);
        }
    }),
};
