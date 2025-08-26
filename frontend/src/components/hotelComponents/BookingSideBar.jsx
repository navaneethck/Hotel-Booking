import { Link } from "react-router-dom";

export const BookingSidebar = () => (
  <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
    <div className="text-center mb-4">
      <div className="text-2xl font-bold text-blue-700">₹8,500</div>
      <div className="text-gray-600">per night</div>
    </div>

    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-semibold mb-1">Check-in</label>
        <input type="date" className="w-full p-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Check-out</label>
        <input type="date" className="w-full p-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Guests</label>
        <select className="w-full p-2 border rounded-md">
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
          <option>4 Adults</option>
        </select>
      </div>
    </div>

    <Link to={'/bookingsummary'}>
    <button className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 mb-4">
      Book Now
    </button>
    </Link>

    <div className="text-center text-sm text-gray-600">
      <p>✓ Free cancellation until 24 hours before check-in</p>
      <p>✓ No booking fees</p>
    </div>
  </div>
);
