import { FilterSidebar } from "../components/searchComponents/FilterSideBar";
import { Footer } from "../components/searchComponents/Footer";
import { HotelCards } from "../components/searchComponents/HotelCards";
import { SearchBar } from "../components/searchComponents/SearchBar";
import { Header } from "../components/searchComponents/Header";

const SearchResultsMain = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-36">
      <Header/>
      <SearchBar/>
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Hotels in Goa, India</h2>
            <p className="text-gray-600">125 properties found</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="p-2 border rounded-md">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-3/4">
            <HotelCards />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultsMain;