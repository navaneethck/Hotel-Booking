import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/userRegister";
import Login from "../pages/auth/userLogin";
import { UserProvider } from "../contexts/userContext";

const AppRouter = ()=>{
    return(
        <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
        </UserProvider>
    )
}

export default AppRouter;