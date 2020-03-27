var monk = require('monk')
var db = monk("mongodb://localhost:27017/dbstolenreport");
const config = require('../config/Config')
const IO = config.server 

IO.on("connection" , (socket) => {

    setInterval(() => {
        try {

        db.get("car_stolenreport").find( { status : 'report'} , (err , result) => {
            
                IO.sockets.emit("list-count-stolenreport" , result.length)
                IO.socket.emit("list-stolenreport" , JSON.stringify(result))
               // socket.emit("count-list-stolenreport" ,  )
        } )
    }catch(err){ console.log(err) }

    }, 1000 );



})