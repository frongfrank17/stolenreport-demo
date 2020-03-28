const createError = require('http-errors');
var monk = require('monk')
// report lst
//var db = monk("mongodb://localhost:27017/dbstolenreport");
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0")
 module.exports = {

    reportLists : async ( req , res , next) => {

        try {

            db.get("car_stolenreport").find({ }, (err , result) => {
              
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }



    }

 } 