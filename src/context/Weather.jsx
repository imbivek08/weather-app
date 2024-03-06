import React, {createContext, useContext,useState} from 'react';
import {fetchDataFromAPI} from '../api/data'

const WeatherContext = createContext(null)
export const useWeather = ()=>{
    return useContext(WeatherContext)
}
export const WeatherProvider = (props)=>{
    const [data,setData] = useState(null)
    const [searchCity,setSearchCity] = useState(null)
    const fetchData = async() =>{
        const response = await fetchDataFromAPI(searchCity);
        setData(response)
    }
    return (
     <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchData}} >
        {props.children}
     </WeatherContext.Provider>
    )
}