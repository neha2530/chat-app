
const jwt = require("jsonwebtoken")

exports.tokenVerifer = (token) => {
    let userInfo;
    try {
        userInfo =   jwt.verify(token, "xwewasfgjsj") // verify returns  ,that payload which we used while the creation of token. i.e in api/login
    } catch(error) {
        userInfo = "";
    }
    
    return userInfo
}