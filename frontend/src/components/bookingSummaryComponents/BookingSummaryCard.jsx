import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";

export const BookingSummary = ({
  hotelImages,
  guest,
  checkIn,
  checkOut,
  hotelName,
  hotelLocation,
  hotelRating,
  roomTypes,
}) => {
  const { purple, purple2 } = useRoomSeceltionContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedCheckIn = formatDate(checkIn);
  const formattedCheckOut = formatDate(checkOut);

  const TotalNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = checkOutDate - checkInDate;
    return diffTime / (1000 * 60 * 60 * 24);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
        Booking Summary
      </h3>

      {/* Hotel Info */}
      <div className="flex flex-col sm:flex-row mb-5 sm:mb-6 items-center sm:items-start">
        <img
          src={hotelImages?.[0]}
          alt="Hotel"
          className="w-28 h-24 object-cover rounded-md mb-3 sm:mb-0 sm:mr-4 shadow-sm"
        />
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-base sm:text-lg">{hotelName}</h4>
          <p className="text-gray-600 text-xs sm:text-sm">📍 {hotelLocation}</p>
          <div className="flex justify-center sm:justify-start items-center mt-1">
            {hotelRating ? (
              <>
                <span className="text-yellow-400 text-sm sm:text-lg">
                  {"⭐".repeat(parseInt(hotelRating))}
                </span>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600">
                  {hotelRating} Hotel
                </span>
              </>
            ) : (
              <span className="text-gray-500 text-xs">No rating info</span>
            )}
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="border-t pt-3 sm:pt-4 mb-3 sm:mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Check-in</p>
            <p className="font-semibold text-sm sm:text-base">
              {formattedCheckIn}
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500">
              After 2:00 PM
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Check-out</p>
            <p className="font-semibold text-sm sm:text-base">
              {formattedCheckOut}
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500">
              Before 12:00 AM
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Duration</p>
            <p className="font-semibold text-sm sm:text-base">
              {TotalNights(checkIn, checkOut)} nights
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Guests</p>
            <p className="font-semibold text-sm sm:text-base">
              {guest} Adults
            </p>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div className="border-t pt-3 sm:pt-4">
        <h5 className="font-semibold mb-2 text-sm sm:text-base text-center sm:text-left">
          Room Selected
        </h5>
        <div className="bg-gray-100 p-2 sm:p-3 rounded-md text-center sm:text-left">
          <p className="font-semibold text-sm sm:text-base">
            {purple && purple2
              ? `${roomTypes?.[0]?.name} ☑️ & ${roomTypes?.[1]?.name} ☑️`
              : purple
              ? `${roomTypes?.[0]?.name} Room ☑️`
              : purple2
              ? `${roomTypes?.[1]?.name} Room ☑️`
              : "No rooms selected"}
          </p>
        </div>
      </div>
    </div>
  );
};
