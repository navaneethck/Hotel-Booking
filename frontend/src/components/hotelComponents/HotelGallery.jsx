export const HotelGallery = () => (
  <div className="grid grid-cols-4 gap-2 h-96">
    <div className="col-span-2 row-span-2">
      <img src="https://via.placeholder.com/600x400?text=Main+Hotel+Image" alt="Hotel" className="w-full h-full object-cover rounded-l-lg" />
    </div>
    <div>
      <img src="https://via.placeholder.com/300x200?text=Room" alt="Room" className="w-full h-full object-cover" />
    </div>
    <div>
      <img src="https://via.placeholder.com/300x200?text=Pool" alt="Pool" className="w-full h-full object-cover rounded-tr-lg" />
    </div>
    <div>
      <img src="https://via.placeholder.com/300x200?text=Restaurant" alt="Restaurant" className="w-full h-full object-cover" />
    </div>
    <div className="relative">
      <img src="https://via.placeholder.com/300x200?text=Lobby" alt="Lobby" className="w-full h-full object-cover rounded-br-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold rounded-br-lg">
        +25 more
      </div>
    </div>
  </div>
);
