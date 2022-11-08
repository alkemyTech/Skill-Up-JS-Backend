const createHttpError = require('http-errors');
const { ErrorObject } = require('../helpers/error');

const userAuthenticated = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    if (Number(id) !== userId){
        res.status(403).send('[Unauthorized - You do not have authorization to perform this action] - [Access - Denied]')
        throw new ErrorObject('Unauthorized', 403);
    }
    return next();
  } catch (error) {
    const httpError = createHttpError(error.statusCode, `[Error] : ${error.message}`);
    return next(httpError);
  }
};

module.exports = { userAuthenticated };