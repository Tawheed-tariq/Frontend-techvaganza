import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const ResourceDropdownMenu = ({ isDropdownOpen }) => {
  return createPortal(
    <div
      className={`absolute right-20 top-16 w-48 bg-white backdrop-blur-lg rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
        isDropdownOpen
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-2 pointer-events-none"
      }`}
      style={{
        zIndex: 9999,
        background: "rgba(255, 255, 255, 0.1)", // Custom background with 10% opacity
        border: "1px solid rgba(255, 255, 255, 0.2)", // Custom border with 20% opacity
      }}
    >
      <Link
        to="/schedule"
        className="block px-4 py-2 text-sm text-white hover:bg-teal-300 hover:bg-opacity-30"
      >
        Schedule
      </Link>
      <Link
        to="/bronche"
        className="block px-4 py-2 text-sm text-white hover:bg-teal-300 hover:bg-opacity-30"
      >
        Bronche
      </Link>
    </div>,
    document.getElementById("dropdown-root"),
  );
};

export default ResourceDropdownMenu;
