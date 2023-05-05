import React from 'react'
import { Accordion } from 'flowbite-react'
import Subtitle from '../../components/Subtitle/Subtitle'
import './more-info.css'
const MoreInfo = () => {
  return (
   <div className="container acc mx-auto max-w-6xl mt-28">
    <Subtitle text="Got questions ?" />
     <Accordion collapseAll={true} className=' mt-10'>
    <Accordion.Panel>
      <Accordion.Title className='text-black ' style={{ fontFamily: 'SpotifyFont' }}>
      How do I create a playlist?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-black ">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-black dark:text-gray-400">
          Check out this guide to learn how to 
          <a
            href="https://flowbite.com/docs/getting-started/introduction/"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            get started
          </a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title style={{ fontFamily: 'SpotifyFont' }}>
        Is there a Figma file available?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 tetx-black dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p className="tetx-black dark:text-gray-400">
          Check out the
          <a
            href="https://flowbite.com/figma/"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Figma design system
          </a>
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      How do I activate Data Saver mode?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-black">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-black">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-black">
          Learn more about these technologies:
        </p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://flowbite.com/pro/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Flowbite Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
   </div>
  )
}

export default MoreInfo
