const jwt = require("jsonwebtoken")
const secret = process.env.SECRET

let verifiedToken = ""

const tokenizer = {
    // Generate token
    encodeToken: (data, res) => {
        const newToken = jwt.sign({
            data,
        }, secret, { expiresIn: '6000s' });
        return newToken;  
    },
    // Decode token
    decodeToken: (token) =>{
        const  decodeToken = jwt.decode(token)
        return decodeToken
    },
    // Verify token
    verifyToken: (token, res) =>{
        return jwt.verify(token, secret)
    }
}

module.exports = tokenizer;