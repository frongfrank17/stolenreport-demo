const express =  require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")
const socketIO = require('socket.io')
const PORT = process.env.PORT || 8080
// set server
const app = express() 
const server  = http.createServer(app)
module.exports = { ws : socketIO(server)}

//config.server
server.listen( PORT,()=> console.log("running server port >>" , PORT))
//config.server.listen(PORT, () => console.log("Running server >>" , PORT))
// set 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// set  router path  
const StolenreportController = require("./Controller/stolenreport.Controller")
app.use("/api/stolen/v1/" , StolenreportController)
//  error catch 
app.use((req, res, next) => {
  
    const err = new Error('Not found');
  
    err.status = 404;
    
    next(err);
    
  });
  
app.use((err, req, res, next) => {
  
    res.status(err.status || 500);
  
    res.send({  error: {  status: err.status || 500 ,  message: err.message  } });
  
  });
require('./webSocket/stolen.socket')