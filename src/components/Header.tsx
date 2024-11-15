import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">EasyStays</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white rounded-lg px-3 font-bold hover:bg-blue-600"
                to="/my-Bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white rounded-lg px-3 font-bold hover:bg-blue-600"
                to="/my-Hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center rounded-lg text-blue-700 px-3 font-bold hover:bg-gray-200 hover:text-blue-700"
            >
              SignIN
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
