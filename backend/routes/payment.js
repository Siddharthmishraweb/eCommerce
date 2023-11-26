// const express = require("express");
// const router = express.Router();
// const Razorpay = require("razorpay");
import express from 'express';
import Razorpay from 'razorpay';

const router = express.Router();

var razorpayInstance = new Razorpay({
  key_id: process.env.KEY_ID || 'rzp_test_XI32gjxTCCD797',
  key_secret: process.env.KEY_SECRET || 'DYEvMT8ur8uFkN6YZ3MvizIp',
});

router.get("/", (req, res) => {
  res.send("In payment router!");
});

router.post("/direct-checkout", (req, res) => {
  let productDetails = req.body;
  console.log("***********   productDetails  *********",productDetails)
  razorpayInstance.orders.create(
    {
      amount: productDetails.totalPrice * 100,
      currency: "INR",
      receipt: productDetails._id,
    },
    (err, order) => {
      if (err) return console.log(err);
      res.json(order);
    }
  );
});

export default router;
