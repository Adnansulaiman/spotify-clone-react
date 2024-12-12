import Image from '../assets/billie.png';
import React from 'react'

const ArtistCard = () => {
  return (
    <div className='flex justify-center items-center  gap-1 flex-col'>
        <img src={Image} className='w-36 h-36 rounded-full' alt="" />
        <p className='text-center max-w-36'>Billie Ellish</p>
    </div>
  )
}

export default ArtistCard
