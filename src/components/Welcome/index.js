import React from 'react'
// import './reveal.css'

const Index = () => {

  const titles = [
    {id: 'Arquitetura', class: 'texts-h1'},
    {id: 'Moderna Brasil', class: 'texts-h2'}
  ]

  const imagesContainer = [
    {class: 'imageReveal1', img: `bg-[url('../images/imgArq1.png')]`},
    {class: 'imageReveal2', img: `bg-[url('../images/imgArq2.png')]`},
  ]

  return (
    <div className='flex flex-col h-screen py-12'>

      <div className='mb-12'>
        {
          titles.map((item, index) => 
            <div key={index} className='reveal-support'>
              <p className={`text-5xl text-gray-900 ${item.class}`}>{item.id}</p>
            </div>
          )
        }
      </div>

      <div className='flex flex-row w-full h-full'>
        {
          imagesContainer.map((item, index) => 
            <div 
              key={index} 
              className={`bg-cover bg-center bg-no-repeat ${item.img} ${item.class}`}
            />
          )
        }
      </div>

    </div>
  )
}

export default Index