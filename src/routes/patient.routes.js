const express = require("express");
const { addPatient, getPatient } = require("../controllers/patient.controller");
const router = express.Router();

router.post("/", addPatient);
router.get("/:id", getPatient);

module.exports = router;
