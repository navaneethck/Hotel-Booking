import { Link } from "react-router-dom";

export const HotelCards = ({ hotel, message }) => {
  const amenityIcons = {
    "lake view": { icon: "🌅", label: "Lake View" },
    spa: { icon: "💆", label: "Spa" },
    "nature view": { icon: "🌲", label: "Nature View" },
    pool: { icon: "🏊", label: "Pool" },
    "luxury dining": { icon: "🍷", label: "Luxury Dining" },
    "airport shuttle": { icon: "🚌", label: "Airport Shuttle" },
    "free wi-fi": { icon: "🛜", label: "Free Wi-fi" },
  };

  const amenityMatches =
    hotel?.amenities?.map((amenity) => {
      const key = amenity.toLowerCase().trim();
      const match = amenityIcons[key];
      return { key, match };
    }) || [];

  const description = hotel?.description?.toLowerCase() || "";
  const wordsToFind = ["5 star", "4 star", "3 star", "2 star", "1 star", "7 star"];
  const foundTheWord = wordsToFind.find((word) => description.includes(word));

  return (
    <div className="space-y-6">
      {hotel ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Hotel Image */}
            <div className="w-full md:w-1/3">
              <img
                src={hotel.images?.[0]}
                alt="Hotel"
                className="w-full h-56 md:h-full object-cover"
              />
            </div>

            {/* Hotel Details */}
            <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
              {/* Top section: name, location, rating, price */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3 gap-3 sm:gap-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600">📍 {hotel.location}</p>
                  <div className="flex items-center pt-2 flex-wrap">
                    {foundTheWord ? (
                      <>
                        <span className="text-yellow-400">
                          {"⭐".repeat(parseInt(foundTheWord))}
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          {foundTheWord} Hotel
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-500">No rating info</span>
                    )}
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-blue-700">
                    {hotel.price}
                  </div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-gray-600 mb-4">
                {amenityMatches.map(({ key, match }) => (
                  <div key={key}>
                    {match ? (
                      <span>
                        {match.icon} {match.label}
                      </span>
                    ) : (
                      <span>{key}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Ratings and button */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                    9.2
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Excellent</div>
                    <div className="text-xs text-gray-600">1847 reviews</div>
                  </div>
                </div>

                <Link
                  to="/hoteldetails"
                  state={{
                    hotel,
                    foundTheWord,
                    amenitiesFromState: amenityMatches,
                  }}
                  className="block"
                >
                  <button className="w-full sm:w-auto px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition cursor-pointer">
                    See Availability
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : message ? (
        <p className="text-center text-gray-600">{message}</p>
      ) : null}
    </div>
  );
};
