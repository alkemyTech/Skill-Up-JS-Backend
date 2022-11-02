const bcrypt = require('bcrypt');
const { User } = require('../database/models');

exports.CreateUser = (conditions, body)=>{
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(body.password, salt);      

    const [user, created] = await User.findOrCreate({
      where: conditions,
      defaults: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: passwordHashed
      }
    });

    return {user, created}
}