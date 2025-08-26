// Header Component
const Header = () => (
  <header className="bg-blue-700 text-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Rest.com</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
          Login
        </button>
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
          Sign Up
        </button>
      </div>
    </div>
  </header>
);

// Progress Steps Component
const ProgressSteps = () => (
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

// Guest Details Form Component
const GuestDetailsForm = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">Guest Details</h3>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-semibold mb-2">First Name *</label>
        <input type="text" placeholder="Enter first name" className="w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Last Name *</label>
        <input type="text" placeholder="Enter last name" className="w-full p-3 border rounded-md" />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">Email Address *</label>
      <input type="email" placeholder="Enter email address" className="w-full p-3 border rounded-md" />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">Phone Number *</label>
      <div className="flex">
        <select className="p-3 border rounded-l-md bg-gray-50">
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
        </select>
        <input type="tel" placeholder="Enter phone number" className="flex-1 p-3 border-t border-r border-b rounded-r-md" />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">Special Requests (Optional)</label>
      <textarea rows="3" placeholder="Any special requests or preferences..." className="w-full p-3 border rounded-md resize-none"></textarea>
    </div>

    <div className="bg-blue-50 p-4 rounded-md">
      <div className="flex items-start">
        <input type="checkbox" className="mt-1 mr-3" />
        <div className="text-sm">
          <p className="font-semibold mb-1">Subscribe to offers and updates</p>
          <p className="text-gray-600">Get the best deals and exclusive offers delivered to your inbox.</p>
        </div>
      </div>
    </div>
  </div>
);

// Booking Summary Component
const BookingSummary = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
    
    {/* Hotel Info */}
    <div className="flex mb-6">
      <img src="https://via.placeholder.com/100x80?text=Hotel" alt="Hotel" className="w-24 h-20 object-cover rounded-md mr-4" />
      <div>
        <h4 className="font-bold text-lg">Ocean Paradise Resort</h4>
        <p className="text-gray-600 text-sm">📍 Candolim Beach, Goa</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-sm text-gray-600">5 Star Resort</span>
        </div>
      </div>
    </div>

    {/* Booking Details */}
    <div className="border-t pt-4 mb-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Check-in</p>
          <p className="font-semibold">March 15, 2025</p>
          <p className="text-xs text-gray-500">After 3:00 PM</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Check-out</p>
          <p className="font-semibold">March 18, 2025</p>
          <p className="text-xs text-gray-500">Before 11:00 AM</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Duration</p>
          <p className="font-semibold">3 nights</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Guests</p>
          <p className="font-semibold">2 Adults</p>
        </div>
      </div>
    </div>

    {/* Room Details */}
    <div className="border-t pt-4">
      <h5 className="font-semibold mb-2">Room Details</h5>
      <div className="bg-gray-50 p-3 rounded-md">
        <p className="font-semibold">Standard Ocean View Room</p>
        <div className="flex space-x-4 text-sm text-gray-600 mt-1">
          <span>🛏️ 1 King Bed</span>
          <span>🚿 Private Bathroom</span>
          <span>🌊 Ocean View</span>
        </div>
      </div>
    </div>
  </div>
);

// Price Breakdown Component
const PriceBreakdown = () => (
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

// Cancellation Policy Component
const CancellationPolicy = () => (
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

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
    <div className="max-w-7xl mx-auto flex justify-between">
      <p>&copy; 2025 Rest.com</p>
      <div className="space-x-6">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Careers</a>
      </div>
    </div>
  </footer>
);

// Main Booking Summary Component
const BookingSummaryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProgressSteps />
      
      <div className="max-w-6xl mx-auto py-6 px-4">
        {/* Back Button */}
        <div className="mb-4">
          <button className="text-blue-600 hover:underline">← Back to hotel details</button>
        </div>

        <div className="flex gap-6">
          {/* Left Column - Forms */}
          <div className="w-2/3 space-y-6">
            <GuestDetailsForm />
            <CancellationPolicy />
          </div>

          {/* Right Column - Summary & Payment */}
          <div className="w-1/3 space-y-6">
            <BookingSummary />
            <PriceBreakdown />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingSummaryPage;