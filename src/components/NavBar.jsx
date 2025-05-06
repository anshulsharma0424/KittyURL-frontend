import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-custom-gradient z-50 flex items-center top-0 ">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <img
            src="/logo.png"
            alt="KittyURL Logo"
            className="w-19 h-12 sm:mt-0 mt-2 rounded-[8%] shadow-lg"
          />
        </Link>

        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none  bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="font-quicksand hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-white font-semibold" : "text-gray-400"
              }`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="font-quicksand font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-400"
              }`}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          {token && (
            <li className="font-quicksand font-[500]  transition-all duration-150">
              <Link
                className={`${
                  path === "/dashboard"
                    ? "text-white font-semibold"
                    : "text-gray-400"
                }`}
                to="/dashboard"
              >
                DASHBOARD
              </Link>
            </li>
          )}
          {!token && (
            <Link to="/register">
              <li className=" font-quicksand sm:ml-0 -ml-1 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-gray-900 transition-all duration-150" style={{ backgroundColor: '#f36a3e' }}>
                SIGN UP
              </li>
            </Link>
          )}

          {token && (
            <button
              onClick={onLogOutHandler}
              className="font-quicksand sm:ml-0 -ml-1 text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150"
              style={{backgroundColor: 'gray'}}
            >
              LOG OUT
            </button>
          )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
