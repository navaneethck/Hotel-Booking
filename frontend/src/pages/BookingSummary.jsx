import { Header } from "../components/bookingSummaryComponents/Header";
import { ProgressSteps } from "../components/bookingSummaryComponents/ProgressStep";
import { GuestDetailsForm } from "../components/bookingSummaryComponents/GuestDetils";
import { BookingSummary } from "../components/bookingSummaryComponents/BookingSummaryCard";
import { PriceBreakdown } from "../components/bookingSummaryComponents/PriceBreakdownCard";
import { CancellationPolicy } from "../components/bookingSummaryComponents/cancellationPolicy";
import { Footer } from "../components/bookingSummaryComponents/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const BookingSummaryPage = () => {
  const { state } = useLocation();
  if (!state) {
    return <p>No booking data found. Please go back and book a room.</p>;
  }
  const [formData,setFormData] =useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequest: "",
      })
  const {hotelId,count,count1, hotelImages, guest, checkIn, checkOut, hotelName, hotelLocation, hotelRating, roomTypes,totalSum } = state;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mt-20">
      <ProgressSteps/>
      </div>
      <div className="max-w-6xl mx-auto py-6 px-4 ">
        {/* Back Button */}
        {/* <div className="mb-4">
          <Link to={'/hoteldetails'}><button className="text-blue-600 hover:underline">← Back to hotel details</button></Link>
        </div> */}

        <div className="flex gap-6">
          {/* Left Column - Forms */}
          <div className="w-2/3 space-y-6">
            <GuestDetailsForm formData={formData} setFormData={setFormData}/>
            <CancellationPolicy />
          </div>

          {/* Right Column - Summary & Payment */}
          <div className="w-1/3 space-y-6">
            <BookingSummary hotelImages={hotelImages} hotelName={hotelName}hotelRating={hotelRating} hotelLocation={hotelLocation} 
             guest={guest} checkIn={checkIn} checkOut={checkOut} roomTypes={roomTypes} />
            <PriceBreakdown hotelId={hotelId} count={count} count1={count1} totalPrice={totalSum} checkIn={checkIn} checkOut={checkOut} guest={guest}
            formData={formData} roomTypes={roomTypes}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingSummaryPage;