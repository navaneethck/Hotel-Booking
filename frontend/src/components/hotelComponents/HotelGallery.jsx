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
      {/* Responsive gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-purple-400 gap-2 rounded-lg overflow-hidden cursor-pointer h-auto lg:h-96">
        {/* Big first image (full width on mobile, 2x height on desktop) */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <img
            src={hotelImages[0]}
            alt="Hotel"
            className="w-full h-64 sm:h-80 lg:h-full object-cover"
            onClick={() => openImage(0)}
          />
        </div>

        {/* Remaining images */}
        {hotelImages.slice(1, 5).map((img, i) => (
          <div key={i + 1} className="relative group">
            <img
              src={img}
              alt={`Hotel image ${i + 1}`}
              className="w-full h-48 sm:h-40 lg:h-full object-cover"
              onClick={() => openImage(i + 1)}
            />
            {i === 3 && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-90 transition"
                onClick={() => openImage(i + 1)}
              >
                more
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image modal */}
      {isOpenImg && selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[80] p-4"
          onClick={handleBackDrop}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] flex justify-center">
            <button
              onClick={closeImage}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white hover:text-gray-300 transition-colors z-50 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>
            <img
              src={hotelImages[selectedImage]}
              alt={`Hotel image ${selectedImage + 1}`}
              className="w-full sm:w-3/4 max-w-2xl max-h-[75vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};
