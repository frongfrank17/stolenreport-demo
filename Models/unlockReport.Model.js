const createError = require('http-errors');
var monk = require('monk')
 // unlock
var db = monk("mongodb://localhost:27017/dbstolenreport");
 module.exports = {
    unlockReport : async ( req , res , next) => {

        let unlock_report  = {
            _id : req.body.id ,
             $set: { status:  "unreport" } 
        }

        db.get("car_stolenreport").findOneAndUpdate(unlock_report ).then((result) => {

                if(result !== null || result !== undefined ) {

                    res.json({"status" : true ,"message" : "unlock suscess"})

                }else {
                    res.json({"status" : false ,"message" : "unlock error"})
                }

            

        } )

    }

 } 