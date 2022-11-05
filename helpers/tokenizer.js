const jwt = require("jsonwebtoken")
const secret = process.env.SECRET

let verifiedToken = ""

const tokenizer = {
    // Generate token
    encodeToken: (id, firstName, lastName, roleId, res) => {
        const newToken = jwt.sign({
            id, firstName, lastName, roleId,
        }, secret, { expiresIn: '6000s' });
        return newToken;  
    },
    // Decode token
    decodeToken: (token, res) =>{
        const  decodeToken = jwt.decode(token)
        return decodeToken;
    },
    // Verify token
    verifyToken: (token, res) =>{
        try {
            verifiedToken = jwt.verify(token, secret)
        } catch (error) {
            return error
        }
        return verifiedToken 
    }
}

module.exports = tokenizer;