export const Description = ({ Description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
      About This Hotel
    </h3>
    <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base break-words">
      {Description}
    </p>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
      The resort boasts multiple dining options, a full-service spa, and fitness center. 
      Each room is elegantly furnished with modern amenities and offers breathtaking views.
    </p>
  </div>
);
