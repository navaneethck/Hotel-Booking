import { useEffect,useState } from "react";

export const TopHotels = () => {
  const [topHotel,setTopHotel] = useState([])
  useEffect(()=>{
    const fetchTopHotels = async ()=>{
      try{
        const response = await fetch (`${import.meta.env.VITE_API_URI}/api/hotels/top-rated-hotels`,{
          method:'GET',
          credentials:'include'
        })
        if(!response.ok){
          return console.log('cannot fetch data')
        }
        const data = await response.json()
        setTopHotel(data);

      }catch(err){
         console.error(err)
      }
    }
    fetchTopHotels()
  },[])
  const imageIndexs = [2,3,4]
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6">Top Rated Hotels</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topHotel.map((hotel,i) => (
          <div key={hotel._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={hotel.images[imageIndexs[i] ||0]}
              alt={hotel.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">{hotel.name}</h4>
              <p className="text-sm text-gray-600">{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};