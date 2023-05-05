import React from 'react'
import Subtitle from '../../components/Subtitle/Subtitle'
import './whyspotify.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
const products = [
    {
      id: 1,
      name: 'Play your favorites.',
      href: '#',
      imageSrc: icon1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Listen to the songs you love, and discover new music and podcasts.',
    },
    {
      id: 2,
      name: 'Playlists made easy.',
      href: '#',
      imageSrc: icon2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: "We'll help you make playlists. Or enjoy playlists made by music experts.",
    },
    {
      id: 3,
      name: 'Make it yours.',
      href: '#',
      imageSrc: icon3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: "Tell us what you like, and we'll recommend music for you.",
    },
    {
      id: 4,
      name: 'Save mobile data.',
      href: '#',
      imageSrc: icon4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'To use less data when you play music, turn on Data Saver in Settings.',
    },
    // More products...
  ]
  
const WhySpotify = () => {
  return (
    <div className='mx-auto max-w-7xl   text-center  px-6 lg:px-8 mt-20'>
      <Subtitle text="Why Spotify?" />

    
      <div className="why mx-auto max-w-7xl  px-24 py-0 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 mt-0">

      <div className="flex flex-wrap justify-center sm:justify-around">
  {products.map((product) => (
    <div key={product.id} className="group flex flex-col items-center mx-2  mb-14">
      <img src={product.imageSrc} alt={product.imageAlt} className="" />
      <div className="mt-4 text-center">
        <div>
          <h3 className="font-semibold text-gray-700 text-xl" style={{ fontFamily: 'SpotifyFont' }}>
            {product.name}
          </h3>
          <p className="mt-2 text-black w-60 text-base"  style={{ fontFamily: 'SpotifyFontMedium' }}>{product.color}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
 
    </div>
  )
}

export default WhySpotify
