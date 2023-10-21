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
        <div className='flex justify-center items-center bg-slate-0 sm:mt-0 mt-[-30px] sm:h-1/5 h-1/6'>
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

    </>
  )
}

export default ImgDiv