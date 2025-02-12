const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


connectDB();


const authRoutes = require("./routes/auth.routes");
const patientRoutes = require("./routes/patient.routes");
const heartRateRoutes = require("./routes/heartRate.routes");

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/heart-rates", heartRateRoutes);


app.use(errorHandler);

module.exports = app;
