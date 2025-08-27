import { Link } from "react-router-dom";
import { UseUserContext } from "../../contexts/userContext";
import { useState } from "react";

const DatePicker = ()=>{
  const formatDate =  (date)=> date.toISOString().split('T')[0];

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() +1);

  const [checkIn,setCheckIn] = useState(formatDate(today));
  const [checkOut,setCheckOut] = useState(formatDate(tomorrow));

  const handleCheckInChange = (e)=>{
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);

    if(checkOut<= newCheckIn){
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate()+1);
      setCheckOut(formatDate(nextDay));
    }
  }
   return { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today };
};

export const SearchBar = (props) => {
 const{user}= UseUserContext();
 const {checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } =DatePicker();

   return (
  <section className="bg-purple-600 py-10">
    <div className="max-w-5xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Find your perfect stay</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search destination"
          className="flex-1 p-3 rounded-md border text-black "
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
        />
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          <Link to='/searchresults'>Search</Link>
        </button>
      </div>
    </div>
  </section>
);
}