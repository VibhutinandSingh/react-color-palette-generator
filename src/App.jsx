import { useState } from 'react'

import './App.css'

function App() {




  return (
    <>
      <div className='w-full h-screen '>
        <div className='w-3xl h-fit flex flex-col justify-center items-center p-4 m-auto my-20 bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl'>
          <h1 className='font-bold p-5 text-3xl text-white/80'>Color Plalette Generator</h1>
          <div className='w-70 h-10 rounded-2xl m-5 bg-amber-600'></div>
          <div className='flex gap-30 p-5'>
            <div className='bg-gray-800/40 px-10 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '>hex</div>
              <button className='bg-blue-500/70 text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'>Copy</button>
            </div>
            <div className='bg-gray-800/40 px-10 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '>rgb</div>
              <button className='bg-blue-500/70 text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'>Copy</button>
            </div>
          </div>
          <button className='bg-blue-500/70 py-5 px-10 m-5 hover:bg-sky-500 rounded-4xl text-white hover:scale-110 duration-150'>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
