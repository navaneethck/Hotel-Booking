import { Header } from "../components/hotelComponents/Header";
import { Amenities } from "../components/hotelComponents/Amenities";
import { Description } from "../components/hotelComponents/Description";
import { Footer } from "../components/hotelComponents/Footer";
import { BookingSidebar } from "../components/hotelComponents/BookingSideBar";
import { HotelGallery } from "../components/hotelComponents/HotelGallery";
import { HotelInfo } from "../components/hotelComponents/HotelInfo";
import { Reviews } from "../components/hotelComponents/Reviews";
import { RoomTypes } from "../components/hotelComponents/RoomType";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const HotelDetails = () => {
  const {state} = useLocation();
  const hotel = state?.hotel;
  const foundTheWord=state?.foundTheWord;
  const amenitiesFromState = state?.amenitiesFromState;
if(hotel){
  
  console.log(`checking hotel has amenities ${hotel.amenities}`)
  console.log("checking state amenities", amenitiesFromState);
  
}else{
  console.log('nothing foundon this')
}

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto py-6 px-4 mt-10">
        <div className="mb-6">
          <HotelGallery hotelImages={hotel.images}/>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="w-2/3">
            <HotelInfo hotelName={hotel.name} hotelPrice={hotel.price} hotelRating={foundTheWord} hotelLocation={hotel.location} />
            <Amenities amenities={hotel.amenities} />
            <RoomTypes roomTypes={hotel.roomTypes} amenities={hotel.amenities} amenitiesFromState={amenitiesFromState}/>
            <Description Description={hotel.description}/>
            <Reviews />
          </div>

          {/* Booking Sidebar */}
          <div className="w-1/3">
            <BookingSidebar hotelPrice={hotel.price} roomTypes={hotel.roomTypes} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;