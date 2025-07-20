import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp() {
  const [weatherInfo,setWeatherInfo] = useState({
    city:"Delhi",
    feelsLike : 24.84,
    temp : 25.08,
    tempMin:25,
    tempMax: 25.08,
    humidity :47,
    weather : "Sunny",
  });

  let updateInfo=(newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info = {weatherInfo} />
    </div>
  );
}