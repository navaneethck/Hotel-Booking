export const HotelGallery = () => (
  <div className="grid grid-cols-4 border-2 border-purple-400 gap-2 h-96 rounded-lg overflow-hidden">
    <div className="col-span-2 row-span-2">
      <img
        src="https://via.placeholder.com/600x400?text=Main+Hotel+Image"
        alt="Hotel"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="https://via.placeholder.com/300x200?text=Room"
        alt="Room"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="https://via.placeholder.com/300x200?text=Pool"
        alt="Pool"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="https://via.placeholder.com/300x200?text=Restaurant"
        alt="Restaurant"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative group">
      <img
        src="https://via.placeholder.com/300x200?text=Lobby"
        alt="Lobby"
        className="w-full h-full object-cover"
      />
  
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-100 group-hover:opacity-90 transition">
        +25 more
      </div>
    </div>
  </div>
);
