import { useSelector } from 'react-redux'
import { selectInfos } from './infosSlice'

const TemperatureDiv = () => {

  const infos = useSelector(selectInfos)
  return (
    <>
        <div className='flex justify-center items-center flex-col w-full bg-blue-0 sm:mt-0 mt-[-50px] min-h-2/5'>
        <p className='sm:text-[150px] text-[100px] text-white'>{infos.temperature}°C</p>
        <p className='truncate sm:text-[60px] text-[50px] text-white px-2 max-w-full'>{infos.name}</p>
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