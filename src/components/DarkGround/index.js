import React, { useRef, useEffect, useState } from 'react'
// image
import IMAGE_MASP from '../../images/imgArq3.png'

const Index = ({changeBackground}) => {
  const myRef = useRef()
  const [isVisible, setIsVisible] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  changeBackground(isVisible)

  return (
    <>
      <div className='py-24'>

        <div>
          <h1 className={`text-6xl ease-in-out duration-500 ${isVisible ? 'text-white' : 'text-gray-900'}`}>Masp</h1>
          <p className={`text-sm text-gray-700 font-[Inter] font-semibold mt-6 ease-in-out duration-500 ${isVisible ? 'text-white' : 'text-gray-900'}`}>O MASP é um museu flutuante, elevado, um prisma suspenso onde se concentram as obras de arte e o acervo.</p>
        </div>

        <div className={`w-full relative overflow-hidden p-1 my-6`}>
          <img 
            className={``}
            src={IMAGE_MASP}
          />
          <div className={`w-full h-full bg-amber-100 absolute top-0 left-0 ease-in-out duration-500 ${isVisible && 'revealObserver bg-gray-900'}`}/>
        </div>

        <button ref={myRef} className={`font-[Inter] text-sm border px-6 py-1 hover:text-gray-900 hover:bg-amber-100 hover:border-amber-100 ease-in-out duration-500 ${isVisible ? 'text-white border-white' : 'text-gray-900 border-gray-900'}`}>
          Ver mais +
        </button>
      </div>
    </>
  )
}

export default Index