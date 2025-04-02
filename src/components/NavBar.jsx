import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
      <div className="w-1/3"></div> {/* Empty div for spacing */}
    <Link to="/">
    <h1  className="text-xl font-bold">Profile Viewer</h1>
    </Link>
      <div className="w-1/3 text-right">
        <Link to="/admin">
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
            Admin Panel
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
