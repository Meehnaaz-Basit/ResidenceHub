import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
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
          Residential <span className="-ml-1 text-orange-500"> Hub</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <button className="btn border-orange-500 bg-orange-500 text-white font-bold">
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

        <Link
          to="/register"
          className="btn border-orange-500 bg-transparent text-orange-500 font-bold"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Nav;
