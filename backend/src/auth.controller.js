const express = require("express")
const router = express.Router()
const db = require("./../database")
const jwt = require("jsonwebtoken")

router.post("/api/register", async (req, res, next) => {
    try {
        // check if email already exists
        const response =  await db.executeQuery(`Select * from users where email  = '${req.body.email}'`)
        console.log({x: response})
        if(response.length > 0 ) {
            return res.status(400).send({message: "Email already exist"})

        }
        const query = `INSERT INTO USERS (FirstNAME, Phone_No, Email, Password)
        VALUES('${req.body.firstname}','${req.body.phoneNo}','${req.body. email}' ,'${req.body. password}')`
// send data to 3rd and save it.
console.log({query})
   await db.executeQuery(query);
    return res.send({message: "User registered successfully"})

    }catch(error) {
        res.status(500).send({message: error.message})
    }
   })

   let x = 0;

router.post("/api/login",async (req,res,next)=>{
try{
    const response=  await db.executeQuery( `SELECT * from users where email='${req.body.email}' AND password= '${req.body.password}'`)

    if ( response.length>0){
        const payload = response[0];
        delete payload.Password
        const token = jwt.sign({...payload}, "xwewasfgjsj")
         return res.send({message:"login successfully",token:token})
    }
 else {
           return res.status(401).send({message : "chutiye password sahi daal", isloggedin:false})
 }   
} catch(error) {
    res.status(500).send({message:error.message})
}
})

module.exports = router; 