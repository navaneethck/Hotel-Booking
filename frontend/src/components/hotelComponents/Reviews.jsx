
export const Reviews = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-4">Guest Reviews</h3>
    
    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-semibold">Rajesh Kumar</div>
          <div className="text-sm text-gray-600">Stayed in March 2025</div>
        </div>
        <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm">9.5</div>
      </div>
      <p className="text-gray-700">
        "Absolutely amazing stay! The ocean view from our room was breathtaking and the staff was incredibly helpful. 
        The food at the restaurant was delicious and the beach access was perfect."
      </p>
    </div>

    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-semibold">Priya Sharma</div>
          <div className="text-sm text-gray-600">Stayed in February 2025</div>
        </div>
        <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm">8.8</div>
      </div>
      <p className="text-gray-700">
        "Great location and beautiful resort. The pool area was fantastic and the spa treatments were very relaxing. 
        Would definitely recommend for a romantic getaway."
      </p>
    </div>

    <button className="text-blue-600 font-semibold hover:underline">
      Read all 1,847 reviews →
    </button>
  </div>
);