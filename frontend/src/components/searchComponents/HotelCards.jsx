import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const HotelCards = ({hotel,message}) =>{

 const amenityIcons = {
  "lake view": { icon: "🌅", label: "Lake View" },
   "spa": { icon: "💆", label: "Spa" },
  "nature view": { icon: "🌲", label: "Nature View" },
  "pool": { icon: "🏊", label: "Pool" },
  "luxury dining": { icon: "🍷", label: "Luxury Dining" },
  "airport shuttle": { icon: "🚌", label: "Airport Shuttle" },
  "free wi-fi": { icon: "🛜", label: "Free Wi-fi" },
};
const amenityMatches = hotel?.amenities?.map((amenity) => {
  const key = amenity.toLowerCase().trim();
  const match = amenityIcons[key];
  return { key, match };
}) || [];


const description = hotel?.description?.toLowerCase() || "";
const wordsToFind = ["5 star", "4 star", "3 star", "2 star", "1 star", "7 star"];
const foundTheWord = wordsToFind.find((word) =>
  description.includes(word)
);


  return(
  <div className="space-y-6">
    {hotel?(
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
      <div className="md:flex"> 
        <div className="md:w-1/3">
          <img src={hotel.images?.[0]} alt="Hotel" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
              <p className="text-sm text-gray-600">📍 {hotel.location}</p>
              <div className="flex items-center pt-5">
                        { foundTheWord ?
                          (
                        <>
                          <span className="text-yellow-400">
                            {"⭐".repeat(parseInt(foundTheWord))}
                          </span>
                          <span className="ml-2 text-sm text-gray-600">
                            {foundTheWord} Hotel
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-500">No rating info</span>
                      )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">{hotel.price}</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex space-x-4 text-xs text-gray-600">
            {amenityMatches.map(({ key, match }) => {
            return (
              <div key={key}>
                {match ? (
                  <span>{match.icon} {match.label}</span>
                ) : (
                  <span> {key}</span> 
                )}
              </div>
            );
          })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                9.2
              </div>
              <div>
                <div className="text-sm font-semibold">Excellent</div>
                <div className="text-xs text-gray-600">1847 reviews</div>
              </div>
            </div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              <Link to='/hoteldetails'  state={{hotel,foundTheWord,amenitiesFromState: amenityMatches}}> See Availability</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
      
    ):message?(
        <p className="text-center text-gray-600">{message}</p>
      ):null}
  </div>
)};