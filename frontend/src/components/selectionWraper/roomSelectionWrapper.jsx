import { Outlet } from "react-router-dom";
import { RoomSelectionProvider } from "../../contexts/roomSelectionContext";

const RoomSelectionWrapper = () => {
  return (
    <RoomSelectionProvider>
      <Outlet />
    </RoomSelectionProvider>
  );
};

export default RoomSelectionWrapper;
