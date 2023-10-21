import { useEffect } from 'react'
import SearchDiv from './features/SearchDiv'
import ImgDiv from './features/ImgDiv'
import TemperatureDiv from './features/TemperatureDiv'
import BottomDiv from './features/BottomDiv'
import { useSelector } from 'react-redux'
import { selectInfos } from './features/infosSlice'
import $ from 'jquery'

const Home = () => {

  const infos = useSelector(selectInfos)

  useEffect(() => {
    if(infos.is_day==1){
      $('#home').removeClass('bg-[#191717]').addClass('bg-[#6499E9]')
    }
    else{
      $('#home').removeClass('bg-[#6499E9]').addClass('bg-[#191717]')
    }
  }, [infos])
  

  return (
    <div className='flex justify-center'>
        <div id='home' className='flex flex-col justify-between max-w-[800px] w-screen min-h-screen bg-[#6499E9]'>
            <SearchDiv/>
            <ImgDiv/>
            <TemperatureDiv/>
            <BottomDiv/>
        </div>
    </div>

  )
}

export default Home