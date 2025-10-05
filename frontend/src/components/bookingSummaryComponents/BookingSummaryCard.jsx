import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";
export const BookingSummary = ({hotelImages, guest, checkIn, checkOut, hotelName, hotelLocation, hotelRating, roomTypes,totalPrice}) =>{ 
         
        const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        };
        const formattedCheckIn = formatDate(checkIn);
        const formattedCheckOut = formatDate(checkOut);

        const TotalNights = (checkIn, checkOut) => {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const diffTime = checkOutDate - checkInDate;
        const nights = diffTime / (1000 * 60 * 60 * 24);

        return nights;
        };

        const totalPricePerNight = TotalNights(checkIn,checkOut)*totalPrice;

        const {purple,purple2} =useRoomSeceltionContext();
        return(
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
            
            {/* Hotel Info */}
            <div className="flex mb-6">
            <img src={hotelImages[0]} alt="Hotel" className="w-24 h-20 object-cover rounded-md mr-4" />
            <div>
                <h4 className="font-bold text-lg">{hotelName}</h4>
                <p className="text-gray-600 text-sm">📍{hotelLocation}</p>
                <div className="flex items-center mt-1">
                {hotelRating?(<>
                    <span className="text-yellow-400 text-lg">{"⭐".repeat(parseInt(hotelRating))}</span>
                    <span className="ml-2 text-sm text-gray-600">{hotelRating} Hotel</span>
                    </>):(<span className="text-gray-500">No rating info</span>)}
                </div>
            </div>
            </div>

            {/* Booking Details */}
            <div className="border-t pt-4 mb-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="font-semibold">{formattedCheckIn}</p>
                <p className="text-xs text-gray-500">After 2:00 PM</p>
                </div>
                <div>
                <p className="text-sm text-gray-600">{formattedCheckOut}</p>
                <p className="font-semibold">March 18, 2025</p>
                <p className="text-xs text-gray-500">Before 12:00 AM</p>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{TotalNights(checkIn,checkOut)} nights</p>
                </div>
                <div>
                <p className="text-sm text-gray-600">Guests</p>
                <p className="font-semibold">{guest} Adults</p>
                </div>
            </div>
            </div>

            {/* Room Details */}
            <div className="border-t pt-4">
            <h5 className="font-semibold mb-2">Room Selected</h5>
            <div className="bg-gray-300 p-3 rounded-md">
                <p className="font-semibold">
                {purple && purple
                    ? `${roomTypes?.[0]?.name}☑️ & ${roomTypes?.[1]?.name}☑️`
                    : purple
                    ? `${roomTypes?.[0]?.name} Room☑️`
                    : purple2
                    ? `${roomTypes?.[1]?.name} Room☑️`
                    : "No rooms selected"}
                </p>      
            </div>
            </div>
        </div>
)};
