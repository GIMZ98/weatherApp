import { useSelector } from 'react-redux'
import { selectInfos } from './infosSlice'

const BottomDiv = () => {
  const infos = useSelector(selectInfos);

  return (
    <>
      <div className='w-full h-1/6'>
        <p className='text-white text-center'>
            Last Updated {infos.time.substring(11, 16)}, {infos.timezone} time
        </p>
        <div className='flex flex-col justify-center h-full w-full bg-slate-0 pl-[25px]'>
            <p className='text-white'>Wind Speed: {infos.windspeed} km/h</p>
            <p className='text-white'>Relative Humidity: {infos.relativehumidity}%</p>
        </div>
      </div>
    </>
  )
}

export default BottomDiv