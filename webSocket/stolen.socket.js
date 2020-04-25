var monk = require('monk')
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0");
const config = require('../index')
const IO = config.ws
const EventMap = IO.of('/Event')
IO.on("connection" , (socket) => {
    console.log("connected cliend socketID >>" ,socket.id)
    setInterval(() => {
        try {

        db.get("car_stolenreport").find( { status : 'report'} , (err , result) => {
            
                IO.emit("stolen-report-count" , result.length)
                IO.emit("stolen-report-lists" , JSON.stringify(result))
               // socket.emit("count-list-stolenreport" ,  )
        } )
    }catch(err){ console.log(err) }

    }, 15000 );


})


