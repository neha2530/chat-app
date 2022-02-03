const express = require("express")
const router = express.Router()
const db = require("./../database")

router.get("/api/users" ,async (req,res,next)=>{
    try {
        // Perpare Query to get data;
        //get data from database;
        //send data back to FE;
        const query = "select Email,FirstNAME  from users"
        const data = await db.executeQuery(query)
        return res.send({message: "users list",data:data})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
} ) 
module.exports =router;
