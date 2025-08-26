
export const HotelInfo = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ocean Paradise Resort</h1>
        <p className="text-gray-600 mb-2">📍 Candolim Beach, Goa, India</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-gray-600">5 Star Luxury Resort</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold">9.2</div>
          <div>
            <span className="font-semibold">Wonderful</span>
            <span className="text-gray-600 ml-2">(1,847 reviews)</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-blue-700">₹8,500</div>
        <div className="text-gray-600">per night</div>
        <div className="text-sm text-green-600">Free cancellation</div>
      </div>
    </div>
  </div>
);