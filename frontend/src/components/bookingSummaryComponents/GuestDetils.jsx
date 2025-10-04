export const GuestDetailsForm = () => (
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
