const express = require("express");
const app = express();
const path =require('path')
const cors = require("cors");
const authController = require("./auth.controller")
const userController = require("./user.controller")
const messageController = require("./message.controller")
const tokenVerifer =  require("./services/token-verifier")
const unProtectedRoutes = [
    "/api/login",
    "/api/register",
]
app.use(cors({
    origin:"*"
}))
app.use(express.static(path.join(__dirname, 'public')))
// app.use((req, res, next) => {
    
//     if(!unProtectedRoutes.includes(req.url) || req.url.includes("\\")) {
//         console.log(req.url)
//         const tokenHeader = req.headers.authorization || "";
//         const token = tokenHeader.substring(7);
//         const userInfo = tokenVerifer.tokenVerifer(token);
   
//         if(userInfo) {
//             req.loggedInEmail = userInfo.Email;
//             next();
//         } else {
//             return res.status(401).send({message: "Unauthorized"})
//         }
//     } else {
//         next();
//     }
    


// })

app.use(express.json());
app.use(authController);  
app.use(userController);
app.use(messageController);
    

    

module.exports=  app;


