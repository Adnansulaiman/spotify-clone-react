import React from 'react'
import TopSongs from './TopSongs'
import TopArtists from './TopArtists'

const HeroRight = () => {
  return (
    <div className="flex md:pl-10 pl-5 pr-5 w-full md:w-2/5  flex-col ">
        <TopSongs />
        <TopArtists />
    </div>
  )
}

export default HeroRight
