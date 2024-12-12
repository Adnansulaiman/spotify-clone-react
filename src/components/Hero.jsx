import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from '../assets/billie.png'
import SectionHeading from "./SectionHeading";
import CardList from "./CardList";


const Hero = () => {
  return (
    <div className="flex pb-20 flex-col pt-5 pl-10 w-3/5 overflow-y-auto no-scrollbar ">
  <h1 className="font-bold text-3xl mb-6">Discover</h1>
  <div className="h-72 p-5 w-full  flex justify-between bg-green-600 rounded-lg">
    <div className="flex flex-col justify-between">
      <div className="title">
        <p className="text-lg mb-2">Billie Eillish</p>
        <h1 className="text-3xl font-bold">What Was I Made For?</h1>
      </div>
      <button className="bg-white text-black flex justify-center items-center gap-3 font-semibold rounded-3xl py-2 w-52">
        <FaPlay /> Listen now
      </button>
    </div>
    <img src={Image} alt="billie" className="w-64 h-64 pb-2" />
  </div>
  <SectionHeading title="Playlist for you" />
  <CardList />
  <SectionHeading title="Albums for you" />
  <CardList />
  

</div>

  );
};

export default Hero;