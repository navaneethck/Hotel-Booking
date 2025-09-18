import { FilterSidebar } from "../components/searchComponents/FilterSideBar";
import { Footer } from "../components/searchComponents/Footer";
import { HotelCards } from "../components/searchComponents/HotelCards";
import { SearchBar } from "../components/searchComponents/SearchBar";
import { Header } from "../components/searchComponents/Header";
import {  useSearchParams } from "react-router-dom";
import { useState,useEffect, useMemo} from "react";

const SearchResultsMain = () => {
    const [hotels,setHotel] = useState([]);
    const [message,setMessage] = useState("")
    const [searchParams] = useSearchParams();
    const destination = searchParams.get("destination"); 
    const [sortOption,setSortOption] = useState("Recommended")
    const [filters,setFilters] = useState({
      priceRange:[],
      starHotelRating:[],
      amenities:[]
    })
    
    const sortedHotel = useMemo(()=>{
      let HotelCopy = [...hotels];

  //comparison function for fetched hotel which has minimum and maximum based on user input
      if (filters.priceRange.length > 0) {
      HotelCopy = HotelCopy.filter((hotel) =>
        filters.priceRange.some(
          ([min, max]) => hotel.price >= min && hotel.price <= max
        )
      );
    }

    //for aminites comparison
    if(filters.amenities.length>0){
      HotelCopy = HotelCopy.filter((hotel)=>
      filters.amenities.some((amenity)=> hotel.amenities
      .map((a)=>a.toLowerCase())
      .includes(amenity.toLowerCase()))
      );
    }

  //for dorting
      if(sortOption ==="Price: Low to High") {
        return HotelCopy.sort((a,b)=>a.price - b.price)
      }else if(sortOption ==="Price: High to Low") {
        return HotelCopy.sort((a,b)=>b.price - a.price)
      }
      return HotelCopy;
    },[hotels,sortOption,filters])

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
            <p className="text-gray-600">{hotels.length} properties found</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="p-2 border rounded-md"
             value={sortOption}
             onChange={(e)=>setSortOption(e.target.value)}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar onFilterChange={setFilters} />
          </div>
          <div className="w-3/4 space-y-6">
            {hotels.length>0?
                  (sortedHotel.map((h) => (
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