import React from 'react'
import LeftPanelHomeScreen from '../components/Home/LeftPanelHomeScreen'
import RightPanelHomeScreen from '../components/Home/RightPanelHomeScreen'

function Home() {
  return (
    <div className='flex flex-row w-[100%]'>
      <div className='w-[30%]'  >
        <LeftPanelHomeScreen />
      </div>
      <div className='w-[70%]'>
        <RightPanelHomeScreen />
      </div>
    </div>
  )
}

export default Home