const express = require("express");
const database = require("./database")
const app = express();
const cors = require("cors");
const authController = require("./src/auth.controller")
const userController = require("./src/user.controller")
const tokenVerifer =  require("./src/services/token-verifier")

const unProtectedRoutes = [
    "/api/login",
    "/api/register"
]
app.use(cors({
    origin:"*"
}))
app.use((req, res, next) => {
    if(!unProtectedRoutes.includes(req.url)) {
        const tokenHeader = req.headers.authorization || "";
        const token = tokenHeader.substring(7);
        const userInfo = tokenVerifer.tokenVerifer(token);
        if(userInfo) {
            next();
        } else {
            return res.status(401).send({message: "Unauthorized"})
        }
    } else {
        next();
    }
    


})

app.use(express.json());
app.use(authController)  //app.use*outer)
app.use(userController)
app.listen(3000, () => {
    console.log("`Server is Started.");
    database.connectDatabase();

    // connect database
});


/*
*
*Table messages 
Columns sender reciever message time
*NgModel to get typed messgae
*
*
*/