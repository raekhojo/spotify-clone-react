import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='custom-height'>
   <div className="hero-text-container text-center pt-36  mx-auto  max-w-5xl items-center justify-between px-6 lg:px-8">
            <h1 className="hero-text font-bold tracking-tight text-white" style={{ fontFamily: 'SpotifyFont' }}>
            Play millions of songs and podcasts, for free.
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

export default Hero
