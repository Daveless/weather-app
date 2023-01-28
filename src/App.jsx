import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCards from './assets/components/WeatherCards'

const API_KEY = '9b340e56903807b0518c00dd8be7ed27'


function App() {
  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temps, setTemps] = useState()
  const [isCelcius, setisCelcius] = useState(true)

  
  const success = (e) => {
console.log(e)
const newCoords = {
  lat: e.coords.latitude,
  lon: e.coords.longitude
}
setcoords(newCoords);
  }
const changeUnitTemp = () => setisCelcius(!isCelcius)

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() =>{
    if(coords){
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
      .then(res => {
        setweather(res.data)
        const celcius = (res.data.main.temp - 273.15).toFixed(2);
        const fahrenheit = (celcius*(9/5)+32).toFixed(2);
        const newTemps = {
          celcius,
          fahrenheit
        }
        setTemps(newTemps);
      }
      )
      .catch(err => console.log(err)
      )}
  }, [coords])

  return (
    <div className="App">
      
      <WeatherCards weather={weather} isCelcius={isCelcius} changeUnitTemp={changeUnitTemp} temps={temps}></WeatherCards>
    </div>
  )
}

export default App
