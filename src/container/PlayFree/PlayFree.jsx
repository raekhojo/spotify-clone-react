import React from 'react'
import './playfree.css'
const PlayFree = () => {
  return (
    <div className='play-free mt-28'>
    <div className="hero-text-container text-center pt-36  mx-auto  max-w-5xl items-center justify-between px-6 lg:px-8">
             <h1 className="hero-text font-bold tracking-tight text-white" style={{ fontFamily: 'SpotifyFont' }}>
             Ready? Let’s play.
             </h1>
             <div className="mt-10 flex items-center justify-center gap-x-6">
             <a href="#home" className=" md:block py-4 px-12  text-black bg-white rounded-full baseline hover:bg-brightRedLight font-bold">
               GET SPOTIFY FREE
            </a>
              
             </div>
          
     </div>
     </div>
  )
}

export default PlayFree
