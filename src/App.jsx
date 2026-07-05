import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  function generateRandomHex(){
    let str = "#"
    let available = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
      let randomIndex = (Math.floor(Math.random() * 16))
      str += available.charAt(randomIndex)
    }
    return str
  }

  // for readability keeping the function above state
  
  const [hex, setHex] = useState(()=> generateRandomHex())

  const hexRef = useRef(null)
  const rgbRef = useRef(null)
  

  function generateCode() {
    setHex(generateRandomHex())
  }

  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(-2), 16)

  const rgb = `rgb(${r}, ${g}, ${b})`;

  function copyToClipboardHex() {
    hexRef.current?.select()
    window.navigator.clipboard.writeText(hex)
  }

  function copyToClipboardRgb () {
    rgbRef.current?.select()
    window.navigator.clipboard.writeText(rgb)
  }

  return (
    <>
      <div className='w-full h-screen absolute'
        style={{ backgroundColor: hex }}>
        <div className='w-3xl h-fit flex flex-col justify-center items-center relative my-20 p-4 m-auto bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl'>
          <h1 className='font-bold p-5 text-3xl text-white/80'>Color Palette Generator</h1>
          <div className='w-70 h-10 rounded-2xl m-5'
            style={{ backgroundColor: hex }}></div>
          <div className='flex gap-30 p-5'>
            <div className='bg-gray-800/40 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '
              ><input
                  type="text"
                  value={hex}
                  className='text-center outline-none'
                  placeholder='HEX Code'
                  readOnly
                  ref={hexRef}
                /></div>
              <button className='bg-blue-500/70 cursor-pointer text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'
                onClick={copyToClipboardHex}>Copy</button>
            </div>
            <div className='bg-gray-800/40 py-5 rounded-4xl flex flex-col justify-center items-center gap-6'>
              <div className='text-2xl text-white '
              ><input
                  type="text"
                  value={rgb}
                  className='text-center outline-none'
                  placeholder='RGB Code'
                  readOnly
                  ref={rgbRef}
                /></div>
              <button className='bg-blue-500/70 cursor-pointer text-white px-5 py-3 duration-150 hover:scale-110 hover:bg-sky-500 rounded-3xl'
                onClick={copyToClipboardRgb}>Copy</button>
            </div>
          </div>
          <button className='bg-blue-500/70 cursor-pointer py-5 px-10 m-5 hover:bg-sky-500 rounded-4xl text-white hover:scale-110 duration-150'
            onClick={generateCode}
          >Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
