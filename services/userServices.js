const bcrypt = require('bcrypt');
const { User } = require('../database/models');
const { ErrorObject } = require('../helpers/error');

const createUserService = async(conditions, body)=>{
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(body.password, salt);      

    const [user, created] = await User.findOrCreate({
      where: conditions,
      defaults: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: passwordHashed,
        avatar: body.avatar,
        roleId: body.roleId
      }
    });

    return {user, created}
}

const checkUserExistence = async(conditions)=>{
  try{
    const userExist = await User.findOne({
      where: conditions
    });
    
    if(userExist === null){
      return false;
    }
    else{
      return true;
    }
  }
  catch(err){
    return new ErrorObject(err.message, 500, err);
  }
}

const userUpdateService = async(conditions, body)=>{
  try{
    const checkUser = await checkUserExistence(conditions);
    if(!checkUser){
      return null;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(body.password, salt);  

    const userBody = {
      ...body,
      password: passwordHashed
    }

    User.update(userBody, {
      where: conditions,
    });

    return userBody;
  }
  catch(err){
    return new ErrorObject(err.message, 500, err);
  }
}

module.exports = {
  createUserService,
  userUpdateService
}