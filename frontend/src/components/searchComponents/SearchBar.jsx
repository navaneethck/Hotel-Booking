import { useSearchParams,useNavigate } from "react-router-dom";
import {DatePicker,searchDestination,guests} from "../../utils/searchbarUtils"


export const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Prefill from URL from homepage searchbAr
  const initialDestination = searchParams.get("destination") || "";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialGuest = searchParams.get("guest") || 1;

  // using the reusable logic with prefilled values 
  const { checkIn, checkOut, setCheckOut, handleCheckInChange, formatDate, today } = DatePicker(initialCheckIn, initialCheckOut);
  const { destination, handleDestination } = searchDestination(initialDestination);
  const { guest, handleGuest } = guests(initialGuest);

    const params = new URLSearchParams({
    destination,
    checkIn,
    checkOut,
    guest,
    });

   return(
  <section className="bg-purple-600 py-10 fixed top-16 left-0 w-full h-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
        <input type="text" placeholder="Search destination" className="flex-1 p-3 rounded-md border" value={destination} onChange={handleDestination}/>
        <input type="date" className="p-3 rounded-md border" value={checkIn} min={formatDate(today)} onChange={handleCheckInChange} />
        <input type="date" className="p-3 rounded-md border" value={checkOut} min={formatDate(new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)))} onChange={(e) => setCheckOut(e.target.value)} />
        <input type="number" min="1" placeholder="Guests" className="p-3 rounded-md border w-28" value={guest} onChange={handleGuest} />
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700" onClick={()=>navigate("/searchresults?"+params.toString())}>Update Search</button>
      </div>
    </div>
  </section>
)};
