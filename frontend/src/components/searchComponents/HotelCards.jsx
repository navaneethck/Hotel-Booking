import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const HotelCards = () =>{
  const [hotel,setHotel] = useState([]);
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination"); // string value

  useEffect(()=>{
    const fetchHotel = async()=>{
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URI}/api/hotels/search?destination=${encodeURIComponent(destination)}`,{
          credentials:'include',
          method:'GET'
        })
        if(!response.ok){
           return console.log('cannot fetch Hotels')
        }
        console.log("Fetching hotels for:", destination);
        console.log("Request URL:", `${import.meta.env.VITE_API_URI}/api/hotels/search?destination=${encodeURIComponent(destination)}`);

        const data = await response.json();
        setHotel(data);
      }catch(err){
        console.error(err)
      }
    }
    if (destination)fetchHotel()
},[destination])
 const amenityIcons = {
  "lake view": { icon: "🌅", label: "Lake View" },
   "spa": { icon: "💆", label: "Spa" },
  "nature view": { icon: "🌲", label: "Nature View" },
  "pool": { icon: "🏊", label: "Pool" },
  "luxury dining": { icon: "🍷", label: "Luxury Dining" },
  "airport shuttle": { icon: "🚌", label: "Airport Shuttle" },
  "free wi-fi": { icon: "🛜", label: "Free Wi-fi" },
};
  return(
  <div className="space-y-6">
    {hotel.length>0?(
      hotel.map((hotel)=>(
      <div  key={hotel._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
      <div className="md:flex"> 
        <div className="md:w-1/3">
          <img src={hotel.images?.[0]} alt="Hotel" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
              <p className="text-sm text-gray-600">📍 {hotel.location}</p>
              <div className="flex items-center pt-5">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-gray-600">5 Star Hotel</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">{hotel.price}</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex space-x-4 text-xs text-gray-600">
              {hotel.amenities.map((amenity) => {
            const key = amenity.toLowerCase().trim();
            const match = amenityIcons[key];
            return (
              <div key={key}>
                {match ? (
                  <span>{match.icon} {match.label}</span>
                ) : (
                  <span> {amenity}</span> 
                )}
              </div>
            );
          })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                9.2
              </div>
              <div>
                <div className="text-sm font-semibold">Excellent</div>
                <div className="text-xs text-gray-600">1847 reviews</div>
              </div>
            </div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              See Availability
            </button>
          </div>
        </div>
      </div>
    </div>
      ))
    ): (
        <p>No hotels found</p>
      )}


    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src="https://via.placeholder.com/400x300?text=Hotel+2" alt="Hotel" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Palm Grove Hotel</h3>
              <p className="text-sm text-gray-600">📍 Baga Beach, Goa</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">⭐⭐⭐⭐</span>
                <span className="ml-2 text-sm text-gray-600">4 Star Hotel</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">₹4,200</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex space-x-4 text-xs text-gray-600">
              <span>🌐 WiFi</span>
              <span>🚗 Parking</span>
              <span>🍽️ Restaurant</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                8.7
              </div>
              <div>
                <div className="text-sm font-semibold">Very Good</div>
                <div className="text-xs text-gray-600">923 reviews</div>
              </div>
            </div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
             
              <Link to={'/hoteldetails'}> See Availability</Link>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)};