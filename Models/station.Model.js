const createError = require('http-errors');
var monk = require('monk')

//var db = monk("mongodb://localhost:27017/dbstolenreport");
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0")
 // lcokReport 
module.exports = {
    lock_station : async ( req , res , next) => {

        let unlock_report  = {
            _id : req.body.id ,
             $set: { status:  "lockByStaion" , "station" : "stationex" } 
        }

        db.get("car_stolenreport").findOneAndUpdate(unlock_report ).then((result) => {

                if(result !== null || result !== undefined ) {

                    res.json({"status" : true ,"message" : "lockByStation suscess"})

                }else {
                    res.json({"status" : false ,"message" : "lockByStation error"})
                }

            

        } )

    }

 } 