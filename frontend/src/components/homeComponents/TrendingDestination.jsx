
export const TrendingDestinations = () => {
  const destinations = ["Goa", "Kerala", "Jaipur", "Mumbai"];
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h3 className="text-2xl font-bold mb-6">Trending Destinations</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((place, i) => (
          <div key={i} className="relative">
            <img
              src={`https://via.placeholder.com/400x200?text=${place}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
              alt={place}
            />
            <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
              {place}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};