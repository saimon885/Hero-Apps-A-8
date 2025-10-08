import React from "react";
import logo from "../../assets/logo.png";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar bg-white">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[18px] font-semibold"
          >
            <NavLink to={"/"}>
              <li className="hover:bg-[#632EE3] hover:text-white px-2 cursor-pointer">
                Home
              </li>
            </NavLink>
           <NavLink to={"/"}>
              <li className="hover:bg-[#632EE3] hover:text-white px-2 cursor-pointer">
                Apps
              </li>
            </NavLink>
            <li className="hover:bg-[#632EE3] hover:text-white px-2 cursor-pointer">
              Installation
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex items-center gap-1 md:ml-7">
            <img className="w-[28px] md:w-[35px]" src={logo} alt="" />
            <div className="text-[18px] md:text-2xl font-semibold text-[#632EE3]">
              HERO.IO
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-[18px] font-semibold">
          <NavLink to={"/"}>
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to={"/apps"}>
            <li className="cursor-pointer">Apps</li>
          </NavLink>
          <li className="cursor-pointer">Installation</li>
        </ul>
      </div>
      <div className="navbar-end md:mr-7">
        <a href="https://github.com/saimon885" target="blank">
          <span className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded">
            <span className="text-[18px]">
              <FontAwesomeIcon icon={faGithub} />
            </span>{" "}
            Contribute
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
