const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/paymentRoutes");
const dbConnection = require("./config/database");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
dbConnection();
app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});
