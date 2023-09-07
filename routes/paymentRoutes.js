const express = require("express");
const checkout = require("../controllers/paymentController");
const paymentVerification = require("../controllers/paymentVerification");
const getKey = require("../controllers/getkey");
const router = express.Router();
router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);
router.get("/getkey", getKey);
module.exports = router;
