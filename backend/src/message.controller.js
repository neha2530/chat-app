const express =require("express");
const router =express.Router();
const db = require("./../database");
const { v4: uuidv4 } = require('uuid');



router.post("/api/messages", async(req,res,next)=>{
    try {
        const query = `INSERT INTO Messages(  Sender, Reciever, Message, Time, ID) VALUES ('${req.body.sender}', '${req.body.reciever}', '${req.body.message}', '${new Date()}','${uuidv4()}' )`
        await db.executeQuery(query);
        
      io.to(req.body.reciever).emit("message", {email: req.body.sender} ) // to is basically list of users which a re currently using our applkicationnpm start
        return res.send({message: "Message Sent!!"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

router.get("/api/messages", async (req, res, next) => {
    try {

        const query  = `SELECT * from Messages
         WHERE 
         ((Sender ='${req.query.firstPerson}' AND Reciever = '${req.query.secondPerson}') 
        OR 
        (Sender = '${req.query.secondPerson}' AND Reciever = '${req.query.firstPerson}'))`;
    
        const response = await db.executeQuery(query);
    return res.send({message: "Your message list", data: response})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})
router.post("/api/deleteMessage",async(req,res,next)=>{
    try{
        const query =`DELETE FROM Messages
        Where ID='${req.body.messageID}'`
        const response=await db.executeQuery(query);
        io.to(req.body.reciever).emit("message", {email: req.body.sender} ) 
return res.send({message:"message has been deleted"})
     }catch(error){
return res.status(500).send({message:error.message})
    }

})


module.exports=router;
