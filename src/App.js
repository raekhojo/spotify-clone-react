import React from 'react'
import { Footer, MoreInfo, Navbar } from './components/index'
import { CTA, Hero, PlayFree, WhySpotify } from './container'
const App = () => {
  return (
    <div>
    <Navbar />
    <Hero/>
    <WhySpotify/>
    <CTA/>
    <MoreInfo/>
    <PlayFree/>
    <Footer/>
    </div>
  )
}

export default App
