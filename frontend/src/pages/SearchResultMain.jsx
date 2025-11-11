import { FilterSidebar } from "../components/searchComponents/FilterSideBar";
import { Footer } from "../components/searchComponents/Footer";
import { HotelCards } from "../components/searchComponents/HotelCards";
import { SearchBar } from "../components/searchComponents/SearchBar";
import { Header } from "../components/searchComponents/Header";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const SearchResultsMain = () => {
  const [hotels, setHotel] = useState([]);
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const [sortOption, setSortOption] = useState("Recommended");
  const [filters, setFilters] = useState({
    priceRange: [],
    starHotelRating: [],
    amenities: [],
  });

  // Sorting + filtering logic
  const sortedHotel = useMemo(() => {
    let HotelCopy = [...hotels];

    if (filters.priceRange.length > 0) {
      HotelCopy = HotelCopy.filter((hotel) =>
        filters.priceRange.some(
          ([min, max]) => hotel.price >= min && hotel.price <= max
        )
      );
    }

    if (filters.amenities.length > 0) {
      HotelCopy = HotelCopy.filter((hotel) =>
        filters.amenities.some((amenity) =>
          hotel.amenities
            .map((a) => a.toLowerCase())
            .includes(amenity.toLowerCase())
        )
      );
    }

    if (sortOption === "Price: Low to High") {
      return HotelCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      return HotelCopy.sort((a, b) => b.price - a.price);
    }
    return HotelCopy;
  }, [hotels, sortOption, filters]);

  // Fetch hotels
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/hotels/search?destination=${encodeURIComponent(
            destination
          )}`,
          {
            credentials: "include",
            method: "GET",
          }
        );

        const parsedData = await response.json();
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setHotel(parsedData);
          setMessage("");
        } else {
          setHotel([]);
          setMessage(parsedData.message || "No hotels found");
        }
      } catch (err) {
        console.error(err);
        setMessage("Something went wrong while fetching hotels");
      }
    };

    if (destination) fetchHotel();
  }, [destination]);

  return (
    <div className="min-h-screen bg-gray-50 pt-[16rem] sm:pt-52 md:pt-48">
      {/* Fixed header + searchbar */}
      <Header />
      <SearchBar />

      {/* Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Heading + Sort */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 space-y-3 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Hotels at your chosen destination
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {hotels.length} properties found
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              className="p-2 border rounded-md text-sm sm:text-base"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 order-2 md:order-1">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Hotel cards */}
          <div className="w-full md:w-3/4 order-1 md:order-2 space-y-6">
            {hotels.length > 0 ? (
              sortedHotel.map((h) => <HotelCards key={h._id} hotel={h} />)
            ) : (
              <HotelCards message={message} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultsMain;
