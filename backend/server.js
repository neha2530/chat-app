
const { server}  = require("./src/socketInstance");
const tokenVerifer=require("./src/services/token-verifier")
const database = require("./database")

server.listen(3000, () => {
    console.log(`Server is started!`)
    database.connectDatabase();
})

io.on("connection", (socket) => {
    const tokenHeader = socket.handshake.auth.token || "";
    const token = tokenHeader.substring(7);
    const userInfo = tokenVerifer.tokenVerifer(token);
    socket.join(userInfo.Email);
  console.log("Socket bhi Connected")
});

/*
*
*Table messages 
Columns sender reciever message time
*NgModel to get typed messgae
*
*
*/



// login k time token generate
// next request maiu voh bhejna jrrori hai
// agr  nhi bhjgi toh 401 ka error


/*
  1> create close button in each message ,
  2> button click pr id backend ko deni hai to delete it. deleteMessage(message.id))
  3> delete ki query bnani 
  4 execute krna us query ko
  5> return krna res.send({messagew: 'Messagw delete successfuylly.'})
*/