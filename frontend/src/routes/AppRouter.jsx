import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/userRegister";
import Login from "../pages/auth/userLogin";

const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;