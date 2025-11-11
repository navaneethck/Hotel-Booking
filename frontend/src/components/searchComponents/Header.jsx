import { useState } from "react";
import { UseUserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = UseUserContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-600 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">Rest.com</h1>

        {/* Desktop buttons */}
        <div className="hidden sm:flex space-x-4">
          {user ? (
            <div className="relative">
              <h3 className="cursor-pointer font-semibold hover:bg-purple-500 rounded-md px-3 py-1 text-white transition">
                Hello traveler 👋
              </h3>
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

      {/* Mobile dropdown (toggle-based) */}
      {menuOpen && (
        <div className="sm:hidden bg-white text-black shadow-md rounded-b-md">
          {user ? (
            <div className="p-3 text-center border-t border-gray-200">
              <p className="font-semibold">Hello traveler 👋</p>
            </div>
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
