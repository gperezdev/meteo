import React from 'react'

export default function Weather({name, temperature, description, wind}) {
  return (
    <div className='weather'>
      <div className="weather__primary">
        <p className='weather__primary__location'>{name}</p>
        {temperature ? <h1 className='weather__primary__temperature'>{Math.floor(temperature.temp)} °C </h1> : null}
        {description ? <p className='weather__primary__description'>{description[0].description}</p> : null}
      </div>

      {name !== undefined &&
        <div className="weather__secondary">
          <div className="weather_secondary__termal">
            <p className='weather__secondary__termal__text'>Feels like</p>
            {temperature ? <p className='weather__secondary__termal__value'>{Math.floor(temperature.feels_like)} °C </p> : null}
          </div>
          <div className="weather_secondary__humidity">
            <p className='weather__secondary__humidity__text'>Humidity</p>
            {temperature ? <p className='weather__secondary__humidity__value'>{Math.floor(temperature.humidity)} % </p> : null}
          </div>
          <div className="weather_secondary__pressure">
            <p className='weather__secondary__pressure__text'>Pressure</p>
            {temperature ? <p className='weather__secondary__pressure__value'>{Math.floor(temperature.pressure)} hPa </p> : null}
          </div>
          <div className="weather_secondary__wind">
            <p className='weather__secondary__wind__text'>Wind speed</p>
            {wind ? <p className='weather__secondary__pressure__value'>{wind.speed} m/s</p> : null}
          </div>
        </div>
      }

    </div>
  )
}
