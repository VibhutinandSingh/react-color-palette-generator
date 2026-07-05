import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState("#2F3422")

  const generateCode = useCallback(() => {
    let str = "#"
    let available = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
      let randomIndex = (Math.floor(Math.random() * 16))
      str += available.charAt(randomIndex)
    }
    setColor(str)
  }, [])
  useEffect(() => {
    generateCode();
  }, [generateCode])

  return (
    <>
      <div className='w-full h-screen absolute'
        style={{ backgroundColor: color }}>
        <div className='w-3xl h-fit flex flex-col justify-center items-center relative my-20 p-4 m-auto bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl'>
          <h1 className='font-bold p-5 text-3xl text-white/80'>Color Palette Generator</h1>
          <div className='w-70 h-10 rounded-2xl m-5'
            style={{ backgroundColor: color }}></div>
          <div className='flex gap-30 p-5'>
            <div className='bg-gray-800/40 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '
              ><input
                  type="text"
                  value={color}
                  className='text-center outline-none'
                  placeholder='HEX Code'
                  readOnly
                /></div>
              <button className='bg-blue-500/70 text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'>Copy</button>
            </div>
            <div className='bg-gray-800/40 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '
              ><input
                  type="text"
                  // value={}
                  className='text-center outline-none'
                  placeholder='RGB Code'
                  readOnly
                /></div>
              <button className='bg-blue-500/70 text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'>Copy</button>
            </div>
          </div>
          <button className='bg-blue-500/70 py-5 px-10 m-5 hover:bg-sky-500 rounded-4xl text-white hover:scale-110 duration-150'
            onClick={generateCode}
          >Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
