const express = require("express");
const { recordHeartRate, getHeartRates } = require("../controllers/heartRate.controller");
const router = express.Router();

router.post("/", recordHeartRate);
router.get("/:patientId", getHeartRates);

module.exports = router;
