import React, {useState} from 'react'
import axios from 'axios'
import './scss/index.scss';
import Searchbar from './components/Searchbar';
import Weather from './components/Weather';

function App() {

  const[data,setData] = useState({});
  const[location,setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=69b4b60e98f4e29cf8b0c88a8a6fb174`  

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('');
    }
  }
  
  const weather = data.weather ? data.weather[0].main : null;

  switch(weather){
    case "Clear":
      document.body.style.background= "linear-gradient(rgba(135, 207, 235, 0.90), rgba(32, 32, 32, 0.2)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    case "Clouds":
      document.body.style.background= "linear-gradient(rgba(172, 211, 226, 0.75), rgba(32, 32, 32, 0.2)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    case "Rain":
      document.body.style.background= "linear-gradient(rgba(173, 173, 173, 0.9), rgba(32, 32, 32, 0.8)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    case "Thunderstorm":
      document.body.style.background= "linear-gradient(rgba(66, 66, 66, 0.8), rgba(32, 32, 32, 0.2)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    case "Snow":
      document.body.style.background= "linear-gradient(rgba(0, 0, 0, 0.05), rgba(32, 32, 32, 0.2)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    case "Mist":
      document.body.style.background= "linear-gradient(rgba(124, 124, 124, 0.2), rgba(175, 175, 175, 0.4)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
    default:
      document.body.style.background= "linear-gradient(rgba(135, 207, 235, 0.90), rgba(32, 32, 32, 0.2)), url('./background-meteo.jpg') no-repeat center center/cover";
      break;
  }
  return (
    <div>
      <Searchbar location={location} setLocation ={setLocation} searchLocation ={searchLocation}/>
      <Weather name={data.name} temperature={data.main} description={data.weather} wind={data.wind} id={data.id} />
    </div>
  );
}
export default App;
