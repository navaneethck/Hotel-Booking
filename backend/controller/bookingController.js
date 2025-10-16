const Booking =  require('../models/bookingModel');
const {checkRoomAvailability } = require('../controller/checkAvailabilityController');
// const guestDetails = require('../models/guestDetailsModel');

const createBooking = async(req,res)=>{
  console.log('Request body:', req.body);
    try{
     const {  hotelId,
      checkIn,
      checkOut,
      roomType,
      totalNumOfRooms,
      guests,
      totalPrice,
      totalPricePerNight,
      finalPrice
      } = req.body;
console.log(`checking the roomtype${roomType}`)
      const result = await checkRoomAvailability ({hotelId, checkIn, checkOut, roomType, totalNumOfRooms,totalPricePerNight,totalPrice});

      if(!result.success){
        console.log(`the error message of check room avi  ${result.message}`)
        return res.status(400).json({success:false,message:result.message});
      }else{
        console.log(`result got success ${JSON.stringify(result)}`);
      }

      const {totalNights} = result;
      if(!totalNights){
        console.log('canot get totalNights')
      }else{
        console.log(`the total night ${totalNights}`)
      }
      const selectedRoomTypes = roomType.split("&").map(r => r.trim());
      const newBooking = new Booking({

        user:"685a51604df158309afbe600",
        hotel: hotelId,
        roomType:selectedRoomTypes,
        totalNumOfRooms:totalNumOfRooms,
        checkInDate:checkIn,
        checkOutDate:checkOut,
        status: 'pending',
        totalNights:totalNights,
        totalAmount:finalPrice,
        guests:guests,
      })

      await newBooking.save();

      await newBooking.populate('user', 'name email');
      await newBooking.populate('hotel', 'name location');

      console.log('Booking created successfully:', newBooking);

      res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      newBooking
    });
      
    }catch(error){
      console.error('Error creating booking:', error);
      res.status(500).json({
      success: false,
      message: error.message
    });

    }
}

module.exports = { createBooking };