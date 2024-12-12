import React from "react";
import Hero from "../components/Hero";
import HeroRight from "../components/HeroRight";

const Discover = () => {
  return (
    <div className="flex-col md:flex-row flex bg-gray-900  md:rounded-none  rounded-t-3xl  w-full md:h-full">
      <Hero />
      <HeroRight />
    </div>
  );
};

export default Discover;
