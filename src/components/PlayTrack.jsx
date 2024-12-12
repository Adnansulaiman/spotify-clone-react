import React from 'react'
import Image from '../assets/billie.png'
import { PiShuffleAngular } from "react-icons/pi";
import { MdSkipPrevious,MdSkipNext } from "react-icons/md";
import { FaRegCirclePlay,FaRegCirclePause,FaRegHeart } from "react-icons/fa6";
import { LuRepeat2 } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";



const PlayTrack = () => {
  return (
    <div className=' flex px-5 justify-between gap-9 md:gap-96 items-center fixed bottom-0   z-40 md:max-w-5/6 max-w-full h-20 bg-gray-700 rounded-t-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
      <div className="flex gap-2 sm:gap-4 justify-center items-start ">
        <img src={Image} alt="" className='sm:w-14 sm:h-14 w-12 h-12 rounded-lg'  />
        <div className="  flex flex-col ">
            <h1 className='font-semibold text-sm sm:text-lg'>Softcore</h1>
            <p className=' text-xs sm:text-sm font-semibold'>Eminem</p>
        </div>
        
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-2 sm:gap-4 items-center mr-6">
            <PiShuffleAngular className='sm:text-xl' />
            <MdSkipPrevious className='sm:text-2xl text-xl' />
            <FaRegCirclePlay className='sm:text-3xl text-2xl' />
            <MdSkipNext className='sm:text-2xl text-xl' />
            <LuRepeat2 className='sm:text-xl'/>
        </div>
      </div>
      <div className="flex justify-center gap-3 sm:gap-0 items-center">
      <FaRegHeart className=' text-xs sm:text-lg' />
      
      <div className="flex justify-center gap-3 items-center md:pl-20">
     
        <HiMiniSpeakerWave />
        <input type="range" className='w-16 h-1 rounded-lg bg-green-900 slider appearance-none' />
      </div>
      </div>
    </div>
  )
}

export default PlayTrack
