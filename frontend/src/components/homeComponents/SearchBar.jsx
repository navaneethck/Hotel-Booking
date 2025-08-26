import { Link } from "react-router-dom";
import { UseUserContext } from "../../contexts/userContext";

export const SearchBar = () => {
 const{user}= UseUserContext();
   return (
  <section className="bg-purple-600 py-10">
    <div className="max-w-5xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Find your perfect stay</h2>
      <h3 className="text-2xl font-bold mb-6">{user?user.name:"Guest"}</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-center bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search destination"
          className="flex-1 p-3 rounded-md border"
        />
        <input type="date" className="p-3 rounded-md border" />
        <input
          type="number"
          min="1"
          placeholder="Guests"
          className="p-3 rounded-md border w-28"
        />
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          <Link to='/searchresults'>Search</Link>
        </button>
      </div>
    </div>
  </section>
);
}