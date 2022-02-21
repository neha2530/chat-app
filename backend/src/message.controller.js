const express =require("express");
const router =express.Router();
const db = require("./../database");



router.post("/api/messages", async(req,res,next)=>{
    try {
        const query = `INSERT INTO Messages(  Sender, Reciever, Message, Time) VALUES ('${req.body.sender}', '${req.body.reciever}', '${req.body.message}', '${new Date()}')`
        await db.executeQuery(query);
        
      io.to(req.body.reciever).emit("message", {email: req.body.sender} ) // to is basically list of users which a re currently using our applkication
        return res.send({message: "bhej diya messga ho jayegi setting teri"})
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
module.exports=router;