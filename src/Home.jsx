import React from 'react'
import SearchDiv from './features/SearchDiv'
import ImgDiv from './features/ImgDiv'
import TemperatureDiv from './features/TemperatureDiv'

const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col justify-between max-w-[800px] w-screen min-h-screen bg-blue-0'>
            <SearchDiv/>
            <ImgDiv/>
            <TemperatureDiv/>
        </div>
    </div>

  )
}

export default Home