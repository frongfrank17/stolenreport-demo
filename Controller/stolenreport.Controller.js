const express = require('express');
const router = express.Router();
const Model_stolenreport_reportLists = require('../Models/reportLists.Model.js')
const Model_stolenreport_getReport = require('../Models/getReport.Model.js')
const Model_stolenreport_userReport = require('../Models/userReport.Model.js')
const Model_stolenreport_unlockReport = require('../Models/unlockReport.Model.js')
const Model_stolenreport_station = require('../Models/station.Model.js')
const Model_stolenreport_delete = require('../Models/removeList.Model')
router.get("/report/getLists" , Model_stolenreport_reportLists.reportLists)
// api/stolen/v1/report/getLists
router.get("/report/getReport" , Model_stolenreport_getReport.getReport)
// api/stolen/v1/report/getReport?_id=
router.post("/user/Report" , Model_stolenreport_userReport.userReport)
// api/stolen/v1/user/Report
router.post("/user/unlockReport" , Model_stolenreport_unlockReport.unlockReport)
// api/stolen/v1/user/unlockReport 
router.get('/report/station' , Model_stolenreport_station.lock_station )
// api/stolen/v1/report/station 
router.delete('/delete' , Model_stolenreport_delete.Remove )
//api/stolen/v1/report/delete 
module.exports = router