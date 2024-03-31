import "../style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";

import logo from "../assets/e-commerce-logo.png";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-green-300 sticky z-50 top-0 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/meals"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="h-10 ">
          <img className="h-full w-full rounded-xl" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return `nav-link ${isActive && "nav-link-active"}`;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/meals"}
              className={({ isActive }) => {
                return `nav-link ${isActive && "nav-link-active"}`;
              }}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => {
                return `nav-link ${isActive && "nav-link-active"}`;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => {
                return `nav-link ${isActive && "nav-link-active"}`;
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="relative me-5">
          <button className="text-3xl" onClick={() => navigate("/cart")}>
            <BsCartCheck />
          </button>
          <div className="absolute top-[-13px] left-4 bg-rose-600 rounded-full text-center text-white w-6 h-6  text-[13px] font-semibold">12</div>
        </div>
        <a className="btn me-1 md:me-2">Log In</a>
        <a className="btn">Register</a>
      </div>
    </div>
  );
}
