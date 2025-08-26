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

// User Profile Sidebar Component
const ProfileSidebar = () => (
  <div className="bg-white p-6 rounded-lg shadow-md h-fit">
    <div className="text-center mb-6">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
        RK
      </div>
      <h3 className="font-bold text-lg">Rajesh Kumar</h3>
      <p className="text-gray-600 text-sm">rajesh.kumar@email.com</p>
    </div>
    
    <nav className="space-y-2">
      <a href="#" className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg font-semibold">
        <span className="mr-3">📋</span>
        My Bookings
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <span className="mr-3">👤</span>
        Profile Settings
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <span className="mr-3">💳</span>
        Payment Methods
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <span className="mr-3">❤️</span>
        Wishlist
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
        <span className="mr-3">🎁</span>
        Rewards & Offers
      </a>
    </nav>
  </div>
);

// Filter Tabs Component
const FilterTabs = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <div className="flex space-x-1">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
        All Bookings
      </button>
      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        Upcoming
      </button>
      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        Completed
      </button>
      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        Cancelled
      </button>
    </div>
  </div>
);

// Booking Card Component
const BookingCard = ({ booking }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex justify-between items-start mb-4">
      <div className="flex">
        <img src={booking.image} alt="Hotel" className="w-24 h-20 object-cover rounded-lg mr-4" />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{booking.hotelName}</h3>
          <p className="text-gray-600 text-sm">📍 {booking.location}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-400">{'⭐'.repeat(booking.stars)}</span>
            <span className="ml-2 text-sm text-gray-600">{booking.stars} Star</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
          booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
          booking.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
          'bg-red-100 text-red-800'
        }`}>
          {booking.status}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
      <div>
        <p className="text-gray-600">Booking ID</p>
        <p className="font-semibold">{booking.bookingId}</p>
      </div>
      <div>
        <p className="text-gray-600">Check-in</p>
        <p className="font-semibold">{booking.checkIn}</p>
      </div>
      <div>
        <p className="text-gray-600">Check-out</p>
        <p className="font-semibold">{booking.checkOut}</p>
      </div>
      <div>
        <p className="text-gray-600">Total Amount</p>
        <p className="font-semibold text-blue-700">₹{booking.amount.toLocaleString()}</p>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t">
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span>🛏️ {booking.roomType}</span>
        <span>👥 {booking.guests} Guests</span>
        <span>🌙 {booking.nights} Nights</span>
      </div>
      <div className="flex space-x-2">
        {booking.status === 'Upcoming' && (
          <>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 font-semibold">
              Modify Booking
            </button>
            <button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 font-semibold">
              Cancel Booking
            </button>
          </>
        )}
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold">
          View Details
        </button>
        {booking.status === 'Completed' && (
          <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 font-semibold">
            Write Review
          </button>
        )}
      </div>
    </div>
  </div>
);

// Bookings List Component
const BookingsList = () => {
  const bookings = [
    {
      bookingId: "RST001234",
      hotelName: "Ocean Paradise Resort",
      location: "Candolim Beach, Goa",
      stars: 5,
      image: "https://via.placeholder.com/100x80?text=Hotel+1",
      checkIn: "Mar 15, 2025",
      checkOut: "Mar 18, 2025",
      amount: 26060,
      status: "Upcoming",
      roomType: "Ocean View Room",
      guests: 2,
      nights: 3
    },
    {
      bookingId: "RST001189",
      hotelName: "Mountain Retreat Resort",
      location: "Manali, Himachal Pradesh",
      stars: 4,
      image: "https://via.placeholder.com/100x80?text=Hotel+2",
      checkIn: "Feb 10, 2025",
      checkOut: "Feb 13, 2025",
      amount: 18500,
      status: "Completed",
      roomType: "Deluxe Suite",
      guests: 2,
      nights: 3
    },
    {
      bookingId: "RST001098",
      hotelName: "City Palace Hotel",
      location: "Jaipur, Rajasthan",
      stars: 5,
      image: "https://via.placeholder.com/100x80?text=Hotel+3",
      checkIn: "Jan 22, 2025",
      checkOut: "Jan 25, 2025",
      amount: 22800,
      status: "Completed",
      roomType: "Royal Suite",
      guests: 2,
      nights: 3
    },
    {
      bookingId: "RST000987",
      hotelName: "Beach Resort Goa",
      location: "Baga Beach, Goa",
      stars: 3,
      image: "https://via.placeholder.com/100x80?text=Hotel+4",
      checkIn: "Dec 20, 2024",
      checkOut: "Dec 23, 2024",
      amount: 15600,
      status: "Cancelled",
      roomType: "Standard Room",
      guests: 2,
      nights: 3
    }
  ];

  return (
    <div>
      {bookings.map((booking, i) => (
        <BookingCard key={i} booking={booking} />
      ))}
    </div>
  );
};

// Empty State Component
const EmptyBookings = () => (
  <div className="bg-white p-12 rounded-lg shadow-md text-center">
    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-4xl">🏨</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">No bookings yet</h3>
    <p className="text-gray-600 mb-6">Start planning your perfect getaway!</p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
      Explore Hotels
    </button>
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

// Main My Bookings Component
const MyBookings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600">Manage your bookings and account settings</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-1/4">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Bookings</h2>
              <FilterTabs />
            </div>

            <BookingsList />
            
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-3 py-2 border rounded-md hover:bg-gray-50">Previous</button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
                <button className="px-3 py-2 border rounded-md hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border rounded-md hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;