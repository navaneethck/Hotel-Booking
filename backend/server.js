const express= require('express');
const cors = require('cors');
const connectedDB=require('./config/db')
require('dotenv').config();
const authRout= require("./routes/auth");
const authHotel= require('./routes/hotel');
const authBooking = require('./routes/bookingRoutes');
const adminAuth = require('./routes/adminAuth');
const guestAuth = require('./routes/guestDetails');
const paymentRoutes = require("./routes/paymentRoutes");
const cookieparser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173',
        'https://hotel-booking-ebon-three.vercel.app'
    ],
    credentials:true
}));
app.use(cookieparser())

app.get('/api/test',(req,res)=>{
    res.json({message:'server is working..!'})
})

app.use('/api/auth',authRout);
app.use('/api/hotels',authHotel)
app.use('/api/booking',authBooking);
app.use('/api/All-bookings',adminAuth);
app.use('/api/guest',guestAuth);
app.use("/api/payment", paymentRoutes);


connectedDB()

const PORT = process.env.PORT || 3400
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
