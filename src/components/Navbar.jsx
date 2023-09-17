import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <Link to="/">
            <img src={logo} alt="FinBridge logo" className="w-[124px] h-[32px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
          <NavLink
            to={
              index === 0 
                ? "/" 
                : index === 1 
                ? "/dollar" 
                : index ===3
                ? "/information" 
                : index === navLinks.length - 1 
                ? "/survey" 
                : index === 2 
                ? "/compare" 
                : `#${nav.id}`
            }
            exact
            activeClassName="text-white"
            className="text-dimWhite"
            style={
              window.location.pathname === (
                index === 0 
                  ? "/" 
                  : index === 1 
                  ? "/dollar" 
                  : index === 3
                  ? "/information" 
                  : index === navLinks.length - 1 
                  ? "/survey" 
                  : index === 2 
                  ? "/compare" 
                  : `#${nav.id}`
              ) 
              ? { color: 'white' } 
              : {}
            }
          >
            {nav.title}
          </NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              <NavLink
                to={index === 0 ? "/" : index === 1 ? "/dollar" : index === 2 || index === navLinks.length - 1 ? "/compare" : `#${nav.id}`}
                activeClassName="text-white"
                className="text-dimWhite"
              >
                {nav.title}
              </NavLink>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
