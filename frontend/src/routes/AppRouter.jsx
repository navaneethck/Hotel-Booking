import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Register from "../pages/auth/userRegister";
import Login from "../pages/auth/userLogin";
import { UserProvider } from "../contexts/userContext";
import SearchResultsMain from '../pages/SearchResultMain.jsx'
import HotelDetails from "../pages/HotelDetails.jsx";
import BookingSummaryPage from "../pages/BookingSummary.jsx";
import MyBookings from "../pages/MyBookings.jsx";
import RoomSelectionWrapper from "../components/selectionWraper/roomSelectionWrapper.jsx";

const AppRouter = ()=>{
    return(
        <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/searchresults" element={<SearchResultsMain/>}/>
                <Route element={<RoomSelectionWrapper />}>
                  <Route path="/hoteldetails" element={<HotelDetails />} />
                  <Route path="/bookingsummary" element={<BookingSummaryPage />} />
                </Route>
                <Route path="/myprofile" element={<MyBookings/>}/>
            </Routes>
        </Router>
        </UserProvider>
    )
}
export default AppRouter;