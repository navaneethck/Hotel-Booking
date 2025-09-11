import { Link } from "react-router-dom";

export const HotelCards = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
      <div className="md:flex"> 
        <div className="md:w-1/3">
          <img src="https://via.placeholder.com/400x300?text=Hotel+1" alt="Hotel" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Ocean Paradise Resort</h3>
              <p className="text-sm text-gray-600">📍 Candolim Beach, Goa</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-gray-600">5 Star Hotel</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">₹8,500</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex space-x-4 text-xs text-gray-600">
              <span>🌐 WiFi</span>
              <span>🚗 Parking</span>
              <span>🍽️ Restaurant</span>
              <span>🏋️ Gym</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                9.2
              </div>
              <div>
                <div className="text-sm font-semibold">Excellent</div>
                <div className="text-xs text-gray-600">1847 reviews</div>
              </div>
            </div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              See Availability
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src="https://via.placeholder.com/400x300?text=Hotel+2" alt="Hotel" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Palm Grove Hotel</h3>
              <p className="text-sm text-gray-600">📍 Baga Beach, Goa</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-gray-600">4 Star Hotel</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">₹4,200</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex space-x-4 text-xs text-gray-600">
              <span>🌐 WiFi</span>
              <span>🚗 Parking</span>
              <span>🍽️ Restaurant</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                8.7
              </div>
              <div>
                <div className="text-sm font-semibold">Very Good</div>
                <div className="text-xs text-gray-600">923 reviews</div>
              </div>
            </div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
             
              <Link to={'/hoteldetails'}> See Availability</Link>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
