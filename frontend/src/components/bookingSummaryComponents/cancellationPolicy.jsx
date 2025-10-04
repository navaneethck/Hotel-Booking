
export const CancellationPolicy = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
    
    <div className="space-y-3">
      <div className="flex items-start">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-green-700">Free cancellation</p>
          <p className="text-sm text-gray-600">Cancel before March 14, 2025 (24 hours before check-in) for a full refund</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-yellow-700">Partial refund</p>
          <p className="text-sm text-gray-600">Cancel on March 15, 2025 for 50% refund</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <div>
          <p className="font-semibold text-red-700">No refund</p>
          <p className="text-sm text-gray-600">No refund for no-shows or late cancellations</p>
        </div>
      </div>
    </div>
  </div>
);
