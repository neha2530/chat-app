
const jwt = require("jsonwebtoken")

exports.tokenVerifer = (token) => {
    let userInfo;
    try {
        userInfo =   jwt.verify(token, "xwewasfgjsj")
    } catch(error) {
        userInfo = "";
    }
    
    return userInfo
}