import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {WeatherProvider} from './context/Weather'
ReactDOM.render(
  <StrictMode>
  <WeatherProvider>
   <App />
  </WeatherProvider>
  </StrictMode>,
  document.getElementById('root')
);
