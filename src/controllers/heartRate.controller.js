const HeartRate = require("../models/heartRate.model");

exports.recordHeartRate = async (req, res) => {
  try {
    const { patientId, bpm } = req.body;
    const heartRate = await HeartRate.create({ patientId, bpm });

    res.status(201).json({ success: true, message: "Heart rate recorded", heartRate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getHeartRates = async (req, res) => {
  try {
    const { patientId } = req.params;
    const heartRates = await HeartRate.find({ patientId });

    res.status(200).json({ success: true, heartRates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
