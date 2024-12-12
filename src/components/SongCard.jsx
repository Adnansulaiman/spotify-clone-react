import React from 'react'
import Image from '../assets/billie.png'
const SongCard = () => {
  return (
    <div className='flex mb-2 justify-between items-center'>
      <div className="flex gap-5">
      <img src={Image} alt="" className='w-16 h-16 rounded-lg'   />
      <div className="flex flex-col gap-1">
        <h1 className='font-semibold text-lg'>Softcore</h1>
        <p className="text-sm font-semibold">Eminem</p>
      </div>
      </div>
      <p className='text-sm font-semibold'>3.25</p>
    </div>
  )
}

export default SongCard
