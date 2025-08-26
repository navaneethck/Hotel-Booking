
export const TopHotels = () => {
  const hotels = [
    { name: "Luxury Palace", location: "New Delhi" },
    { name: "Sea View Resort", location: "Goa" },
    { name: "Mountain Retreat", location: "Manali" },
  ];
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6">Top Rated Hotels</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((hotel, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/400x200?text=${hotel.name}`}
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