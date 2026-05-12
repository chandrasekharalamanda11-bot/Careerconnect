import { useContext } from "react";
import {
  NavLink,
} from "react-router-dom";

import {
  AuthContext,
} from "../context/AuthContextSetup";

const Navbar = () => {
  const {
    isLoggedIn,
    logout,
  } =
    useContext(
      AuthContext
    );

  const navStyle =
    ({ isActive }) =>
      `px-5 py-2 rounded-xl transition duration-300 font-medium ${
        isActive
          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg"
          : "text-gray-700 hover:bg-gray-200"
      }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-4xl font-bold">
  <span className="text-blue-600">
    Career
  </span>

  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    Connect
  </span>
</h1>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          <NavLink
            to="/"
            className={navStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={navStyle}
          >
            Jobs
          </NavLink>

          <NavLink
            to="/dashboard"
            className={navStyle}
          >
            Dashboard
          </NavLink>

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className={navStyle}
              >
                Login
              </NavLink>

              {/* Register stays blue */}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl transition duration-300 font-medium ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition duration-300 cursor-pointer"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;