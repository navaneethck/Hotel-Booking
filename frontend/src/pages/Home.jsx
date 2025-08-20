import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-4xl font-bold text-blue-500">
      <h1>this is home buddy..!</h1>
      <div>
        <Link className="text-xl font-bold text-black" to="/register">
          To register clik me
        </Link>
      </div>
    </div>
  );
};

export default Home;
