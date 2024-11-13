import { Link } from "react-router-dom";

const MyHotel = () => {
  return (
    <div className="space-y-5">
      <span>
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to={"/add-hotel"}
          className="bg-blue-700 text-white p-2 font-bold text-xl rounded-lg hover:bg-blue-600"
        >
          Add Hotel
        </Link>
      </span>
    </div>
  );
};

export default MyHotel;
