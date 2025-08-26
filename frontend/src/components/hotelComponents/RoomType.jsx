
export const RoomTypes = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-4">Room Types & Rates</h3>
    
    <div className="border rounded-lg mb-4">
      <div className="p-4 border-b bg-gray-50">
        <h4 className="font-semibold">Standard Ocean View Room</h4>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Max occupancy: 2 adults</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>🛏️ 1 King Bed</span>
              <span>🚿 Private Bathroom</span>
              <span>🌊 Ocean View</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">₹8,500</div>
            <div className="text-sm text-gray-600">per night</div>
            <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="border rounded-lg mb-4">
      <div className="p-4 border-b bg-gray-50">
        <h4 className="font-semibold">Deluxe Suite with Balcony</h4>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Max occupancy: 4 adults</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>🛏️ 2 Queen Beds</span>
              <span>🚿 Private Bathroom</span>
              <span>🌊 Balcony</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">₹12,500</div>
            <div className="text-sm text-gray-600">per night</div>
            <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
