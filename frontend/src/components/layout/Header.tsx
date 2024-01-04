import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold  tracking-tight text-white">
          XT.Booking
        </Link>
        <span className="flex space-x-2">
          <Link
            to={"/sign-in"}
            className="flex items-center rounded-lg bg-white px-3 font-bold text-blue-600 hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
