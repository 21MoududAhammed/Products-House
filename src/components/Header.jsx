import "../style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/e-commerce-logo.png";
import { MyAuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { MyCartContext } from "../providers/CartProvider";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, logOut } = MyAuthContext();
  const [isImage, setIsImage] = useState(true);
  const [isShow, setIsShow] = useState(false);
  // storedValue is the added products of localStorage
  const { storedValue } = MyCartContext();

  // to show a ul after clicking profile image
  const handleIsShow = () => {
    setIsShow(!isShow);
  };
  // to log out
  const handleLogOut = async () => {
    try {
      await logOut();
      toast(`Sign-out successful`);
      navigate("/login"); // go to the log in page
    } catch (err) {
      console.log(err);
      toast(err.message);
    }
  };

  return (
    <nav className=" bg-white shadow sticky z-40 top-0 font-serif">
      <div className="navbar max-w-screen-2xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsShow(false)}
            >
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
                  to={"/products"}
                  className={({ isActive }) => {
                    return `nav-link ${isActive && "nav-link-active"}`;
                  }}
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="h-10 ">
            <Link to={"/"}>
              <img className="h-full w-full rounded-xl" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* for home page  */}
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                Home
              </NavLink>
            </li>
            {/* for all products  */}
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) => {
                  return `nav-link ${isActive && "nav-link-active"}`;
                }}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end  ">
          {/* cart  */}
          <div className="relative me-5">
            <button className="text-3xl" onClick={() => navigate("/cart")}>
              <BsCartCheck />
            </button>
            <div
              className={`absolute top-[-13px] left-4 font-sans bg-rose-600 rounded-full text-center text-white w-6 h-6  text-[13px] font-semibold ${
                storedValue?.length || "hidden"
              }`}
            >
              {storedValue?.length}
            </div>
          </div>
          {/* cart end  */}

          {/* profile  */}
          {isLoggedIn && (
            <div>
              <div className="relative h-8 w-8 me-2">
                {isLoggedIn?.photoURL && isImage ? (
                  <div onClick={handleIsShow}>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={isLoggedIn.photoURL}
                      onError={() => setIsImage(false)}
                      alt=""
                    />
                  </div>
                ) : (
                  <div onClick={handleIsShow} className="text-3xl">
                    <CgProfile />
                  </div>
                )}
                {isShow && (
                  <div className="absolute right-0 bg-white px-2 shadow pt-1 pb-2 w-28 ">
                    <ul>
                      <li>
                        <Link to={"/profile"} onClick={handleIsShow}>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleLogOut();
                            handleIsShow();
                          }}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* profile end  */}

          {!isLoggedIn && (
            <NavLink to={"/login"} className=" me-1 md:me-2">
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
