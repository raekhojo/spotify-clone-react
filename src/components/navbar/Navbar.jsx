import React from 'react'
import { useState } from 'react'
import {Dialog, Popover} from '@headlessui/react'
import logo from '../../assets/spotify-logo.png'
// import{
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<header className="bg-black py-4">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
    <div className="flex lg:flex-1">
      <a href="#home" className="items-center">
        <img src={logo} alt="logo" className="h-10" />
      </a>
    </div>
    <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a href="#home" className="text-base hover:text-green font-semibold leading-6 text-white" style={{ fontFamily: 'SpotifyFont' }}>
           Premium
          </a>
          <a href="#home" className="text-base hover:text-green font-semibold leading-6 text-white" style={{ fontFamily: 'SpotifyFont' }}>
            Support
          </a>
          <a href="#home" className="text-base hover:text-green font-semibold leading-6 text-white" style={{ fontFamily: 'SpotifyFont' }}>
            Download
          </a>
          <span className=' text-white ' style={{ fontFamily: 'SpotifyFontLight' }}>|</span>
          <a href="#home" className="text-base hover:text-green font-semibold leading-6 text-white" style={{ fontFamily: 'SpotifyFont' }}>
            Sign Up
          </a>
          <a href="#home" className="text-base hover:text-green font-semibold leading-6 text-white" style={{ fontFamily: 'SpotifyFont' }}>
            Login
          </a>
        </Popover.Group>
  </nav>
  <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <a href="#home" className="items-center py-0">
        <img src={logo} alt="logo" className="h-10" />
          </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>


            </button>
          </div>
          <div className="mt-6 flow-root">
          
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block  rounded-lg px-3 py-2 text-white font-semibold leading-7 text-gray-900 " style={{ fontFamily: 'SpotifyFont' }}
                >
                  Premium
                </a>
                <a
                  href="#home"
                  className="-mx-3 block  rounded-lg px-3 py-2 text-white font-semibold leading-7 text-gray-900 " style={{ fontFamily: 'SpotifyFont' }}
                >
                  Support
                </a>
                <a
                  href="#home"
                  className="-mx-3 block  rounded-lg px-3 py-2 text-white font-semibold leading-7 text-gray-900 " style={{ fontFamily: 'SpotifyFont' }}
                >
                  Download
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#home"
                  className="-mx-3 block  rounded-lg px-3 py-2.5 text-white font-semibold leading-7 text-gray-900 " style={{ fontFamily: 'SpotifyFont' }}
                >
                  Sign Up
                </a>
                <a
                  href="#home"
                  className="-mx-3 block  rounded-lg px-3 py-2.5 text-white font-semibold leading-7 text-gray-900 " style={{ fontFamily: 'SpotifyFont' }}
                >
                  Log in
                </a>
              </div>
            </div>
       
          </div>
        </Dialog.Panel>
      </Dialog>
</header>
  )
}

export default Navbar
