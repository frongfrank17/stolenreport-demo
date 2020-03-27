const createError = require('http-errors');
var monk = require('monk')

var db = monk("mongodb://localhost:27017/dbstolenreport");
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
             "Location" : { "latitude": req.body.latitude , "longitude": req.body.longitude } , 
             "status": "report"
        }

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