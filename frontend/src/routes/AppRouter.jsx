import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Register from "../pages/auth/userRegister";
import Login from "../pages/auth/userLogin";
import { UserProvider } from "../contexts/userContext";
import SearchResultsMain from '../pages/SearchResultMain.jsx'
import HotelDetails from "../pages/HotelDetails.jsx";


const AppRouter = ()=>{
    return(
        <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/searchresults" element={<SearchResultsMain/>}/>
                <Route path="/hoteldetails" element={<HotelDetails/>} />
            </Routes>
        </Router>
        </UserProvider>
    )
}

export default AppRouter;