import { useRoomSeceltionContext } from "../../contexts/roomSelectionContext";

export const RoomTypes = ({ roomTypes, amenitiesFromState }) => {
  const { purple, setPurple, purple2, setPurple2 } = useRoomSeceltionContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
        Room Types & Rates
      </h3>

      {/* Suite Room */}
      <div
        className={`border mb-4 rounded-lg ${
          purple ? "border-purple-600 border-4" : "border-black"
        }`}
      >
        <div
          className={`p-4 border-b rounded-t-lg ${
            purple
              ? "border-purple-600 bg-purple-600 text-white"
              : "border-black bg-gray-50"
          }`}
        >
          <h4 className="font-semibold text-base sm:text-lg">
            {roomTypes[0].name} Room
          </h4>
        </div>

        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            {/* Amenities */}
            <div className="text-sm text-gray-600 flex flex-wrap gap-x-3 gap-y-1">
              {amenitiesFromState.map(({ key, match }) => (
                <div key={key}>
                  {match ? (
                    <span>
                      {match.icon} {match.label}
                    </span>
                  ) : (
                    <span>{key}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Price and Button */}
            <div className="text-left sm:text-right">
              <div className="text-xl font-bold text-blue-700">
                {roomTypes[0].price}
              </div>
              <div className="text-sm text-gray-600">per night</div>
              <button
                onClick={() => setPurple(!purple)}
                className={`mt-2 px-4 py-2 rounded-lg font-semibold w-full sm:w-auto cursor-pointer ${
                  purple
                    ? "bg-purple-600 hover:bg-purple-400 text-white"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {purple ? "Unselect This Room" : "Select This Room"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deluxe Room */}
      <div
        className={`border mb-4 rounded-lg ${
          purple2 ? "border-purple-600 border-4" : "border-black"
        }`}
      >
        <div
          className={`p-4 border-b rounded-t-lg ${
            purple2
              ? "border-purple-600 bg-purple-600 text-white"
              : "border-black bg-gray-50"
          }`}
        >
          <h4 className="font-semibold text-base sm:text-lg">
            {roomTypes[1].name} Room
          </h4>
        </div>

        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            {/* Amenities */}
            <div className="text-sm text-gray-600 flex flex-wrap gap-x-3 gap-y-1">
              {amenitiesFromState.map(({ key, match }) => (
                <div key={key}>
                  {match ? (
                    <span>
                      {match.icon} {match.label}
                    </span>
                  ) : (
                    <span>{key}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Price and Button */}
            <div className="text-left sm:text-right">
              <div className="text-xl font-bold text-blue-700">
                {roomTypes[1].price}
              </div>
              <div className="text-sm text-gray-600">per night</div>
              <button
                onClick={() => setPurple2(!purple2)}
                className={`mt-2 px-4 py-2 rounded-lg font-semibold w-full sm:w-auto cursor-pointer ${
                  purple2
                    ? "bg-purple-600 hover:bg-purple-400 text-white"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {purple2 ? "Unselect This Room" : "Select This Room"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
