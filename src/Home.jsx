import React from 'react'
import SearchDiv from './features/SearchDiv'

const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col justify-between max-w-[800px] w-screen min-h-screen bg-blue-500'>
            <SearchDiv/>
        </div>
    </div>

  )
}

export default Home