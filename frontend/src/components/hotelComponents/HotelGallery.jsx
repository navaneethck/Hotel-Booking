
import { useState } from "react";
import { X } from "lucide-react";


export const HotelGallery = ({ hotelImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpenImg, setIsOpenImg] = useState(false);

  const openImage = (index) => {
    setIsOpenImg(true);
    setSelectedImage(index);
  };

  const closeImage = () => {
    setIsOpenImg(false);
    setSelectedImage(null);
  };

  const handleBackDrop = (e) => {
    if (e.target === e.currentTarget) {
      closeImage();
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 border-2 border-purple-400 grid-rows-2 gap-2 rounded-lg overflow-hidden h-96 cursor-pointer">
        <div className="col-span-2 row-span-2">
          <img
            src={hotelImages[0]}
            alt="Hotel"
            className="w-full h-full object-cover"
            onClick={() => openImage(0)}
          />
        </div>
        <div>
          <img
            src={hotelImages[1]}
            alt="Room"
            className="w-full h-full object-cover"
            onClick={() => openImage(1)}
          />
        </div>
        <div>
          <img
            src={hotelImages[2]}
            alt="Pool"
            className="w-full h-full object-cover"
            onClick={() => openImage(2)}
          />
        </div>
        <div>
          <img
            src={hotelImages[3]}
            alt="Restaurant"
            className="w-full h-full object-cover"
            onClick={() => openImage(3)}
          />
        </div>
        <div className="relative group">
          <img
            src={hotelImages[4]}
            alt="Lobby"
            className="w-full h-full object-cover"
            onClick={() => openImage(4)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-90 transition">
            more
          </div>
        </div>
      </div>

      {isOpenImg && selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-80"
          onClick={handleBackDrop}
        >
           <div className="relative max-w-4xl max-h-[90vh]">
        <button
          onClick={closeImage}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        <img
          src={hotelImages[selectedImage]}
          alt={`Hotel image ${selectedImage + 1}`}
          className="w-3/4 max-w-2xl max-h-[75vh] object-contain rounded-lg shadow-2xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        />
    </div>
          </div>
        )}
    </>
  );
};
