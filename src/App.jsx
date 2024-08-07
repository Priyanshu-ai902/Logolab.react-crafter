import { useState } from 'react'
import './App.css'
import BackgroundController from './components/BackgroundController'
import Header from './components/Header'
import IconController from './components/IconController'
import SideNav from './components/SideNav'




function App() {

  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <>
      <Header/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
          {selectedIndex == 0 ? <IconController /> :
            <BackgroundController />
          }


        </div>
        <div className="md:col-span-3 bg-red-400">
          back
        </div>
        <div className="bg-blue-600">
          ads banner
        </div>
      </div>
    </>
  )
}

export default App
