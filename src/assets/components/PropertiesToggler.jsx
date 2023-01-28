import React, { useEffect, useState } from 'react'
import './propertiesToggler.css'



const propertiesToggler = ({weather}) => {

    const description = 'Weather: '+weather?.weather[0].description
    const windSpeed = 'Wind Speed: '+weather?.wind.speed+'m/s'
    const clouds = 'Clouds: '+weather?.clouds.all+'%'
    const pressure = 'Pressure: '+weather?.main.pressure+'hPa'
    const [data, setdata] = useState()

    
    const changetoClouds = () => {
        setdata(clouds);
    }
    const changetoWindSpeed = () => {
        setdata(windSpeed);
    }
    const changetoPressure = () => {
        setdata(pressure);
    }
    const changetoDescription = () => {
        setdata(description);
    }
   


                //   <li>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
                //   <li><span>Wind Speed: {weather?.wind.speed}m/s</span></li>
                //   <li><span>Clouds: {weather?.clouds.all}%</span></li>
                //   <li><span>Pressure: {weather?.main.pressure} hPa</span></li>    

    useEffect((weather) => {
        setdata(description)
    }, [weather])

  return (
    <div className='propertiesBox'> 

        <div className='propertiesData'>
            <p>{data}</p>
        </div>

        <div className='icons'>
            <ul className='propertiesIcons'>
                <li>
                    <button onClick={changetoDescription}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-d" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
</svg>
                    </button>
                </li>
                <li>
                    <button onClick={changetoClouds}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
</svg>
                    </button>
                </li>
                <li>
                    <button onClick={changetoWindSpeed}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wind" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
</svg>
                    </button>
                </li>
                <li>
                    <button onClick={changetoPressure}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-down" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="21" x2="7" y2="3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M4 18l3 3l3 -3" />
  <line x1="17" y1="21" x2="17" y2="3" />
</svg>
                    </button>
                </li>
            </ul>
        </div>





          
        </div>
  )
}

export default propertiesToggler