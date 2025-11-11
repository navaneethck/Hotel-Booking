import { Header } from "../components/bookingSummaryComponents/Header";
import { ProgressSteps } from "../components/bookingSummaryComponents/ProgressStep";
import { GuestDetailsForm } from "../components/bookingSummaryComponents/GuestDetils";
import { BookingSummary } from "../components/bookingSummaryComponents/BookingSummaryCard";
import { PriceBreakdown } from "../components/bookingSummaryComponents/PriceBreakdownCard";
import { CancellationPolicy } from "../components/bookingSummaryComponents/cancellationPolicy";
import { Footer } from "../components/bookingSummaryComponents/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BookingSummaryPage = () => {
  const { state } = useLocation();
  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 text-center p-6">
        <p className="text-lg font-semibold mb-3">
          No booking data found. Please go back and book a room.
        </p>
        <a
          href="/"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Go back to homepage
        </a>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  const {
    hotelId,
    count,
    count1,
    hotelImages,
    guest,
    checkIn,
    checkOut,
    hotelName,
    hotelLocation,
    hotelRating,
    roomTypes,
    totalSum,
  } = state;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed header */}
      <Header />

      {/* Progress steps with top offset */}
      <div className="mt-20 px-3 sm:px-4">
        <ProgressSteps />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto py-6 px-3 sm:px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Forms */}
          <div className="w-full lg:w-2/3 space-y-6 order-2 lg:order-1">
            <GuestDetailsForm formData={formData} setFormData={setFormData} />
            <CancellationPolicy />
          </div>

          {/* Right Column - Booking Summary + Price Breakdown */}
          <div className="w-full lg:w-1/3 space-y-6 order-1 lg:order-2">
            <BookingSummary
              hotelImages={hotelImages}
              hotelName={hotelName}
              hotelRating={hotelRating}
              hotelLocation={hotelLocation}
              guest={guest}
              checkIn={checkIn}
              checkOut={checkOut}
              roomTypes={roomTypes}
            />
            <PriceBreakdown
              hotelId={hotelId}
              count={count}
              count1={count1}
              totalPrice={totalSum}
              checkIn={checkIn}
              checkOut={checkOut}
              guest={guest}
              formData={formData}
              roomTypes={roomTypes}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingSummaryPage;
