const http = require("http");

const { Server } =  require("socket.io");

const app = require("./app");
console.log(app)
const server = http.createServer(app);



 const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

module.exports = {server, io}