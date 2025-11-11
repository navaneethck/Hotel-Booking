import { useState } from "react";

export const FilterSidebar = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (range) => {
    onFilterChange((prev) => {
      const exists = prev.priceRange.some(
        (r) => r[0] === range[0] && r[1] === range[1]
      );
      return exists
        ? {
            ...prev,
            priceRange: prev.priceRange.filter(
              (r) => !(r[0] === range[0] && r[1] === range[1])
            ),
          }
        : { ...prev, priceRange: [...prev.priceRange, range] };
    });
  };

  const handleAmenityChange = (amenity) => {
    onFilterChange((prev) => {
      const updated = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updated };
    });
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md h-fit">
      {/* Header for mobile toggle */}
      <div className="flex justify-between items-center sm:block mb-2">
        <h3 className="text-lg font-bold">Filters</h3>
        <button
          className="sm:hidden px-3 py-1 text-sm bg-purple-600 text-white rounded-md font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {/* Filter content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
        }`}
      >
        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-sm sm:text-base">
            Price Range (per night)
          </h4>
          <div className="space-y-2 text-sm sm:text-base">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600 w-4 h-4"
                onChange={() =>
                  onFilterChange((prev) => ({ ...prev, priceRange: [] }))
                }
              />
              <span>Any Price</span>
            </label>

            {[
              [5000, 10000],
              [10000, 15000],
              [15000, 20000],
              [20000, 25000],
            ].map(([min, max]) => (
              <label key={min} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 accent-purple-600 w-4 h-4"
                  onChange={() => handlePriceChange([min, max])}
                />
                ₹{min.toLocaleString()} - ₹{max.toLocaleString()}
              </label>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm sm:text-base">
            Amenities
          </h4>
          <div className="space-y-2 text-sm sm:text-base">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600 w-4 h-4"
                onChange={() => handleAmenityChange("Free Wi-fi")}
              />
              🌐 Free WiFi
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600 w-4 h-4"
                onChange={() => handleAmenityChange("Airport Shuttle")}
              />
              🚌 Airport Shuttle
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600 w-4 h-4"
                onChange={() => handleAmenityChange("Luxury Dining")}
              />
              🍷 Luxury Dining
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600 w-4 h-4"
                onChange={() => handleAmenityChange("Spa")}
              />
              💆 Spa
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
