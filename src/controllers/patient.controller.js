const Patient = require("../models/patient.model");

exports.addPatient = async (req, res) => {
  try {
    const { userId, name, age, gender } = req.body;
    const patient = await Patient.create({ userId, name, age, gender });

    res.status(201).json({ success: true, message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) return res.status(404).json({ success: false, message: "Patient not found" });

    res.status(200).json({ success: true, patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
