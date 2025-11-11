export const Reviews = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
      Guest Reviews
    </h3>

    {/* Review 1 */}
    <div className="border-b pb-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
        <div>
          <div className="font-semibold text-base sm:text-lg">Rajesh Kumar</div>
          <div className="text-sm text-gray-600">Stayed in March 2025</div>
        </div>
        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm w-fit sm:w-auto">
          9.5
        </div>
      </div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-words">
        "Absolutely amazing stay! The ocean view from our room was breathtaking and the staff was incredibly helpful. 
        The food at the restaurant was delicious and the beach access was perfect."
      </p>
    </div>

    {/* Review 2 */}
    <div className="border-b pb-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
        <div>
          <div className="font-semibold text-base sm:text-lg">Priya Sharma</div>
          <div className="text-sm text-gray-600">Stayed in February 2025</div>
        </div>
        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm w-fit sm:w-auto">
          8.8
        </div>
      </div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-words">
        "Great location and beautiful resort. The pool area was fantastic and the spa treatments were very relaxing. 
        Would definitely recommend for a romantic getaway."
      </p>
    </div>

    {/* CTA */}
    <button className="text-blue-600 font-semibold hover:underline text-sm sm:text-base block mx-auto sm:mx-0">
      Read all 1,847 reviews →
    </button>
  </div>
);
