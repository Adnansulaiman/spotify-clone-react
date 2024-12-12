import React from 'react'
import Image from '../assets/billie.png';

const PlaylistCard = () => {
  return (
    <div className="card p-3 rounded-lg flex flex-col justify-between w-52 h-52" style={{backgroundImage: `url(${Image})`}}>
        <h1 className='font-semibold text-lg'>Dejavu</h1>
        <p className='font-semibold '>30 tracks</p>
    </div>
  )
}

export default PlaylistCard