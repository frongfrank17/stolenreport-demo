const createError = require('http-errors');
var monk = require('monk')

var db = monk("mongodb://localhost:27017/dbstolenreport");
 module.exports = {
    getReport : async ( req , res , next) => {

        try {

            db.get("car_stolenreport").findOne({_id :req.query.id}, (err , result) => {
                
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }



    }

 } 