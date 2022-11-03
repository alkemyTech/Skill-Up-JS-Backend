const { ErrorObject } = require("../helpers/error");
const { StatusCodes } = require("http-status-codes");
const { isTokenValid } = require("../utils/createJwt");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ErrorObject("No hay un token presente", StatusCodes.UNAUTHORIZED);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payloadDecoded = isTokenValid({ token });
    req.user = { ...payloadDecoded };
    next();
  } catch (error) {
    throw new ErrorObject("El token no es valido", StatusCodes.UNAUTHORIZED);
  }
};

module.exports = authenticateUser;
