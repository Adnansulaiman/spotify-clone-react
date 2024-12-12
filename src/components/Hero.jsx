import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from '../assets/billie.png'
import SectionHeading from "./SectionHeading";
import CardList from "./CardList";
import PlaylistCard from "./PlaylistCard";


const Hero = () => {
  return (
    <div className="flex pb-10 md:pb-20 flex-col pt-5 pl-5 md:pl-10  w-full pr-5 md:pr-0 md:w-3/5  md:overflow-y-auto no-scrollbar ">
  <h1 className="font-bold text-3xl mb-6">Discover</h1>
  <div className="h-52 sm:h-72 p-5 w-full  flex justify-between bg-green-600 rounded-lg">
    <div className="flex flex-col justify-between">
      <div className="title">
        <p className=" text-sm sm:text-lg mb-2">Billie Eillish</p>
        <h1 className=" text-2xl sm:text-3xl font-bold">What Was I Made For?</h1>
      </div>
      <button className="bg-white text-black flex justify-center items-center gap-3 font-semibold rounded-3xl py-2 w-32 sm:py-3 sm:w-52 text-sm sm:text-lg ">
        <FaPlay /> Listen now
      </button>
    </div>
    <img src={Image} alt="billie" className=" rounded-lg w-44 h-44 sm:w-64 sm:h-64 pb-2" />
  </div>
  <SectionHeading title="Playlist for you" />
  <CardList card={<PlaylistCard />} />
  <SectionHeading title="Albums for you" />
  <CardList card={<PlaylistCard />} />
  

</div>

  );
};

export default Hero;