import React from 'react'
import {useWeather} from '../context/Weather'
import './Search.css'
const Search = () => {
  const weather = useWeather();
  return (
    <div className='search'>
      <input type="text" 
      placeholder='Serch here'
      value={weather.searchCity} 
      onChange={(e)=>weather.setSearchCity(e.target.value)}
      />
    </div>
  )
}

export default Search
