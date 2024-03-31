import '../style.css';
import { NavLink } from "react-router-dom";

import logo from "../assets/e-commerce-logo.png";
export default function Header() {
  return (
    <div className="navbar bg-green-300">
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
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="h-10 ">
          <img className="h-full w-full rounded-xl" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li >
            <NavLink to={'/'} className={'nav-link'} >Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={'nav-link'} >About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className={'nav-link'}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn me-1 md:me-2">Log In</a>
        <a className="btn">Register</a>
      </div>
    </div>
  );
}
