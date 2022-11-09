const { validationResult } = require('express-validator');
const fs = require('fs');
const createHttpError = require('http-errors');

const handleValidator = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    //if file exits and validation fail we must delete the file uploaded
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) return res.status(400).send({ errors: err.array() });
      })  
    }  
    return res.status(400).send({ errors: err.array() });
  }
};

module.exports = {
  handleValidator,
};