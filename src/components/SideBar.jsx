import React from 'react'
import Logo from '../assets/Spotify_logo_sm.png'

const SideBar = () => {
  return (
    <>
        <div className="flex font-semibold bg-gray-950  w-1/6 h-screen  flex-col justify-between py-5 px-7  ">
        <div className="menus">
        <img src={Logo} className='w-28' alt="spotify logo" />
            <ul className='mt-16 flex flex-col gap-3' >
              <li>Home</li>
              <li>Radio</li>
              <li>Podcasts</li>
              <li>Books</li>
            </ul>
            
        </div>
            
            <ul className='flex flex-col gap-2 mb-3'>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
        </div>
    </>
  )
}

export default SideBar