import { SiRazorpay } from "react-icons/si";
import { UseUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";
import { InitRazorpay } from "./InitRazorpay";
import { useEffect } from "react";

export const PriceBreakdown = ({
  hotelId,
  roomTypes,
  count,
  count1,
  totalPrice,
  checkIn,
  checkOut,
  guest,
  formData,
}) => {
  const { user } = UseUserContext();
  const { purple, purple2 } = useRoomSeceltionContext();
  const navigate = useNavigate();
  const totalNumOfRooms = count + count1;

  const roomTypeThruClr = () =>
    purple && purple2
      ? `${roomTypes?.[0]?.name} & ${roomTypes?.[1]?.name}`
      : purple
      ? roomTypes?.[0]?.name
      : purple2
      ? roomTypes?.[1]?.name
      : "Nothing selected";

  const canProceed =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone;

  const TotalNightsCal = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  };

  const TotalNights = TotalNightsCal(checkIn, checkOut);
  const totalPricePerNight = TotalNights * totalPrice;
  const finalPrice = Math.max(totalPricePerNight + 3060 - 2500, 0);

  const finalData = {
    hotelId,
    checkIn,
    checkOut,
    roomType: roomTypeThruClr(),
    totalNumOfRooms,
    guests: { adults: guest },
    totalPrice,
    totalPricePerNight,
    finalPrice,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please log in to continue");
    if (!canProceed) return alert("Please fill all required fields");

    try {
      const guestResponse = await fetch(
        `${import.meta.env.VITE_API_URI}/api/guest/guestdetails`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const guestResult = await guestResponse.json();
      if (guestResult?.success === true) {
        const bookingResponse = await fetch(
          `${import.meta.env.VITE_API_URI}/api/booking/booking`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(finalData),
          }
        );
        const bookingResult = await bookingResponse.json();
        if (bookingResult?.success === true) {
          const bookingID = bookingResult.newBooking._id;
          const response = await fetch(
            `${import.meta.env.VITE_API_URI}/api/payment/create-order`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ bookingId: bookingID }),
            }
          );
          const Order = await response.json();
          if (!response.ok)
            throw new Error(Order.message || "Error creating Razorpay order");
          const { order, key, bookingId } = Order;
          InitRazorpay(order, key, bookingId, navigate);
        }
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
        Price Breakdown
      </h3>

      {/* Breakdown list */}
      <div className="space-y-2 mb-4 text-sm sm:text-base">
        <div className="flex justify-between flex-wrap">
          <span>Room rate ({TotalNights} nights)</span>
          <span>₹{totalPricePerNight}</span>
        </div>
        <div className="flex justify-between flex-wrap">
          <span>Taxes & fees</span>
          <span>₹3,060</span>
        </div>
        <div className="flex justify-between flex-wrap text-green-600">
          <span>Discount (Early bird)</span>
          <span>-₹2,500</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t pt-3 sm:pt-4 mb-4">
        <div className="flex justify-between items-center text-base sm:text-xl font-bold flex-wrap">
          <span>Total Amount</span>
          <span className="text-blue-700 text-lg sm:text-xl">
            ₹{finalPrice}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          For {TotalNights} nights, {guest} guests
        </p>
      </div>

      {/* Info note */}
      <div className="bg-green-50 p-2 sm:p-3 rounded-md mb-4">
        <div className="flex items-start sm:items-center text-green-700 text-xs sm:text-sm">
          <span className="mr-2">✓</span>
          <span>Free cancellation until 24 hours before check-in</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleSubmitForm}
        disabled={!canProceed}
        className={`w-full py-2.5 sm:py-3 font-bold rounded-lg text-base sm:text-lg transition-colors cursor-pointer
          ${
            canProceed
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
      >
        Proceed to payment
      </button>

      {/* Payment info */}
      <div className="mt-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span>🔒 Secure payment</span>
          <div className="flex items-center gap-1">
            <SiRazorpay className="text-blue-600 text-base sm:text-lg" />
            <span>Razorpay</span>
          </div>
        </div>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-2 px-2">
          By proceeding, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </div>
    </div>
  );
};
