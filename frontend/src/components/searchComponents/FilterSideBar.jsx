export const FilterSidebar = () => (
  <div className="bg-white p-6 rounded-lg shadow-md h-fit ">
    <h3 className="text-lg font-bold mb-4">Filters</h3>
    
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Price Range (per night)</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>₹0 - ₹2,500</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>₹2,500 - ₹5,000</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>₹5,000 - ₹10,000</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>₹10,000+</span>
        </label>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold mb-2">Star Rating</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐⭐⭐ 5 Stars</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐⭐ 4 Stars</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐ 3 Stars</span>
        </label>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold mb-2">Amenities</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🌐 Free WiFi</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🚗 Free Parking</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🍽️ Restaurant</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🏋️ Fitness Center</span>
        </label>
      </div>
    </div>

    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
      Apply Filters
    </button>
  </div>
);