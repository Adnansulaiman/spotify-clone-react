import React from "react";
import Profile from "../assets/profile.jpg";
const NavBar = () => {
  return (
    <div className="flex w-full text-white h-16 justify-between items-center mt-3">
      <div className="search w-3/5  pl-10">
      <input type="text" placeholder="Search" className="bg-transparent pl-3 l-10 w-full h-10 border-b " />
      </div>
      <div className="profile flex justify-center items-center gap-4 mr-5">
        <p className="text-lg">Adnan</p>
        <img src={Profile} alt="User Profile" className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
};

export default NavBar;
