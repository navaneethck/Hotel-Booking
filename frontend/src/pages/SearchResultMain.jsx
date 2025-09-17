import { FilterSidebar } from "../components/searchComponents/FilterSideBar";
import { Footer } from "../components/searchComponents/Footer";
import { HotelCards } from "../components/searchComponents/HotelCards";
import { SearchBar } from "../components/searchComponents/SearchBar";
import { Header } from "../components/searchComponents/Header";
import { useSearchParams } from "react-router-dom";
import { useState,useEffect} from "react";

const SearchResultsMain = () => {
    const [hotels,setHotel] = useState([]);
    const [message,setMessage] = useState("")
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination"); 

  useEffect(()=>{
    const fetchHotel = async()=>{
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URI}/api/hotels/search?destination=${encodeURIComponent(destination)}`,{
          credentials:'include',
          method:'GET'
        })
        console.log("Fetching hotels for:", destination);
        console.log("Request URL:", `${import.meta.env.VITE_API_URI}/api/hotels/search?destination=${encodeURIComponent(destination)}`);

        const parsedData = await response.json();
        console.log(`this is parsedDatta ${parsedData}`)
        if(Array.isArray(parsedData)&& parsedData.length > 0){
        setHotel(parsedData);
        setMessage("");
        }else{
          setHotel([]);
          setMessage(parsedData.message || "No hotels found");
        }
        console.log(parsedData.message);

      }catch(err){
        console.error(err)
        setMessage("Something went wrong while fetching hotels");
      }
    }
    if (destination) fetchHotel()
},[destination])
  return (
    <div className="min-h-screen bg-gray-50 mt-52">
      <Header/>
      <SearchBar/>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Hotels at your chosen destination</h2>
            <p className="text-gray-600">125 properties found</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="p-2 border rounded-md">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-3/4 space-y-6">
            {hotels.length>0?
                  (hotels.map((h) => (
          <HotelCards key={h._id} hotel={h}/>
        ))):(
          <HotelCards message={message}/>
        )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultsMain;