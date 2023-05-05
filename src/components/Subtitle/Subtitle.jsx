import React from 'react'
import './Subtitle.css'
const Subtitle = (props) => {
  return (
    <div className='w-full text-center mb-0'>
      <h1 className="  why-spotify-text font-bold tracking-tight text-black" style={{ fontFamily: 'SpotifyFont' }}>
            {props.text}
            </h1>
    </div>
  )
}

export default Subtitle
