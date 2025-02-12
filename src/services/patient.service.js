const Patient = require("../models/patient.model");

exports.createPatient = async (userId, name, age, gender) => {
  return await Patient.create({ userId, name, age, gender });
};

exports.getPatientById = async (id) => {
  const patient = await Patient.findById(id);
  if (!patient) throw new Error("Patient not found");
  return patient;
};
