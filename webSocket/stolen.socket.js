var monk = require('monk')
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0");
const config = require('../index')
const IO = config.ws
console.log(IO)
IO.on("connection" , (socket) => {
    console.log("connected cliend socketID >>" ,socket.id)
    setInterval(() => {
        try {

        db.get("car_stolenreport").find( { status : 'report'} , (err , result) => {
            
                IO.emit("list-count-stolenreport" , result.length)
                IO.emit("list-stolenreport" , JSON.stringify(result))
               // socket.emit("count-list-stolenreport" ,  )
        } )
    }catch(err){ console.log(err) }

    }, 15000 );



})