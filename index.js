const express =  require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")
const config = require("./config/Config")
// set server
const app = express() 
//config.server



// set 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// set  router path  
const StolenreportController = require('./Controller/Stolenreport.Controller')
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