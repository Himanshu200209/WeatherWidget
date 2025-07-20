import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

  const INIT_URL="https://images.search.yahoo.com/search/images;_ylt=Awr.1a01CnJockAGYB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US885G0&p=rainy+wweather&fr=mcafee&th=265&tw=474&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F042%2F146%2F565%2Fnon_2x%2Fai-generated-beautiful-rain-day-view-photo.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Frainy-weather&size=189KB&name=Rainy+Weather+Stock+Photos%2C+Images+and+Backgrounds+for+Free+Download&oid=2&h=980&w=1749&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.5fI8VxCcsJoQ2QL5stbS-gHaEJ%3Fpid%3DApi&tt=Rainy+Weather+Stock+Photos%2C+Images+and+Backgrounds+for+Free+Download&sigr=443bJX7Gjvua&sigit=9APdwDzQduqj&sigi=Z2h8Viq61_dF&sign=1Rx0JmN4kQfG&sigt=1Rx0JmN4kQfG";

  const COLD_URL= "https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL= "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL= "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";
   
  // let info = {
  //   city:"Delhi",
  //   feelsLike : 24.84,
  //   temp : 25.08,
  //   tempMin:25,
  //   tempMax: 25.08,
  //   humidity :47,
  //   weather : "Sunny"
  // };
  return (

    // change by gpt for ui

     

    // upto here 
    <div className="infoBox">
      <div className='CardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp >15 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
        <p>Temperatur = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        {/* <p>The Weather Feels Like = {info.feelsLike}&deg;C</p> */}
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}