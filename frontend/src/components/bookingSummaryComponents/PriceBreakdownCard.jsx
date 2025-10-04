
export const PriceBreakdown = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>
    
    <div className="space-y-3 mb-4">
      <div className="flex justify-between">
        <span>Room rate (3 nights)</span>
        <span>₹25,500</span>
      </div>
      <div className="flex justify-between">
        <span>Taxes & fees</span>
        <span>₹3,060</span>
      </div>
      <div className="flex justify-between text-green-600">
        <span>Discount (Early bird)</span>
        <span>-₹2,500</span>
      </div>
    </div>

    <div className="border-t pt-4 mb-4">
      <div className="flex justify-between text-xl font-bold">
        <span>Total Amount</span>
        <span className="text-blue-700">₹26,060</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">For 3 nights, 2 guests</p>
    </div>

    <div className="bg-green-50 p-3 rounded-md mb-4">
      <div className="flex items-center text-green-700">
        <span className="mr-2">✓</span>
        <span className="text-sm font-semibold">Free cancellation until 24 hours before check-in</span>
      </div>
    </div>

    <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 text-lg">
      Proceed to Payment
    </button>

    <div className="mt-4 text-center">
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>🔒 Secure payment</span>
        <span>💳 All cards accepted</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        By proceeding, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </div>
  </div>
);
