

const Booking = require('../models/bookingModel');
const Hotel = require('../models/hotelModel');

// Reusable logic function
const checkRoomAvailability = async ({ hotelId, checkIn, checkOut, roomType, totalNumOfRooms,totalPricePerNight,totalPrice }) => {
  try {
    const checkInDate = new Date(checkIn);
    const checkOutDate =new Date(checkOut);
    const today = new Date();
    if (checkIn < today) return { success: false, message: 'Check-in date cannot be in the past' };
    if (checkOut <= checkIn) return { success: false, message: 'Check-out must be after check-in' };
    
    roomType?console.log(`room type ${roomType}`):console.log('there is no room type');
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) return { success: false, message: 'Hotel not found' };

    let selectedRoomTypes = roomType.split("&").map(r => r.trim());
    
    const roomTypeData = hotel.roomTypes.filter(rt =>
      selectedRoomTypes.some(sel => rt.name.toLowerCase() === sel.toLowerCase())
    );
    const totalRoomsAvailable = roomTypeData.reduce((sum, rt) => sum + rt.totalRooms, 0);

    if (!roomTypeData) return { success: false, message: 'Room type not found' }
    else{
      console.log(`the roomtype data ${roomTypeData}`)
    };
  
    const overlappingBookings = await Booking.find({
      hotel: hotelId,
      roomType:{ $in: selectedRoomTypes },
      status: { $in: ['pending', 'confirmed'] },
      checkInDate: { $lt: checkOutDate },
      checkOutDate: { $gt: checkInDate}
    });

    const totalBookedRooms = overlappingBookings.reduce((sum, b) => sum + b.totalNumOfRooms, 0);
    const availRooms = totalRoomsAvailable - totalBookedRooms;

    const isAvailable = availRooms >= totalNumOfRooms;
     
    const totalNights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (!isAvailable) return { success: false, message: 'Not enough rooms available' };

    return {
      success: true,
      available: true,
      roomType:roomTypeData,
      pricePerNight: totalPrice,
      totalNights:totalNights,
      estimatedTotal: totalPricePerNight
    };

  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Actual route handler
const checkAvailability = async (req, res) => {
  const { hotelId, checkInDate, checkOutDate, roomType, numberOfRooms } = req.query;

  const result = await checkRoomAvailability({ hotelId, checkInDate, checkOutDate, roomType, numberOfRooms });

  if (!result.success) {
    return res.status(400).json({ success: false, message: result.message });
  }

  const { roomTypeData, totalNights } = result;

  return res.json({
    success: true,
    available: true,
    roomType,
    pricePerNight: roomTypeData.price,
    totalNights,
    estimatedTotal: roomTypeData.price * numberOfRooms * totalNights
  });
};

module.exports = { checkAvailability, checkRoomAvailability };
