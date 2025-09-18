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
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([10000,20000])}/>
          ₹10000  - ₹20000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([20000,28000])}/>
          ₹20000  - ₹28000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([30000,40000])} />
          ₹30000  - ₹40000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([40000,50000])}/>
          ₹40000  - ₹50000
        </label><br />
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" onChange={()=>handlePriceChange([50000,60000])}/>
          ₹50000  - ₹60000
        </label><br />
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold mb-2">Star Rating</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐⭐⭐ 5 Stars</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐⭐ 4 Stars</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>⭐⭐⭐ 3 Stars</span>
        </label>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold mb-2">Amenities</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🌐 Free WiFi</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🚗 Free Parking</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🍽️ Restaurant</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>🏋️ Fitness Center</span>
        </label>
      </div>
    </div>

    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
      Apply Filters
    </button>
  </div>
)};