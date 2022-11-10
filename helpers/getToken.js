const createHttpError = require("http-errors");
const {decodeToken, verifyToken} = require('../helpers/tokenizer');

const getToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;

      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken; 
      req.user = decodeToken(bearerToken);
      let verifiedDecodeToken

      if (!(verifiedDecodeToken = verifyToken(bearerToken))) {
        throw new Error('Invalid token or missing');
      }

      next();  

  } catch (error) {

    const httpError = createHttpError(
      error.statusCode = 400,
      `[Error auth user] - [index - LOGIN]: ${error.message}`,
    );
    next(httpError);
    
  }

};

module.exports = getToken;
