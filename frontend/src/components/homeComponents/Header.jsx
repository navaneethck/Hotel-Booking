import { useState } from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "../../contexts/userContext";

export const Header = () => {
  const { user, logout } = UseUserContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-bl from-gray-200 via-purple-400 to-purple-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">Rest.com</h1>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-4">
          {user ? (
            <div className="relative group">
              <h3 className="cursor-pointer font-semibold hover:bg-purple-400 rounded-md px-3 py-1">
                Hello traveler👋
              </h3>
              <div className="border-gray-400 absolute right-0 top-full w-56 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
                <div className="bg-purple-300 p-2 rounded-t-md">
                  <p className="text-sm">
                    This is your account <br />
                    <span className="font-semibold">{user.email}</span>
                  </p>
                </div>
                <ul>
                  <li className="pt-2">
                    <Link
                      to="/myprofile"
                      className="block px-2 py-1 hover:bg-purple-300"
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bookingsummary"
                      className="block px-2 py-1 hover:bg-purple-300"
                    >
                      Booking Summary
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="w-full text-left block px-2 py-1 pl-20 hover:bg-purple-300 cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
                <Link to="/register">Sign Up</Link>
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 bg-white text-purple-700 rounded-md font-bold focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu (toggle-based, not hover) */}
      {menuOpen && (
        <div className="sm:hidden bg-white text-black shadow-md rounded-b-md">
          {user ? (
            <>
              <div className="bg-purple-300 p-3 rounded-t-md text-sm">
                Hello traveler 👋 <br />
                <span className="font-semibold">{user.email}</span>
              </div>
              <ul className="p-2">
                <li>
                  <Link
                    to="/myprofile"
                    className="block px-3 py-2 hover:bg-purple-200 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookingsummary"
                    className="block px-3 py-2 hover:bg-purple-200 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    Booking Summary
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-purple-200 rounded cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <div className="flex flex-col p-3 space-y-2">
              <Link
                to="/login"
                className="block px-3 py-2 bg-gray-200 text-center font-semibold rounded hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-yellow-400 text-center font-semibold rounded hover:bg-yellow-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
