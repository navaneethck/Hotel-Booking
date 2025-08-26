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


const HotelDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
       
        <div className="mb-4">
          <button className="text-blue-600 hover:underline">← Back to search results</button>
          <Link to={'/searchresults'}></Link>
        </div>

       
        <div className="mb-6">
          <HotelGallery />
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="w-2/3">
            <HotelInfo />
            <Amenities />
            <RoomTypes />
            <Description />
            <Reviews />
          </div>

          {/* Booking Sidebar */}
          <div className="w-1/3">
            <BookingSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;