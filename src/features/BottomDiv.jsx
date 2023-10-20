import React from 'react'
import { useSelector } from 'react-redux'
import { selectInfos } from './infosSlice'

const BottomDiv = () => {
  const infos = useSelector(selectInfos);

  return (
    <>
      <div className='w-full h-1/5'>
        <p className='text-white text-center'>
            last updated {infos.time.substring(11, 16)}, {infos.timezone}
        </p>
        <div className='flex flex-col justify-center h-full w-full bg-slate-500 pl-[25px]'>
            <p className='text-white'>Wind Speed: {infos.windspeed}</p>
            <p className='text-white'>Relative Humidity: {infos.relativehumidity}</p>
        </div>
      </div>
    </>
  )
}

export default BottomDiv