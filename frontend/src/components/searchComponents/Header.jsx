import { UseUserContext } from "../../contexts/userContext";

export const Header = () => {
  const { user } = UseUserContext();

  return (
    <header className="h-16 fixed top-0 left-0 w-full bg-purple-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Rest.com</h1>
        <div className="space-x-4">
          {user ? (
            <div className="relative group">
              <h3 className="cursor-pointer font-semibold hover:bg-purple-400 rounded-md px-3 py-1 text-white">
                Hello traveler👋
              </h3>
            </div>
          ) : (
            <>
              <button className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
                Login
              </button>
              <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
