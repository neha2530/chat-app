const {Server} = require("socket.io")

const io = new Server(server, {
    
});


io.on("connection", (socket) => {
  console.log("Socket bhi Connected")
});

module.exports =  io;
