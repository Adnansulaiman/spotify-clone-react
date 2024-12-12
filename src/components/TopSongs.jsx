import React from "react";
import SectionHeading from "./SectionHeading";
import SongCard from "./SongCard";

const TopSongs = () => {
  return (
    
      <div className="flex flex-col  h-2/4 ">
        <SectionHeading title="Top Songs" />
        <div className="flex-col flex overflow-y-auto no-scrollbar ">

        {[1, 2, 3, 4, 5, 6].map(() => (
          <SongCard />
        ))}
        </div>
      </div>
      
   
  );
};

export default TopSongs;
