export const CancellationPolicy = () => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
      Cancellation Policy
    </h3>

    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
      {/* Free cancellation */}
      <div className="flex items-start">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-green-700 leading-snug">
            Free cancellation
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Cancel before <span className="font-medium">March 14, 2025</span> (24 hours before check-in) for a full refund.
          </p>
        </div>
      </div>

      {/* Partial refund */}
      <div className="flex items-start">
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-yellow-700 leading-snug">
            Partial refund
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Cancel on <span className="font-medium">March 15, 2025</span> for a 50% refund.
          </p>
        </div>
      </div>

      {/* No refund */}
      <div className="flex items-start">
        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-red-700 leading-snug">No refund</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            No refund for no-shows or late cancellations.
          </p>
        </div>
      </div>
    </div>
  </div>
);
