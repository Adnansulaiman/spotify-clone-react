import React, { useState } from "react";
import Profile from "../assets/profile.jpg";
import Logo from "../assets/Spotify_logo_sm.png";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Tracks menu visibility
  const [animation, setAnimation] = useState(""); // Tracks animation class

  const handleMenuOpen = () => {
    setMenuOpen(true);
    setAnimation("animate-fadeInLeft");
  };

  const handleMenuClose = () => {
    setAnimation("animate-fadeOutLeft");
    
  };

  const handleAnimationEnd = () => {
    if (animation === "animate-fadeOutLeft") {
      setMenuOpen(false); // Hide the menu after fadeOutLeft animation
      setAnimation(""); // Reset animation class
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="md:flex hidden w-full text-white h-16 justify-between items-center mt-3">
        <div className="relative search w-3/5 pl-10">
          <IoSearchOutline className="absolute bottom-2 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-8 w-full h-10 outline-none  border-b border-white "
          />
        </div>
        <div className="profile flex justify-center items-center gap-4 mr-5">
          <p className="text-lg">Adnan</p>
          <img
            src={Profile}
            alt="User Profile"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden w-full pb-4 justify-between pt-3 items-center">
        <IoMenu
          className="text-4xl ml-4 text-green-100"
          onClick={handleMenuOpen}
        />
        <img src={Logo} className="w-20" alt="spotify logo" />
        <div className="profile flex justify-center items-center gap-4 mr-5">
          <p className="text-sm">Adnan</p>
          <img
            src={Profile}
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          className={`absolute flex flex-col pl-7 pr-3 font-semibold py-5 justify-between w-2/6 h-full z-50 bg-gray-800 rounded-e-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ${animation}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {/* Menu Header */}
          <div className="menus">
            <div className="flex justify-between items-center">
              <img src={Logo} className=" w-20 sm:w-28" alt="spotify logo" />
              <IoCloseOutline
                onClick={handleMenuClose}
                className="sm:text-3xl text-xl cursor-pointer"
              />
            </div>
            {/* Menu Items */}
            <ul className="mt-16 flex flex-col gap-3">
              <li>Home</li>
              <li>Radio</li>
              <li>Podcasts</li>
              <li>Books</li>
            </ul>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-col gap-2 mb-3">
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
