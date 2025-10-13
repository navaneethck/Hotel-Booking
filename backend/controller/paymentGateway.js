const razorpayInstance = require('../config/razorpay');
const Booking = require ('../models/bookingModel');
const Payment = require ('../models/paymentModel');

const createPaymentOrder = async(req,res)=>{
        try{
            const {bookingId} =req.body;
            const booking = await Booking.findById(bookingId);
            if(!booking){
            return res.status(404).json({ success: false, message: "Booking not found" });
            }

            const options = {
                amount:booking.totalAmount*100,
                currency: "INR",
                receipt: `receipt_${booking._id}`,
            }

            const order = await razorpayInstance.orders.create(options);

            const payment = await Payment.create({
                bookingId: booking._id,
                userId: booking.user,
                razorpayOrderId: order.id,
                amount: booking.totalAmount,
            });

            await payment.save();

            res.status(200).json({
            success: true,
            key: process.env.RAZORPAY_KEY_ID,
            order,
            bookingId: booking._id,
            });

        }catch(err){
           console.error("Error creating Razorpay order:", err);
           res.status(500).json({ success: false, message: "Server Error", error: err.message });
        }
}

module.exports = {createPaymentOrder};