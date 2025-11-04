import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFilm, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-5 pt-8 ${
          isOpen ? "w-64" : "w-20"
        } duration-300 relative`}
      >
        <button
          className="absolute -right-3 top-9 w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg"
          onClick={toggleSidebar}
        >
          {isOpen ? "<" : ">"}
        </button>

        <div className="flex items-center gap-4">
          <FaFilm className="text-3xl" />
          {isOpen && <h1 className="text-2xl font-bold">MovieApp</h1>}
        </div>

        <ul className="pt-6">
          <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 cursor-pointer mt-4">
            <FaHome />
            {isOpen && <Link to="/">Home</Link>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 cursor-pointer mt-4">
            <FaFilm />
            {isOpen && <Link to="/movies">Movies</Link>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 cursor-pointer mt-4">
            <FaUser />
            {isOpen && <Link to="/profile">Profile</Link>}
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-7">
        <h1 className="text-2xl font-bold">Welcome to MovieApp!</h1>
      </div>
    </div>
  );
};

export default Sidebar;
