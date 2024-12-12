import React from 'react'
import SectionHeading from './SectionHeading'
import SongCard from './SongCard'

const TopSongs = () => {
  return (
    <div className="flex pl-10  pr-5 w-2/5  flex-col">
      <SectionHeading title='Top Songs' />
      {[1,2,3,4,4,55,5,667].map(()=>(
        <SongCard />
      ))}
    </div>
  )
}

export default TopSongs