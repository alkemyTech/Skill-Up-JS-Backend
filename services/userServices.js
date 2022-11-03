const bcrypt = require('bcrypt');
const { User } = require('../database/models');

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


module.exports = {
  createUserService
}