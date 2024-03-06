import React from 'react'
import {useWeather} from '../context/Weather'
import './Card.css'
const Card = () => {
  const weather = useWeather()
  return (
    <div className='card-container'>
        <div className="nav">
        {weather && weather.data && weather.data.current && weather.data.current.condition && (
          <img src={weather.data.current.condition.icon} alt="nothing" />
          )}
          {weather && weather.data && weather.data.current && (
          <h1>{weather.data.current.temp_c} Degree</h1>
          )}
        </div>
    </div>
  )
}

export default Card
