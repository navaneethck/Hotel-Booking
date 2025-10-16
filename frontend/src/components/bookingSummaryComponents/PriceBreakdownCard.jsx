import { SiRazorpay } from "react-icons/si";
import { UseUserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";
import { InitRazorpay } from "./InitRazorpay";
import { useEffect } from "react";
export const PriceBreakdown = ({hotelId,roomTypes,count,count1,totalPrice,checkIn,checkOut,guest,formData}) => {
  const { user } = UseUserContext();
  const {purple,purple2} = useRoomSeceltionContext();
  const navigate = useNavigate();
  const totalNumOfRooms=count+count1;
  console.log(`total rooms ${totalNumOfRooms}`)

const roomTypeThruClr = () =>
  purple && purple2
    ? `${roomTypes?.[0]?.name} & ${roomTypes?.[1]?.name}`
    : purple
    ? roomTypes?.[0]?.name
    : purple2
    ? roomTypes?.[1]?.name
    : "Nothing is gotten";

  const canProceed =
  formData.firstName &&
  formData.lastName &&
  formData.email &&
  formData.phone;

  const TotalNightsCal = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const diffTime = checkOutDate - checkInDate;
  const nights = diffTime / (1000 * 60 * 60 * 24);

  return nights;
  };
  const TotalNights=TotalNightsCal(checkIn,checkOut);
  const totalPricePerNight =TotalNights*totalPrice;
  const finalPrice = Math.max(totalPricePerNight - 3060 - 2500, 0);

  const finalData={
     hotelId,
     checkIn,
     checkOut,
     roomType:roomTypeThruClr(),
     totalNumOfRooms:totalNumOfRooms,
     guests: { adults: guest },
     totalPrice:totalPrice,
     totalPricePerNight,
     finalPrice
  }

      useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => {
        console.log("Razorpay SDK loaded successfully");
      };
      script.onerror = () => {
        alert("Razorpay SDK failed to load. Check your internet connection.");
      };

      document.body.appendChild(script);
    }, []);

  const handleSubmitForm = async(e)=>{
    e.preventDefault();
    if(!user){
      alert("Please log in to continue");
      return;
    }

    if(!formData.firstName ||
       !formData.lastName ||
       !formData.email ||
       !formData.phone){
      alert('please fill the valid  inputs');
      return;
    }
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/guest/guestdetails`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
      })

      const result = await response.json();
    if(result?.success === true){
  try {
    const bookingResponse = await fetch(`${import.meta.env.VITE_API_URI}/api/booking/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalData),
    });
    const bookingResult = await bookingResponse.json();
    if (bookingResult?.success === true) {
      console.log("loging the booking result",bookingResult.newBooking._id)
      {alert("success")}
      const bookingID = bookingResult.newBooking._id;

    const response = await fetch(`${import.meta.env.VITE_API_URI}/api/payment/create-order`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({bookingId:bookingID})
      })
      
      const Order = await response.json();
      if (!response.ok) throw new Error(Order.message || "Error creating Razorpay order");

      const { order, key, bookingId } = Order;
      InitRazorpay(order,key,bookingId,navigate);
    } 
  } catch (err) {
    console.error("Error while on Booking:", err);
    alert(bookingResult.message || "Something went wrong!");
  }
  }    
    }catch(err){
      console.error("Error:", err);
      alert(result.message || "Something went wrong!")
    }
  }

  return(
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>
    
    <div className="space-y-3 mb-4">
      <div className="flex justify-between">
        <span>Room rate ({TotalNights} nights)</span>
        <span>₹{totalPricePerNight}</span>
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
        <span className="text-blue-700">₹{finalPrice}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">For {TotalNights} nights, {guest} guests</p>
    </div>

    <div className="bg-green-50 p-3 rounded-md mb-4">
      <div className="flex items-center text-green-700">
        <span className="mr-2">✓</span>
        <span className="text-sm font-semibold">Free cancellation until 24 hours before check-in</span>
      </div>
    </div>

    <button
      onClick={handleSubmitForm}
      disabled={!canProceed}
      className={`w-full py-3 font-bold rounded-lg text-lg transition-colors
        ${canProceed
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
    >
      Proceed to payment
    </button>

    <div className="mt-4 text-center">
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>🔒 Secure payment</span>
                  <div className="flex items-center space-x-1">
            <SiRazorpay className="text-blue-600 text-lg" /> {/* ✅ styled icon */}
            <span>Razorpay</span>
            </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        By proceeding, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </div>
  </div>
)};
