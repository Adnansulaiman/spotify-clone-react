import React from 'react'
import Image from '../assets/billie.png'
import { PiShuffleAngular } from "react-icons/pi";
import { MdSkipPrevious,MdSkipNext } from "react-icons/md";
import { FaRegCirclePlay,FaRegCirclePause,FaRegHeart } from "react-icons/fa6";
import { LuRepeat2 } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";



const PlayTrack = () => {
  return (
    <div className='flex px-5 justify-between items-center absolute bottom-0  z-50 w-full h-20 bg-gray-700 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
      <div className="flex gap-4 justify-center items-start ">
        <img src={Image} alt="" className='w-14 h-14 rounded-lg'  />
        <div className="  flex flex-col ">
            <h1 className='font-semibold text-lg'>Softcore</h1>
            <p className='text-sm font-semibold'>Eminem</p>
        </div>
        <FaRegHeart className='mt-2 ml-2' />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-4 items-center mr-6">
            <PiShuffleAngular className='text-xl' />
            <MdSkipPrevious className='text-2xl' />
            <FaRegCirclePlay className='text-3xl' />
            <MdSkipNext className='text-2xl' />
            <LuRepeat2 className='text-xl'/>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <HiMiniSpeakerWave />
        <input type="range" className='w-16 h-1 rounded-lg bg-green-900 slider appearance-none' />
      </div>
    </div>
  )
}

export default PlayTrack
