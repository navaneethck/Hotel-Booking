const Booking =  require('../models/bookingModel');
const {checkRoomAvailability } = require('../controller/checkAvailabilityController');
// const guestDetails = require('../models/guestDetailsModel');

const createBooking = async (req, res) => {
  console.log('Request body:', req.body);

  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User authentication failed. Booking blocked."
      });
    }

    const userId = req.user.id;

    const {
      hotelId,
      checkIn,
      checkOut,
      roomType,
      totalNumOfRooms,
      guests,
      totalPrice,
      totalPricePerNight,
      finalPrice
    } = req.body;


    const result = await checkRoomAvailability({
      hotelId,
      checkIn,
      checkOut,
      roomType,
      totalNumOfRooms,
      totalPricePerNight,
      totalPrice
    });

    if (!result.success) {
      return res.status(400).json({ success: false, message: result.message });
    }

    const { totalNights } = result;

    const selectedRoomTypes = roomType.split("&").map(r => r.trim());

    const newBooking = new Booking({
      user:userId,
      hotel: hotelId,
      roomType: selectedRoomTypes,
      totalNumOfRooms,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      status: 'pending',
      totalNights,
      totalAmount: finalPrice,
      guests
    });

    await newBooking.save();

    await newBooking.populate('user', 'name email');
    await newBooking.populate('hotel', 'name location');

    console.log('Booking created successfully:', newBooking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      newBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
 
module.exports = {createBooking};