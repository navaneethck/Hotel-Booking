import { Link } from 'react-router-dom';
import { UseUserContext } from '../contexts/userContext';

const Home = () => {
  const{user}= UseUserContext();
  return (
    <div className="text-4xl font-bold text-blue-500">
     
      <h1>this is home buddy..! <p  className="text-4xl font-bold text-purple-700">
     {user ? user.name : "Guest" }</p></h1>

      <div>
        <Link className="text-xl font-bold text-black" to="/register">
          To register clik me
        </Link>
      </div>
    </div>
  );
};

export default Home;
