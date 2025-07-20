
import "./app.css"
import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"
import WeatherApp from "./WeatherApp"

function App() {



  return (
    <>
  <WeatherApp/>

    </>
  )
}

export default App
 

// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Box,
//   TextField,
//   Button
// } from '@mui/material';
// import {
//   WbSunny,
//   Cloud,
//   Thunderstorm,
//   AcUnit
// } from '@mui/icons-material';

// const getWeatherIcon = (condition) => {
//   switch (condition.toLowerCase()) {
//     case 'sunny':
//       return <WbSunny fontSize="large" color="warning" />;
//     case 'cloudy':
//       return <Cloud fontSize="large" color="primary" />;
//     case 'storm':
//       return <Thunderstorm fontSize="large" color="secondary" />;
//     case 'snow':
//       return <AcUnit fontSize="large" color="info" />;
//     default:
//       return <WbSunny fontSize="large" />;
//   }
// };

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);

//   const handleSearch = () => {
//     // Static response for demo. Replace this with actual API call later
//     setWeather({
//       city: city,
//       temperature: Math.floor(Math.random() * 35 + 10),
//       condition: ['Sunny', 'Cloudy', 'Storm', 'Snow'][Math.floor(Math.random() * 4)]
//     });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 2
//       }}
//     >
//       <Card sx={{ width: 350, borderRadius: 4, boxShadow: 6, backgroundColor: 'white' }}>
//         <CardContent>
//           <Typography variant="h5" textAlign="center" fontWeight="bold" mb={2}>
//             Weather Widget
//           </Typography>

//           <Grid container spacing={2} alignItems="center" justifyContent="center">
//             <Grid item xs={8}>
//               <TextField
//                 fullWidth
//                 label="Enter City"
//                 variant="outlined"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 onClick={handleSearch}
//                 disabled={!city.trim()}
//               >
//                 Search
//               </Button>
//             </Grid>
//           </Grid>

//           {weather && (
//             <Box mt={4} textAlign="center">
//               {getWeatherIcon(weather.condition)}
//               <Typography variant="h6" mt={1}>
//                 {weather.city}
//               </Typography>
//               <Typography variant="h3" color="text.primary">
//                 {weather.temperature}°C
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {weather.condition}
//               </Typography>
//             </Box>
//           )}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// export default App;
