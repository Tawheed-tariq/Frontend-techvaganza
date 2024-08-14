import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const RegisterDropdown = ({ isDropdownOpen }) => {
  return createPortal(
    <div
      className={`absolute right-72 top-16 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
        isDropdownOpen
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-2 pointer-events-none"
      }`}
      style={{ zIndex: 9999 }}
    >
      <Link
        to="/register/attendee"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Attendee Register
      </Link>
      <Link
        to="/register/student"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Student Register
      </Link>
      <Link
        to="/register/committee"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Committee Register
      </Link>
    </div>,
    document.getElementById("dropdown-root")
  );
};

export default RegisterDropdown;
