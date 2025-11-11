import { UseUserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = UseUserContext();

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-3 sm:py-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Rest.com
        </h1>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {user ? (
            <div className="relative group">
              <h3 className="cursor-pointer font-semibold hover:bg-purple-500 rounded-md px-3 py-1 text-white transition">
                Hello traveler 👋
              </h3>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-700 rounded-md font-semibold text-sm hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 text-black rounded-md font-semibold text-sm hover:bg-yellow-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {!user && (
          <div className="flex sm:hidden items-center space-x-2 mt-2 w-full justify-center">
            <Link
              to="/login"
              className="px-3 py-1 bg-white text-blue-700 rounded-md font-semibold text-sm hover:bg-gray-200 w-1/2 text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 bg-yellow-400 text-black rounded-md font-semibold text-sm hover:bg-yellow-300 w-1/2 text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
