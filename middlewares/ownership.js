const { ErrorObject } = require('../helpers/error');

const ownership = async (req, res, next) => {
  try {
    const { id: paramId } = req.params;
    const { id, roleId } = req.user;

    if (roleId === 1 || Number(paramId) === id) {
      return next();
    } else {
      res.status(403).send('[Restricted - You do not have the necessary permissions] - [Access - Denied]');
      throw new ErrorObject('Restricted', 403);
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = ownership;