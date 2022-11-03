const createHttpError = require('http-errors')
const { User } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync');
const { createUserService } = require('../services/userServices');

// example of a controller. First call the service, then build the controller method
const get = catchAsync(async (req, res, next) => {
  try {
    const response = await User.findAll()
    endpointResponse({
      res,
      message: 'Users retrieved successfully',
      body: response,
    })
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error retrieving users] - [index - GET]: ${error.message}`,
    )
    next(httpError)
  }
})

const createUser = async(req, res, next)=>{
  try{
    const {firstName, lastName, email, password, avatar, roleId} = req.body;
    const {user, created} = await createUserService({email: email}, {firstName: firstName, lastName: lastName, email: email, password: password, avatar: avatar, roleId: roleId});

    if(!created){
      endpointResponse({
        res,
        message: 'The email exists',
      });
    }
    else{
      endpointResponse({
        res,
        message: 'The user has been created',
        body: user
      });
    }
  }
  catch(err){
    const httpError = createHttpError(
      err.statusCode,
      `[Error retrieving users] - [index - GET]: ${err.message}`,
    );
    next(httpError);
  }
}


const updateUser = catchAsync(async(req, res, next)=>{
  endpointResponse({res, message: 'NOT IMPLEMENTED: This is an user update controller'})
})

const deleteUser = catchAsync(async(req, res, next)=>{
  endpointResponse({res, message: 'NOT IMPLEMENTED: This is an user delete controller'})
})

module.exports = {
  get,
  createUser,
  updateUser,
  deleteUser
}