import React from 'react'
import sun from '../assets/img/sun.png'
import moon from '../assets/img/moon.png'
import sun_clouds from '../assets/img/sun-clouds.png'
import moon_clouds from '../assets/img/moon-clouds.png'
import { useSelector } from 'react-redux'
import { selectInfos } from './infosSlice'


const ImgDiv = () => {

  const infos = useSelector(selectInfos)

  return (
    <>
        <div className='flex justify-center items-center w-full bg-slate-0 h-1/5 mt-5'>
            {
                (infos.is_day==1)?(
                    (infos.cloudcover>60)?(
                        <img src={sun_clouds} alt="" className='h-full'/>
                    ):(
                        <img src={sun} alt="" className='h-full'/>
                    )                 
                ):(
                    (infos.cloudcover>60)?(
                        <img src={moon_clouds} alt="" className='h-full'/>    
                    ):(
                        <img src={moon} alt="" className='h-full'/>   
                    )
                )
            }

        </div>
        <div className='w-full bg-blue-300 h-1/4 mt-5'>
            <p className='text-2xl text-white'>{infos.is_day} and {infos.rain} and {infos.cloudcover}</p>
        </div>
        <div className='w-full bg-blue-300 h-1/4 mt-5'></div>
    </>
  )
}

export default ImgDiv