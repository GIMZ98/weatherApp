import React from 'react'
import { useSelector } from 'react-redux'
import { selectInfos } from './infosSlice'

const TemperatureDiv = () => {

  const infos = useSelector(selectInfos)
  return (
    <>
        <div className='flex justify-center items-center flex-col w-full bg-blue-800 min-h-2/5'>
        <p className='text-[100px] text-white'>{infos.temperature}C</p>
        <p className='truncate text-[60px] text-white px-2 max-w-full'>{infos.name}</p>
        <p className='text-[18px] text-white'>
            {
                (infos.admin1)?(
                    infos.admin1+', '+infos.country
                ):(
                    infos.country
                )
            }

        </p>
    </div>

    </>
  )
}

export default TemperatureDiv