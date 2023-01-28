import React from 'react'
import './weatherCards.css'
import PropertiesToggler from '../components/PropertiesToggler'
const celciussymbol = "°C"
const fahrenheitsymbol = "°K"
const WeatherCards = ({weather, temps, isCelcius, changeUnitTemp}) => {
  return (
    <section className='weatherCards'>
        <div className="title"><h1>Weather App</h1></div>

        <div className='imgBox'>
            <div className="place">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <h2>{weather?.name}, {weather?.sys.country}</h2>
            </div>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            <div className="temperatureBox">
              <h3>{isCelcius?temps?.celcius:temps?.fahrenheit}</h3>
              <button onClick={changeUnitTemp}><p>{isCelcius?celciussymbol:fahrenheitsymbol}</p></button>
            </div>
        </div>
    <PropertiesToggler weather={weather}></PropertiesToggler>        
    </section>
  )
}

export default WeatherCards