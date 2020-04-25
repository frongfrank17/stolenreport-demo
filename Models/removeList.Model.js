const createError = require('http-errors');
var monk = require('monk')

//var db = monk("mongodb://localhost:27017/dbstolenreport");
var db = monk("mongodb://heroku_033t8cx0:vc1nj211l71ouos8vn4duhcjs4@ds227664.mlab.com:27664/heroku_033t8cx0")
module.exports = {
    Remove : (req , res , next ) => {
            db.get("car_stolenreport").remove({} , ()=> {
                db.get("car_stolenreport").find({} , (err , result) => {
                        res.json({
                            "result" : {
                                
                                result
                            }
                        })
                })
            })
    }
}