import { SiRazorpay } from "react-icons/si";
import { UseUserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";
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
  user &&
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

  const finalData={
     hotelId,
     checkIn,
     checkOut,
     roomType:roomTypeThruClr(),
     totalNumOfRooms:totalNumOfRooms,
     guests: { adults: guest },
     totalPrice:totalPrice,
     totalPricePerNight
  }

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
      // result?.success === true ? navigate('/payment') : alert("something gone wrong on form submit");
    if(result?.success === true){
  try {
    const bookingResponse = await fetch(`${import.meta.env.VITE_API_URI}/api/booking/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalData),
    });
    const bookingResult = await bookingResponse.json();
    if (bookingResult?.success === true) {
      console.log(bookingResult.message);
      navigate('/payment'); 
    } else {
      console.log(bookingResult.error || 'Booking failed');
    }
  } catch (err) {
    console.error("Error:", err);
  }
  }
       
    }catch(err){
      console.error("Error:", err);
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
        <span className="text-blue-700">₹{Math.max(totalPricePerNight - 3060 - 2500, 0)}</span>
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
