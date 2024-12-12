import React from "react";
import SectionHeading from "./SectionHeading";
import ArtistCard from "./ArtistCard";

const TopArtists = () => {
  return (
    <div className="flex flex-col">
      <SectionHeading title="Top Artists" />
      <div className="flex justify-between flex-wrap overflow-y-auto">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        
      </div>
    </div>
  );
};

export default TopArtists;
