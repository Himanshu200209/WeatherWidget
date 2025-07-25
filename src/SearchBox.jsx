import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { colors } from '@mui/material';



export default function SearchBox({updateInfo}){
  let [city,setCity] = useState("");
  let [error,setError] = useState(false);

 let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let API_KEY = "759152fb01eb2433f1d535b4aa30428d";

  let getWeatherInfo = async()=>{
    try {

     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);


  let jsonResponse= await response.json();
  console.log(jsonResponse);

   let result = {
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_Like,
    weather:jsonResponse.weather[0].description
  };
  console.log(result);
  return result;
    }
   catch (err){
    throw err;
   }

  };

 

  let handleChange=(evt)=>{
    setCity(evt.target.value);
  };

  let handleSubmit=async(evt)=>{
    try{
 evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
       setError(true);
    }
   
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}> 
          <TextField id="city"
           label="City Name"
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}/>
          <br />
            <Button variant="contained" type="submit" >
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such Place exists in API</p>}
      </form>
    </div>
  );
}