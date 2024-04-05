import React from 'react'
import { Home, Navbar, Proyects } from './components'
import Loader from './components/Loader'

const App = () => {
  return (
    <>
    <Loader/>
      <Navbar/>
    <div className='relative max-w-[1300px] mx-auto desktop:p-[1.5rem]'>
    <Home/>
    <Proyects/>
    </div>
    
    </>
  )
}

export default App