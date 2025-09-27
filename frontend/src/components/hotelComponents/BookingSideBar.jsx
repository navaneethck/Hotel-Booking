import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {DatePicker,guests} from "../../utils/searchbarUtils";

export const BookingSidebar = () => {
  const [searchParams] = useSearchParams();
    // Prefill from URL from homepage searchbAr
   
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuest = searchParams.get("guest") || 1;

    // using the reusable logic with prefilled values 
  const { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } = DatePicker(initialCheckIn, initialCheckOut);
  const { guest, handleGuest } = guests(initialGuest);

  const [count, setCount] = useState(1);
  const min = 1;
  const max = 4;

  const increaseCount = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-blue-700">₹8,500</div>
        <div className="text-gray-600">per night</div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Check-in</label>
          <input type="date" className="w-full p-2 border rounded-md" value={checkIn} min={formatDate(today)} onChange={handleCheckInChange}/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Check-out</label>
          <input type="date" className="w-full p-2 border rounded-md"  value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)}/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Guests</label>
          <input type="number" min="1" placeholder="Guests" className="p-3 rounded-md border w-28" value={guest} onChange={handleGuest} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Rooms</label>
          <div className="flex items-center justify-between border rounded-md p-2">
            <button
              onClick={decreaseCount}
              disabled={count === min}
              className={`px-3 py-1 rounded-md text-white font-bold ${
                count === min
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              −
            </button>
            <span className="text-lg font-medium">{count} Room{count > 1 && "s"}</span>
            <button
              onClick={increaseCount}
              disabled={count === max}
              className={`px-3 py-1 rounded-md text-white font-bold ${
                count === max
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Link to={"/bookingsummary"}>
        <button className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition mb-4">
          Book Now
        </button>
      </Link>

      <div className="text-center text-sm text-gray-600">
        <p>✓ Free cancellation until 24 hours before check-in</p>
        <p>✓ No booking fees</p>
      </div>
    </div>
  );
};
