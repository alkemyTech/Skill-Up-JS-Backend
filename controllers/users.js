const createHttpError = require('http-errors')
const { User } = require('../database/models')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync');
const { createUserService, userUpdateService, userDeleteService } = require('../services/userServices');

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
      `[Error creating user] - [index - POST]: ${err.message}`,
    );
    next(httpError);
  }
}

const updateUser = async(req, res, next)=>{
  try{
    const {firstName, lastName, password, avatar, roleId} = req.body;
    const userBody = {
      firstName,
      lastName,
      password,
      avatar,
      roleId
    }
    
    const userUpdated = await userUpdateService({id: req.params.id}, userBody);

    if(!userUpdated){
      endpointResponse({
        res,
        message: 'The user does not exist',
      });
    }
    else{
      endpointResponse({
        res,
        message: 'The user has been updated',
        body: userUpdated
      });
    }
  }
  catch(err){
    const httpError = createHttpError(
      err.statusCode,
      `[Error updating user] - [index - PUT]: ${err.message}`,
    );
    next(httpError);
  }
}

const deleteUser = catchAsync(async(req, res, next)=>{
  try{
    const idUser = req.params.id

    const userDeleted = await userDeleteService({id: idUser})

    if(!userDeleted){
      endpointResponse({
        res,
        message: 'The user does not exist',
      });
    }
    
    endpointResponse({
      res,
      message: 'The user has been deleted',
      body: userDeleted
    });
  }
  catch(err){
    const httpError = createHttpError(
      err.statusCode,
      `[Error deleting user] - [index - DELETE]: ${err.message}`,
    );
    next(httpError);
  }
})

module.exports = {
  get,
  createUser,
  updateUser,
  deleteUser
}