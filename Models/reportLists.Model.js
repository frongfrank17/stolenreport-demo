const createError = require('http-errors');
var monk = require('monk')
// report lst
var db = monk("mongodb://localhost:27017/dbstolenreport");
 module.exports = {

    reportLists : async ( req , res , next) => {

        try {

            db.get("car_stolenreport").find({ }, (err , result) => {
              
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }



    }

 } 