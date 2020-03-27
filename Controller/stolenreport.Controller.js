const express = require('express');
const router = express.Router();
const Model_stolenreport_reportLists = require('../Models/reportLists.Model.js')
const Model_stolenreport_getReport = require('../Models/getReport.Model.js')
const Model_stolenreport_userReport = require('../Models/userReport.Model.js')
const Model_stolenreport_unlockReport = require('../Models/unlockReport.Model.js')
router.get("/report/getLists" , Model_stolenreport_reportLists.reportLists)
// api/stolenreport/v1/report/getList
router.get("/report/getReport" , Model_stolenreport_getReport.getReport)
// api/stolenreport/v1/report/getReport?_id=
router.post("/user/lockReport" , Model_stolenreport_userReport.userReport)
// api/stolenreport/v1/user/lockReport
router.post("/user/unlockReport" , Model_stolenreport_unlockReport.unlockReport)
// api/stolenreport/v1/user/unlockReport 
module.exports = router