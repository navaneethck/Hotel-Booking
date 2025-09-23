import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../../contexts/userContext";
import { useState } from "react";
import {DatePicker,searchDestination,guests} from "../../utils/searchbarUtils"

export const SearchBar = () => {
 const{user}= UseUserContext();
 const navigate = useNavigate();
 const {checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } =DatePicker();
 const {handleDestination,destination} = searchDestination();
 const {handleGuest,guest} = guests();

 const params = new URLSearchParams({
  destination:destination,
  checkIn:checkIn,
  checkOut:checkOut,
  guest:guest
 })

   return (
  <section className="bg-purple-600 py-10 mt-15">
    <div className="max-w-5xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Find your perfect stay</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search destination"
          className="flex-1 p-3 rounded-md border text-black "
          value={destination}
          onChange={handleDestination}
        />
        <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1 text-gray-700">Check-In</label>
        <input type="date" value={checkIn} min={formatDate(today)} onChange={handleCheckInChange}  className="p-3 rounded-md border text-black " />
        </div>
        <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1 text-gray-700">Check-Out</label>
        <input type="date" value={checkOut} min={checkIn} onChange={(e)=>setCheckOut(e.target.value)} className="p-3 rounded-md border text-black" />
        </div>
        <input
          type="number"
          min="1"
          placeholder="Guests"
          className="p-3 rounded-md border w-28 text-black"
          value={guest}
          onChange={handleGuest}
        />
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700" onClick={()=>navigate('/searchresults?'+params.toString())}>
          Search
        </button>
      </div>
    </div>
  </section>
);
}