import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const dummycategories = [
  { name: "Animals" },
  { name: "Photography" },
  { name: "Anime" },
  { name: "Nature" },
  { name: "Cars" },
  { name: "Science" },
];

const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black hover:text-black transition-all duration-200 ease-in-out capitalize bg-[#f8f9fa]";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-white overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col ">
        <Link
          onClick={handleCloseSidebar}
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {dummycategories
            .slice(0, dummycategories.length - 1)
            .map((category) => (
              <NavLink
                to={`category/${category.name}`}
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
                key={category.name}
                onClick={handleCloseSidebar}
              >
                <IoIosArrowForward /> {category.name}
              </NavLink>
            ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex items-center my-5 mb-3 gap-2 p-2 bg-white rounded-lg shadow-lg mx-3 "
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
