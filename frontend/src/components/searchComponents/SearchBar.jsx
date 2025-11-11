import { useSearchParams, useNavigate } from "react-router-dom";
import { DatePicker, searchDestination, guests } from "../../utils/searchbarUtils";

export const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Prefill values
  const initialDestination = searchParams.get("destination") || "";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuest = searchParams.get("guest") || 1;

  const { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } =
    DatePicker(initialCheckIn, initialCheckOut);
  const { destination, handleDestination } = searchDestination(initialDestination);
  const { guest, handleGuest } = guests(initialGuest);

  const params = new URLSearchParams({
    destination,
    checkIn,
    checkOut,
    guest,
  });

  return (
    <section className="bg-purple-600 fixed top-16 left-0 w-full z-40 shadow">
      <div className="max-w-7xl mx-auto px-3 py-1 sm:py-2">
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3 bg-white rounded-md shadow-sm px-2 sm:px-3 py-2">
          
          {/* Destination */}
          <input
            type="text"
            placeholder="Destination"
            className="w-full sm:flex-1 px-2 py-1.5 sm:py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            value={destination}
            onChange={handleDestination}
          />

          {/* Check-in */}
          <input
            type="date"
            className="w-full sm:w-auto px-2 py-1.5 sm:py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            value={checkIn}
            min={formatDate(today)}
            onChange={handleCheckInChange}
          />

          {/* Check-out */}
          <input
            type="date"
            className="w-full sm:w-auto px-2 py-1.5 sm:py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            value={checkOut}
            min={formatDate(
              new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
            )}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          {/* Guests */}
          <input
            type="number"
            min="1"
            placeholder="Guests"
            className="w-full sm:w-20 px-2 py-1.5 sm:py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            value={guest}
            onChange={handleGuest}
          />

          {/* Button */}
          <button
            onClick={() => navigate("/searchresults?" + params.toString())}
            className="w-full sm:w-auto px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700 transition cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
