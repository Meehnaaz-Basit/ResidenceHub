import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserEdit } from "react-icons/fa";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user, "user from nav");

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "border-2 border-orange-500 text-white bg-orange-500 py-2 px-3 mx-2  rounded-lg font-semibold"
            : "border-2 border-transparent py-2 px-3 mx-2  rounded-lg font-semibold hover:border-orange-500 hover:text-white hover:bg-orange-500 transition-all"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <a href="/" className="text-2xl font-bold">
          Residence <span className="-ml-1 text-orange-500"> Hub</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end   gap-4">
        <div className="relative">
          {/* user profile image */}
          {user ? (
            <div
              className="tooltip tooltip-bottom tooltip-accent  "
              data-tip={user.displayName}
            >
              {user.photoURL ? (
                <img
                  className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover "
                  // title={user.displayName}
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <img
                  className="w-10"
                  src="https://i.ibb.co/X3yrLFJ/pngegg.png"
                  alt=""
                />
              )}
            </div>
          ) : null}

          {/* Update profile button */}
          {user && (
            <Link
              to="/profileUpdate"
              // onClick={handleUpdateProfile}
              // className="btn border-teal-500 bg-teal-500 text-white font-bold"
            >
              <div
                className=" flex items-center h-6 w-6 rounded-full bg-orange-500 hover:bg-teal-500 transition-all tooltip tooltip-bottom absolute left-[70%] top-[60%]"
                data-tip="Edit Profile"
              >
                {" "}
                <FaUserEdit className="text-white mx-auto text-md" />{" "}
              </div>
            </Link>
          )}
        </div>
        {/* log out */}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn border-teal-500 bg-teal-500 text-white font-bold"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn border-orange-500 bg-orange-500 text-white font-bold"
          >
            Login
          </Link>
        )}

        {/* <Link
          to="/register"
          className="btn border-orange-500 bg-transparent text-orange-500 font-bold"
        >
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
