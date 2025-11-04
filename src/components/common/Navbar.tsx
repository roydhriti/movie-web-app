import { useState } from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full z-10">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars size={20} />
        </button>
        <h1 className="text-xl font-bold">MovieApp</h1>
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center gap-6">
        <FaBell className="cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={24} />
          <span>Dhriti</span>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col md:hidden p-4 space-y-2">
          <a href="/" className="hover:bg-gray-700 p-2 rounded">
            Home
          </a>
          <a href="/movies" className="hover:bg-gray-700 p-2 rounded">
            Movies
          </a>
          <a href="/profile" className="hover:bg-gray-700 p-2 rounded">
            Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
