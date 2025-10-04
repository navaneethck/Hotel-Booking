export const ProgressSteps = () => (
  <div className="bg-white py-4 border-b">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-center space-x-8">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            ✓
          </div>
          <span className="ml-2 text-green-600 font-semibold">Select Hotel</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="ml-2 text-blue-600 font-semibold">Review & Book</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <span className="ml-2 text-gray-600">Payment</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
            4
          </div>
          <span className="ml-2 text-gray-600">Confirmation</span>
        </div>
      </div>
    </div>
  </div>
);