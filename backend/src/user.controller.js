const e = require("express")
const express = require("express")
const router = express.Router()
const db = require("./../database")



router.get("/api/users" ,async (req,res,next)=>{
    try {
        // Perpare Query to get data;
        //get data from database;
        //send data back to FE;
        let query;
        const searchtxt= req.query.searchTxt
        if(searchtxt){
            query=  `select Email,FirstNAME  from users WHERE Email != '${req.loggedInEmail}' AND FirstNAME LIKE '%${searchtxt}%'`
        }else{
            query = `select Email,FirstNAME  from users WHERE Email != '${req.loggedInEmail}'`
        }
        console.log(query)
        const data = await db.executeQuery(query)
        return res.send({message: "users list",data:data})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
} ) 
module.exports =router;
