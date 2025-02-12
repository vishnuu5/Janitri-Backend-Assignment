const HeartRate = require("../models/heartRate.model");

exports.recordHeartRate = async (patientId, bpm) => {
  return await HeartRate.create({ patientId, bpm });
};

exports.getHeartRatesByPatient = async (patientId) => {
  return await HeartRate.find({ patientId });
};
