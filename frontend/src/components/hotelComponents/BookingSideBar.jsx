import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DatePicker, guests } from "../../utils/searchbarUtils";
import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";

export const BookingSidebar = ({
  hotelId,
  hotelImages,
  hotelName,
  roomTypes,
  hotelLocation,
  hotelRating,
}) => {
  const [searchParams] = useSearchParams();
  const { purple, purple2 } = useRoomSeceltionContext();

  // Prefill from URL
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuest = searchParams.get("guest") || 1;

  // Using reusable logic
  const { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } =
    DatePicker(initialCheckIn, initialCheckOut);
  const { guest, handleGuest } = guests(initialGuest);

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const min = 0, max = 20, min1 = 0, max1 = 10;

  const increaseCount = () => count < max && setCount(count + 1);
  const decreaseCount = () => count > min && setCount(count - 1);
  const increaseCount1 = () => count1 < max1 && setCount1(count1 + 1);
  const decreaseCount1 = () => count1 > min1 && setCount1(count1 - 1);

  const totalPriceSuite = purple ? roomTypes[0].price * count : 0;
  const totalPriceDeluxe = purple2 ? roomTypes[1].price * count1 : 0;
  const totalSum = totalPriceSuite + totalPriceDeluxe;

  const disabledIf =
    (!purple && !purple2) ||
    (purple && count === 0) ||
    (purple2 && count1 === 0);

  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md h-fit sticky top-24 mb-6 w-full sm:w-auto">
      {/* Pricing summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm sm:text-base">
          <span className="text-gray-600 font-medium">Price per night for Suite</span>
          <span className="text-blue-700 font-bold text-lg">
            {!purple || count === 0 ? 0 : totalPriceSuite}
          </span>
        </div>

        <div className="flex justify-between items-center text-sm sm:text-base">
          <span className="text-gray-600 font-medium">Price per night for Deluxe</span>
          <span className="text-blue-700 font-bold text-lg">
            {!purple2 || count1 === 0 ? 0 : totalPriceDeluxe}
          </span>
        </div>

        <div className="flex justify-between items-center border-t pt-2 mt-2 text-sm sm:text-base">
          <span className="text-gray-700 font-semibold">Total Room Price</span>
          <span className="text-gray-900 font-bold text-lg">{totalSum}</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Check-in</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md text-sm sm:text-base"
            value={checkIn}
            min={formatDate(today)}
            onChange={handleCheckInChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Check-out</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md text-sm sm:text-base"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Guests</label>
          <input
            type="number"
            min="1"
            max={30}
            placeholder="Guests"
            className="w-full sm:w-28 p-3 rounded-md border cursor-pointer text-sm sm:text-base"
            value={guest}
            onChange={handleGuest}
            onKeyDown={(e) => e.preventDefault()}
          />
        </div>

        {/* Suite room counter */}
        <div>
          <label className="block text-sm font-semibold mb-1">Suite Rooms</label>
          <div className="flex flex-col sm:flex-row items-center justify-between border rounded-md p-2 gap-2 sm:gap-0">
            <button
              onClick={decreaseCount}
              disabled={count === min || !purple}
              className={`px-4 py-1 rounded-md text-white font-bold ${
                count === min || !purple
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              −
            </button>
            <span className="text-lg font-medium">
              {purple ? count : 0} Room{count > 1 && "s"}
            </span>
            <button
              onClick={increaseCount}
              disabled={count === max || !purple}
              className={`px-4 py-1 rounded-md text-white font-bold ${
                count === max || !purple
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              +
            </button>
          </div>
        </div>

        {/* Deluxe room counter */}
        <div>
          <label className="block text-sm font-semibold mb-1">Deluxe Rooms</label>
          <div className="flex flex-col sm:flex-row items-center justify-between border rounded-md p-2 gap-2 sm:gap-0">
            <button
              onClick={decreaseCount1}
              disabled={count1 === min1 || !purple2}
              className={`px-4 py-1 rounded-md text-white font-bold ${
                count1 === min1 || !purple2
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              −
            </button>
            <span className="text-lg font-medium">
              {purple2 ? count1 : 0} Room{count1 > 1 && "s"}
            </span>
            <button
              onClick={increaseCount1}
              disabled={count1 === max1 || !purple2}
              className={`px-4 py-1 rounded-md text-white font-bold ${
                count1 === max1 || !purple2
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              +
            </button>
          </div>
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-600">
          <p>Max occupancy 3 adults per room</p>
        </div>
      </div>

      {/* Book button */}
      <Link
        to="/bookingsummary"
        state={{
          hotelId,
          count,
          count1,
          hotelImages,
          guest,
          checkIn,
          checkOut,
          hotelName,
          hotelLocation,
          hotelRating,
          roomTypes,
          totalSum,
        }}
      >
        <button
          disabled={disabledIf}
          className={`w-full px-6 py-3 font-semibold rounded-lg transition mb-4 text-sm sm:text-base cursor-pointer ${
            disabledIf
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-300"
          }`}
        >
          Book Now
        </button>
      </Link>

      <div className="text-center text-xs sm:text-sm text-gray-600">
        <p>✓ Free cancellation until 24 hours before check-in</p>
        <p>✓ No booking fees</p>
      </div>
    </div>
  );
};
