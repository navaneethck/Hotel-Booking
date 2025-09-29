
export const Amenities = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-4">Common Amenities</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center space-x-2">
        <span>🚗</span>
        <span>Free Parking</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>🏋️</span>
        <span>Fitness Center</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>❄️</span>
        <span>Air Conditioning</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>🧹</span>
        <span>Room Service</span>
      </div>
    </div>
  </div>
);
