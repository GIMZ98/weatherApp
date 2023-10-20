import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import $ from 'jquery'
import { TiDeleteOutline } from 'react-icons/ti'
import { setCoords, selectCoords } from './coordsSlice'
import { useDispatch, useSelector } from 'react-redux'

const SearchDiv = () => {

  const dispatch = useDispatch()
  const coords = useSelector(selectCoords)

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
        url: `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`, // API endpoint URL
        method: 'GET', 
        dataType: 'json', 
        success: function(response) {
          console.log("data: ", response.results);
          const _cities = response.results
          setCities(_cities)
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
  }

  const getCoords = (_latitude, _longitude) => {
    console.log('latitude: ', coords.latitude, ',longitude: ', coords.longitude)
    dispatch(
      setCoords(
        {
          latitude: _latitude,
          longitude: _longitude
        }
      )
    )


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
                            <button key={index} onClick={getCoords.bind(null, cityData.latitude, cityData.longitude)} className='flex items-center bg-white min-w-full min-h-[60px] pl-[20px] text-slate-600 font-mono text-left hover:bg-slate-200 border-2 black'>
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
                <button id='search' className='flex justify-center items-center bg-blue-500 w-full h-full hover:bg-blue-400 text-[30px] text-white'>
                    <BsSearch/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default SearchDiv