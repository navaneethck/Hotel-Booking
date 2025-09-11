export const SearchBar = () => (
  <section className="bg-purple-500 py-10 fixed top-16 left-0 w-full h-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
        <input type="text" placeholder="Search destination" className="flex-1 p-3 rounded-md border" />
        <input type="date" className="p-3 rounded-md border" />
        <input type="date" className="p-3 rounded-md border" />
        <input type="number" min="1" placeholder="Guests" className="p-3 rounded-md border w-28" />
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Search</button>
      </div>
    </div>
  </section>
);
