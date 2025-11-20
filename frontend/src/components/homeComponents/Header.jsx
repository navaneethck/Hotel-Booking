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
        <div className="hidden sm:flex space-x-4 items-center">
          {user ? (
            <div className="relative group">
              <h3 className="cursor-pointer font-semibold hover:bg-purple-500 rounded-md px-3 py-1 transition">
                Hello traveler 👋
              </h3>

              {/* Desktop hover dropdown - visually centered items */}
              <div className="absolute right-0 top-full w-56 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-purple-300 p-2 rounded-t-md text-center">
                  <p className="text-sm">
                    This is your account <br />
                    <span className="font-semibold">{user.email}</span>
                  </p>
                </div>

                <ul className="py-2 flex flex-col items-center">
                  <li className="w-full">
                    <Link
                      to="/myprofile"
                      className="block w-full text-center px-3 py-2 hover:bg-purple-200 rounded transition inline-block"
                    >
                      My Account
                    </Link>
                  </li>

                  <li className="w-full">
                    <Link
                      to="/bookingsummary"
                      className="block w-full text-center px-3 py-2 hover:bg-purple-200 rounded transition inline-block"
                    >
                      Booking Summary
                    </Link>
                  </li>

                  <li className="w-full">
                    <button
                      onClick={logout}
                      className="block w-full text-center px-3 py-2 hover:bg-purple-200 rounded transition font-semibold"
                      aria-label="Logout"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 bg-white text-purple-700 rounded-md font-bold focus:outline-none"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown (toggle) - centered items */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white text-black shadow-md rounded-b-md">
          {user ? (
            <>
              <div className="bg-purple-300 p-3 rounded-t-md text-sm text-center">
                <p>
                  Hello traveler 👋 <br />
                  <span className="font-semibold">{user.email}</span>
                </p>
              </div>

              <ul className="p-2 space-y-1 flex flex-col items-center">
                <li className="w-full">
                  <Link
                    to="/myprofile"
                    className="block w-full text-center px-3 py-2 hover:bg-purple-100 rounded transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Account
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to="/bookingsummary"
                    className="block w-full text-center px-3 py-2 hover:bg-purple-100 rounded transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Booking Summary
                  </Link>
                </li>

                <li className="w-full">
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-center px-3 py-2 hover:bg-purple-100 rounded transition font-semibold"
                    aria-label="Logout"
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
                className="block px-3 py-2 bg-gray-100 text-center font-semibold rounded hover:bg-gray-200 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-yellow-400 text-center font-semibold rounded hover:bg-yellow-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
