import { useEffect, useState } from "react";

export const TrendingDestinations = () => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/hotels/trending-location`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          console.log("Cannot fetch data");
          return;
        }
        const data = await response.json();
        console.log("fetched response", data);
        setDestination(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDestination();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center md:text-left">
        Trending Destinations
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {destination.map((place) => (
          <div
            key={place._id}
            className="relative rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={place.images[0]}
              className="w-full h-48 sm:h-40 object-cover rounded-lg shadow-lg"
              alt={place.name}
            />
            <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm sm:text-base px-2 py-1 rounded">
              {place.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
