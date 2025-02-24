import React from 'react'
import Header from './_components/Header'

function Provider({ children }) {


  return (
    <div className='bg-black'>
      <Header />
      <div className='bg-black px-10 lg:px-32 xl:px-48 2xl:px-56'>
        {children}
      </div>
    </div>
  )
}

export default Provider
