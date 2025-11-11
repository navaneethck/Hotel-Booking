export const HotelInfo = ({ hotelName, hotelPrice, hotelRating, hotelLocation }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
      {/* Left section: name, location, rating, reviews */}
      <div className="w-full sm:w-2/3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{hotelName}</h1>
        <p className="text-gray-600 mb-2 break-words">📍 {hotelLocation}</p>

        <div className="flex items-center mb-4 flex-wrap">
          {hotelRating ? (
            <>
              <span className="text-yellow-400 text-lg">
                {"⭐".repeat(parseInt(hotelRating))}
              </span>
              <span className="ml-2 text-sm text-gray-600">{hotelRating} Hotel</span>
            </>
          ) : (
            <span className="text-gray-500">No rating info</span>
          )}
        </div>

        <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-sm sm:text-base">
            9.2
          </div>
          <div className="text-sm sm:text-base">
            <span className="font-semibold">Wonderful</span>
            <span className="text-gray-600 ml-1 sm:ml-2">(1,847 reviews)</span>
          </div>
        </div>
      </div>

      {/* Right section: price and offer info */}
      <div className="w-full sm:w-1/3 text-left sm:text-right">
        <div className="text-2xl sm:text-3xl font-bold text-blue-700">{hotelPrice}</div>
        <div className="text-gray-600 text-sm sm:text-base">per night</div>
        <div className="text-sm text-green-600 mt-1">Free cancellation</div>
      </div>
    </div>
  </div>
);
