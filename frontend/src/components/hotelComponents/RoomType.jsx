import { useState } from "react";

export const RoomTypes = ({roomTypes}) =>{
  const [purple,setPurple] = useState(false)
  const [purple2,setPurple2]=useState(false)
return (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-4">Room Types & Rates</h3>
    
    {/*"p-4 border-b  border-black bg-gray-50" */ }
    <div className={`border mb-4 ${purple?"border-purple-600 border-4":"border-black"}`}>
      <div className={`p-4 border-b ${purple?"border-purple-600 bg-purple-600 text-white":"border-black bg-gray-50"}`}>
        <h4 className="font-semibold">{roomTypes[0].name} Room</h4>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Max occupancy: 2 adults</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>🛏️ 1 King Bed</span>
              <span>🚿 Private Bathroom</span>
              <span>🌊 Ocean View</span>
            </div>
          </div>
          {/*"mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 cursor-pointer"*/}
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">{roomTypes[0].price}</div>
            <div className="text-sm text-gray-600">per night</div>
            <button className={`mt-2 px-4 py-2 rounded-lg cursor-pointer font-semibold ${purple?"bg-purple-600 hover:bg-purple-400 text-white":"bg-yellow-400 text-black hover:bg-yellow-300"}`} onClick={()=>setPurple(!purple)}>
              {purple?"Unselect This Room ":"Select This Room"}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className={`border mb-4 ${purple2?"border-purple-600 border-4":"border-black"}`}>
      <div className={`p-4 border-b ${purple2?"border-purple-600 bg-purple-600 text-white":"border-black bg-gray-50"}`}>
        <h4 className="font-semibold">{roomTypes[1].name} Room</h4>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Max occupancy: 4 adults</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>🛏️ 2 Queen Beds</span>
              <span>🚿 Private Bathroom</span>
              <span>🌊 Balcony</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-700">{roomTypes[1].price}</div>
            <div className="text-sm text-gray-600">per night</div>
            <button className={`mt-2 px-4 py-2 rounded-lg cursor-pointer font-semibold ${purple2?"bg-purple-600 hover:bg-purple-400 text-white":"bg-yellow-400 text-black hover:bg-yellow-300"}`} onClick={()=>setPurple2(!purple2)}>
              {purple2?"Unselect This Room ":"Select This Room"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)};
