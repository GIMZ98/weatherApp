import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import $ from 'jquery'
import { TiDeleteOutline } from 'react-icons/ti'
import { setCoords, selectCoords } from './coordsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setInfos, selectInfos } from './infosSlice'

const SearchDiv = () => {

  const dispatch = useDispatch()
  const coords = useSelector(selectCoords)
  const infos = useSelector(selectInfos)

  const [ city, setCity ] = useState('')
  const [ cities, setCities] = useState([])

  const cityChanged = () => {
    const _city = $('#city').val()
    setCity(_city)

  }

  const clearInput = () => {
    setCity('')
    setCities([])
    $('#city').val('')
    console.log("city: ", city);
    $('#deleteButton').addClass('hidden')
  }

  const getCities = () => {

    $.ajax({
        url: `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`,
        method: 'GET', 
        dataType: 'json', 
        success: function(response){
          console.log("data: ", response.results);
          const _cities = response.results
          setCities(_cities)
        },
        error: function(error){
          console.error('Error:', error);
        }
      });
  }

  const showInfos = () => {
    console.log("show infos: ", infos)
  }

  const setInformation = (latitude, longitude, name, admin1, country, timezone) => {
    $.ajax({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,is_day,rain,cloudcover,windspeed_10m&timezone=auto`,
      method: 'GET',
      dataType: 'json',
      success: function(response){
        console.log("infos current: ", response.current)

        const name_ = name
        const admin1_ = admin1
        const country_ = country
        const latitude_ = latitude
        const longitude_ = longitude
        const temperature_ = response.current.temperature_2m
        const is_day_ = response.current.is_day
        const cloudcover_ = response.current.cloudcover
        const windspeed_ = response.current.windspeed_10m
        const relativehumidity_ = response.current.relativehumidity_2m
        const rain_ = response.current.rain
        const time_ = response.current.time
        const timezone_ = timezone

        dispatch(
          setInfos(
            {
              name: name_,
              admin1: admin1_,
              country: country_,
              latitude: latitude_,
              longitude: longitude_,
              temperature: temperature_,
              is_day: is_day_,
              cloudcover: cloudcover_,
              windspeed: windspeed_,
              relativehumidity: relativehumidity_,
              rain: rain_,
              time: time_,
              timezone: timezone_,
            }
          )
        )

      },
      error: function(error){
       console.log('err:', error)
      }
    })
  }

  const getCoords = (cityData) => {
    // console.log('latitude: ', coords.latitude, ',longitude: ', coords.longitude)
    console.log('latitude: ', cityData.latitude, ',longitude: ', cityData.longitude, 'name: ', cityData.name)

    const latitude_ = cityData.latitude
    const longitude_ = cityData.longitude
    const name_ = cityData.name
    const admin1_ = cityData.admin1
    const country_ = cityData.country
    const timezone_ = cityData.timezone

    dispatch(
      setCoords(
        {
          latitude: latitude_,
          longitude: longitude_,
          name: name_,
          admin1: admin1_,
          country: country_,
        }
      )
    )
    setInformation(latitude_, longitude_, name_, admin1_, country_, timezone_)

  }

  useEffect(() => {
    if(city.length>3){
        $('#deleteButton').removeClass('hidden')
        getCities()
    }
    if(city.length<4){
        setCities([])
    }

  }, [city])
  
  return (
    <div className='flex justify-between h-[80px] w-full bg-blue-300 z-[100]'>
        <div className='flex bg-blue-300 w-full p-[15px]'>
            <div className='bg-slate-0 w-full'>
                <div className='flex bg-white w-full h-full justify-between items-center'>
                    <input id='city' type="text" placeholder='Enter city' onChange={cityChanged} className='w-full h-full pl-[20px] py-[5px] focus:outline-1 outline-blue-500 font-mono'/>
                    <button id='deleteButton' className='hidden' onClick={clearInput}><TiDeleteOutline className='text-[35px] p-[5px]'/></button>
                </div>
                <div id="suggestions" className='mt-[10px]'>
                    {
                      cities?(
                        cities.map((cityData, index) => {
                            return(
                            <button key={index} onClick={getCoords.bind(null, cityData)} className='flex items-center bg-white min-w-full min-h-[60px] pl-[20px] text-slate-600 font-mono text-left hover:bg-slate-200 border-2 black'>
                                <img src={`https://flagsapi.com/${cityData.country_code}/shiny/64.png` }className='w-[32px] mr-[12px]' alt="" />
                                <div>
                                    <p className='text-[20px] font-bold'>{cityData.name}</p>
                                    <p className='text-[12px]'>{cityData.admin1}, {cityData.country}</p>
                                </div>
                            </button>
                            )
                        })
                      ):('')
                    }
                </div>
            </div>
            <div className='bg-slate-200 w-[72px]'>
                <button id='search' onClick={showInfos} className='flex justify-center items-center bg-blue-500 w-full h-full hover:bg-blue-400 text-[30px] text-white'>
                    <BsSearch/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default SearchDiv