const createError = require('http-errors');
var monk = require('monk')

//var db = monk("mongodb://localhost:27017/dbstolenreport");
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0")
 // lcokReport 
module.exports = {
    userReport : async ( req , res , next) => {

        let report  = {
            "User_" :
             {
                "Profile":
                    {
                        "first_name":req.body.first_name , 
                        "last_name":req.body.last_name , 
                        "gender": req.body.gender          
                    },
                "Contact" : 
                    {
                        "email" :  req.body.email ,
                        "phone_number": req.body.phone_number
                    }
             } ,
             "User_car" : 
             {
                 "Lisence_plate": { "plate_number":req.body.plate_number,"plate_province":req.body.plate_province } , 
                 "detail_Car": 
                 {
                      "car_brand" : req.body.car_brand ,
                      "car_model" : req.body.car_model ,
                      "battery_type" : req.body.battery_type, 
                      "battery_size" : req.body.battery_size,
                      "connect_type" : [ req.body.connect_type1, req.body.connect_type2 ]
                  }
             },
             "Location" : {
                "Report"  : { "latitude": req.body.latitude , "longitude": req.body.longitude } , 
                "Station" : { "latitude": req.body.station_latitude , "longitude": req.body.station_longitude } ,
                "UnLock"  : { "latitude": req.body.unlock_latitude , "longitude": req.body.unlock_longitude }
             },
             "status": "report" , 
             "Staion" : req.body.station
        }
  /*      db.then(() => {
           console.log("connected")
          })*/
        //  res.json({"status":true , "message":"test"})
        
        db.get("car_stolenreport").insert(report , (err , result) => {

            if(!err || result!=null) {
                res.json ({
                    "status" : true , 
                    "message" : " Report suscess"
                })
            }else{
                res.json ( {
                    "status" : false , 
                    "message" : "Error Report"
                })
            }
        
        } )

    }

 } 