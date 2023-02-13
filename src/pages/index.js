import React, { useState } from "react"
// components
import { Welcome, DarkGround } from '../components'
// style
import '../style/reveal.css'

const IndexPage = () => {

  const [darkBackground, setDarkBackground] = useState()

  function changeBackground(changer) {
    setDarkBackground(changer)
  }
  
  return (
    <div className={`flex flex-col bg-amber-100 px-5 w-full ease-in-out duration-500 ${darkBackground ? 'bg-gray-900' : 'bg-amber-100'}`}>
      <Welcome/>
      <DarkGround changeBackground={changeBackground}/>
    </div>
  )
}

export default IndexPage
