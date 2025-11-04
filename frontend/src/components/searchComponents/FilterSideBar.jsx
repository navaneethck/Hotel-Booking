export const FilterSidebar = ({onFilterChange}) => {

    const handlePriceChange = (range)=>{
      onFilterChange((prev)=>{const exists = prev.priceRange.some(
      (r) => r[0] === range[0] && r[1] === range[1]
    );
    if (exists) {
      // removing it if already active means to toggle off will remove the content
      return {
        ...prev,
        priceRange: prev.priceRange.filter(
          (r) => !(r[0] === range[0] && r[1] === range[1])
        ),
      };
    } else {
      // add it
      return {
        ...prev,
        priceRange: [...prev.priceRange, range],
      };
    }
  });
    }

    const handleAminityChange = (amenity)=>{
      onFilterChange((prev)=>{
        const updated = prev.amenities.includes(amenity)
        ?prev.amenities.filter((a)=> a !== amenity)
        :[...prev.amenities,amenity];
        return {...prev,amenities:updated}
      })

    }
  
  return (
  <div className="bg-white p-6 rounded-lg shadow-md h-fit ">
    <h3 className="text-lg font-bold mb-4">Filters</h3>
    
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Price Range (per night)</h4>
      <div className="space-y-2">
          <label className="flex items-center">
          <input type="checkbox"  className="mr-2" onChange={() => onFilterChange(prev => ({ ...prev, priceRange: [] }))}
          />
          <span>Any Price</span>
          </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([5000,10000])}/>
          ₹5000  - ₹10000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([10000,15000])}/>
          ₹10000  - ₹15000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([15000,20000])} />
          ₹15000  - ₹20000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([20000,25000])}/>
          ₹20000  - ₹25000
        </label><br />
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold mb-2">Amenities</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2"  onChange={()=>handleAminityChange("Free Wi-fi")}/>
          🌐 Free WiFi
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2"  onChange={()=>handleAminityChange("Airport Shuttle")}/>
          🚌 Airport Shuttle
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handleAminityChange("Luxury Dining")}/>
          🍷 Luxury Dining
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handleAminityChange("Spa")} />
          💆 Spa
        </label>
      </div>
    </div>

    {/* <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
      Apply Filters
    </button> */}
  </div>
)};