/*var monk = require('monk')
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0");
const config = require('../config/Config')
const IO = config.server 

IO.on("connection" , (socket) => {

    setInterval(() => {
        try {

        db.get("car_stolenreport").find( { status : 'report'} , (err , result) => {
            
                IO.emit("list-count-stolenreport" , result.length)
                IO.emit("list-stolenreport" , JSON.stringify(result))
               // socket.emit("count-list-stolenreport" ,  )
        } )
    }catch(err){ console.log(err) }

    }, 1000 );



})*/