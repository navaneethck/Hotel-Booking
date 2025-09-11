 import { Link } from "react-router-dom";
 import { UseUserContext } from "../../contexts/userContext";
 
 export const Header = () => { const{user}= UseUserContext();   
   return  (
  <header className=" fixed top-0 left-0 w-full bg-gradient-to-bl from-gray-200 via-purple-400 to-purple-600 text-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Rest.com</h1>
      <div className="space-x-4">
        {user?
        (
          <div className='relative group'>
            <h3 className="cursor-pointer font-semibold hover:bg-purple-400 rounded-md">Hello traveler👋
            </h3>
          {/* for downward drop*/ }
          <div className="  border-gray-400 absolute right-0 top-full w-56  bg-white text-black rounded-md shadow-lg hidden group-hover:block">
            <div className="bg-purple-300">
            <p>This is your account <br/>
            <span className="font-semibold">{user.email}</span></p>
            </div>
            <ul>
            <li className="pt-2">
             <Link to={'/myprofile'} className=" block px-2 py-1 hover:bg-purple-300"> My Account</Link>
            </li>
             <li>
             <Link to={'/bookingsummary'} className=" block px-2 py-1 hover:bg-purple-300"> Booking summary</Link>
            </li>
            </ul>
          </div>
          </div>
         
        ):<> <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
          
          <Link to='/login'>Login</Link>
      
        </button>
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
         <Link to='/register'> Sign Up </Link>
        </button></>}
      
      </div>
    </div>
  </header>
)};