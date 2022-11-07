const { isTokenValid } = require("../utils/createJwt");
const boom = require('@hapi/boom');

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(boom.unauthorized("No hay un token presente"));
  }
  const token = authHeader.split(" ")[1];
  try {
    const payloadDecoded = isTokenValid(token);
    req.user = { ...payloadDecoded };
    next();
  } catch (error) {
    next(boom.unauthorized("El token no es valido"));
  }
};

module.exports = authenticateUser;
