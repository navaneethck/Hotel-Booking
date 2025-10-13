const express = require("express");
const router = express.Router();
const { createPaymentOrder } = require("../controller/paymentGateway");

router.post("/create-order", createPaymentOrder);
// router.post("/verify", verifyPayment);

module.exports = router;
