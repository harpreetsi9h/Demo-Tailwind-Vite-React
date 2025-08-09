import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex p-5 space-x-8 items-center justify-center'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <h1 className='text-3xl font-bold'>
          TailWindCSS with React
        </h1>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <div>
        <h1 className='text-xl font-large text-black dark:text-white text-center'>Tailwind Vite with React is Cool</h1>
        <div className='flex items-center justify-center space-x-4'>
          <img src={viteLogo} alt="Vite logo" width={200}  />
          <img src={reactLogo} alt="React logo" width={200}  />
        </div>
        <p className='pt-5'>At TailWindCSS, we're a global community of</p>
        <ul className='list-disc pl-5'>
          <li>developers</li>
          <li>designers</li>
          <li>and enthusiasts</li>
        </ul>
        <p>Working together to keep the Internet alive and accessible, so People worldwide
          can be informed contributors and creators of the Web. We believe this act of human
          collaboration across an open platform is essential to individual growth and our
          collective future.
        </p>
        <p>Read the <a href="https://tailwindcss.com/docs">Tailwind CSS</a> to learn more even more about the values
          and principles the guide the pursuit of a better web.
        </p>
      </div>

    </>
  )
}

export default App
