import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {DatePicker,guests} from "../../utils/searchbarUtils";
import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";

export const BookingSidebar = ({hotelId,hotelImages,hotelName,roomTypes,hotelLocation,hotelRating}) => {
  const [searchParams] = useSearchParams();
  const {purple,purple2} =useRoomSeceltionContext();

    // Prefill from URL from homepage searchbAr
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuest = searchParams.get("guest") || 1;

    // using the reusable logic with prefilled values 
  const { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } = DatePicker(initialCheckIn, initialCheckOut);
  const { guest, handleGuest } = guests(initialGuest);

  const [count, setCount] = useState(0);
  const [count1,setCount1]=useState(0);

  const min = 0;
  const max = 20;
  const min1 = 0;
  const max1 = 10;

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

    const increaseCount1 = () => {
    if (count1 < max1) {
      setCount1(count1+1); 
    }
  };

  
  const decreaseCount1 = () => {
    if (count1 > min1) {
      setCount1(count1-1); 
    }
  };

  const totalPriceSuite = purple ? roomTypes[0].price * count : 0;
  const totalPriceDeluxe = purple2 ? roomTypes[1].price * count1 : 0;
  const totalSum = totalPriceSuite+totalPriceDeluxe;



  const disabledIf =
  (!purple && !purple2) ||
  (purple && count === 0) ||
  (purple2 && count1 === 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-24 mb-6">
    <div className="space-y-3">

        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Price per night for Suite</span>
          <span className="text-blue-700 font-bold text-lg">{!purple||count===0?(<>0</>):(<>{totalPriceSuite}</>)}</span>
        </div>

     
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Price per night for Deluxe</span>
          <span className="text-blue-700 font-bold text-lg">{!purple2||count1===0?(<>0</>):(<>{totalPriceDeluxe}</>)}</span>
        </div>

      
        <div className="flex justify-between items-center border-t pt-2 mt-2">
          <span className="text-gray-700 font-semibold">Total Room Price</span>
          <span className="text-gray-900 font-bold text-lg">{totalSum}</span>
        </div>
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
          <input type="number" min="1" max={30} placeholder="Guests" className="p-3 rounded-md border w-28 cursor-pointer" value={guest} onChange={handleGuest} onKeyDown={(e) => e.preventDefault()} />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Suite Rooms</label>
          <div className="flex items-center justify-between border rounded-md p-2">
            <button
              onClick={decreaseCount}
              disabled={count === min|| !purple }
              className={`px-3 py-1 rounded-md text-white font-bold cursor-pointer ${
                count === min ||!purple
                  ? "bg-red-300 cursor-not-allowed "
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              −
            </button>
            <span className="text-lg font-medium">{purple?<>{count}</>:<>0</>} Room{count > 1 && "s"}</span>
            <button
              onClick={increaseCount}
              disabled={count === max ||!purple}
              className={`px-3 py-1 rounded-md text-white font-bold cursor-pointer ${
                count === max ||!purple
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              +
            </button>
          </div>
        </div>

          <div>
          <label className="block text-sm font-semibold mb-1"> Deluxe Rooms</label>
          <div className="flex items-center justify-between border rounded-md p-2">
            <button
              onClick={decreaseCount1}
              disabled={count1 === min1 || !purple2}
              className={`px-3 py-1 rounded-md text-white font-bold cursor-pointer ${
                count1 === min1 ||!purple2
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              −
            </button>
            <span className="text-lg font-medium">{purple2?<>{count1}</>:<>0</>} Room{count1 > 1 && "s"}</span>
            <button
              onClick={increaseCount1}
              disabled={count1 === max1 || !purple2}
              className={`px-3 py-1 rounded-md text-white font-bold cursor-pointer ${
                count1 === max1 ||!purple2
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              +
            </button>
          </div>
        </div>
              <div className="text-center text-sm text-gray-600">
        <p>Max occupancy 3 adult per room</p>
      </div>
      </div>

      <Link to={"/bookingsummary"} state={{hotelId,count,count1,hotelImages,guest,checkIn,checkOut,hotelName,hotelLocation,hotelRating,roomTypes,totalSum}}>
      <button
        disabled={disabledIf}  
        className={`w-full px-6 py-3 font-semibold rounded-lg transition mb-4 cursor-pointer
          ${disabledIf
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"   
            : "bg-yellow-400 text-black hover:bg-yellow-300"} 
        `}
      >
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
