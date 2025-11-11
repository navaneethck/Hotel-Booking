export const ProgressSteps = () => (
  <div className="bg-white py-3 sm:py-4 border-b">
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-sm sm:text-base">
        
        {/* Step 1 */}
        <div className="flex items-center min-w-[140px] justify-center sm:justify-start">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            ✓
          </div>
          <span className="ml-2 text-green-600 font-semibold whitespace-nowrap">
            Select Hotel
          </span>
        </div>

        <div className="hidden sm:block w-8 h-px bg-gray-300"></div>

        {/* Step 2 */}
        <div className="flex items-center min-w-[140px] justify-center sm:justify-start">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            2
          </div>
          <span className="ml-2 text-blue-600 font-semibold whitespace-nowrap">
            Review & Book
          </span>
        </div>

        <div className="hidden sm:block w-8 h-px bg-gray-300"></div>

        {/* Step 3 */}
        <div className="flex items-center min-w-[140px] justify-center sm:justify-start">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            3
          </div>
          <span className="ml-2 text-gray-600 whitespace-nowrap">Payment</span>
        </div>

        <div className="hidden sm:block w-8 h-px bg-gray-300"></div>

        {/* Step 4 */}
        <div className="flex items-center min-w-[140px] justify-center sm:justify-start">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            4
          </div>
          <span className="ml-2 text-gray-600 whitespace-nowrap">
            Confirmation
          </span>
        </div>
      </div>
    </div>
  </div>
);
