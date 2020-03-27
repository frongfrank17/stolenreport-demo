const socketIO = require('socket.io')
const app = require("express")()
const http = require("http").createServer(app)
const port  = process.env.PORT || 8081
module.exports = {
    socket : socketIO(http)  ,
    server : http.listen(port , () => console.log( "RUNING SERVER PORT >>> " ,port)) 
  
    
}