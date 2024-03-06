import React from 'react';
import './App.css';
import Card from './components/Card';
import Search from './components/Search';
import Button from './components/Button';
import {useWeather} from './context/Weather'
const App = () => {
  const weather = useWeather()
    return (
      <div className="App">
        <h1>Wheater Forecast</h1>
        <Search/>
        <Button onClick={weather.fetchData} value="Search" />
        <Card/>
        <Button value="Refresh"/>
      </div>
    ); 
}

export default App;
