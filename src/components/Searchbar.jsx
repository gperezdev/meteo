import React from 'react'

export default function Searchbar({location, setLocation, searchLocation}) {
  return (
    <div className="searchbar">
      <h1 className='searchbar__title'>METEO</h1>
      <input className='searchbar__container' type="search"  placeholder='Search city' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation}/>
    </div>
  )
}
