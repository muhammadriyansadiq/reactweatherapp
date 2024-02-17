import { useState } from 'react'

import './App.css'

import clear from './assets/clear.png';
import humidity from './assets/humidity.png';
import wind from './assets/wind.png';
import clouds from './assets/clouds.png';
import drizzle from './assets/drizzle.png';
import mist from './assets/mist.png';
import rain from './assets/rain.png';
import search from './assets/search.png';
import snow from './assets/snow.png';







function App() {
  const [city, setCity] = useState("")
  const [inputval,setinputval] = useState("")
  const [storedata,setStoredata] = useState([])
  var apikey = "f1c9d47429a040b7126a01d3ee7981f5";
  var apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
  console.log(city);
  const cityinput = (e)=>{
setCity(e.target.value)
setinputval(e.target.value)
  } 


  async function checkweather() {
    

    try {
      const response = await fetch(apiurl + city+ `&appid=${apikey}`);
    const data = await response.json()
        console.log([data])
        setinputval("")
        setStoredata([data])
    } catch (error) {
alert("Enter valid city name")
        console.error("An error occurred:", error);
        setinputval("")
    }
}


  return (
    <div className=' w-full h-screen flex flex-col items-center justify-around'>
<h1 className=' text-center text-5xl mt-2 font-bold text-white'>WEATHER APP</h1>
<div className=' h-5/6 border-2 rounded-md main p-3 xs:w-11/12 sm:w-11/12 md:p-8'>

{/* =============input and search btn=============== */}

<div className=' w-full flex justify-center mt-2 flex-col items-center h-full'>

  <input type="text" placeholder='Enter city name' className=' w-9/12 rounded-lg p-3 md:mt-2' onChange={cityinput} value={inputval}/>

  <button className=' bg-sky-700 p-3 ml-2 rounded-lg mt-2 text-white font-bold' onClick={checkweather}>Search</button>


  {storedata?

<div className=' flex flex-col justify-around items-center w-full h-5/6'>

{
storedata.map((data,ind)=>{
let icon;
switch (data.weather[0].main){
case "Clouds":
  icon = <img src={clouds} alt="clouds" className=' w-full h-full'/>
  break;
  case "Drizzle":
  icon = <img src={drizzle} alt="drizzle" className=' w-full h-full'/>
  break;
  case "Humidity":
  icon = <img src={humidity} alt="humidity" className=' w-full h-full'/>
  break;
  case "Rain":
  icon = <img src={rain} alt="Rain" className=' w-full h-full'/>
  break;
  case "Mist":
  icon = <img src={mist} alt='mist' className=' w-full h-full'/>
  break;
  case "Wind":
  icon =<img src={wind} className=' w-full h-full' />
  break;
  case "Snow":
    icon =<img src={snow} className=' w-full h-full' />
    break;

  default:
    icon = <img src={clear} className='  w-full h-full' />
}

  return (
    <>
  <p className=' w-1/2 md:h-2/6 md:w-1/3'>{icon}
  </p>
  <p className=' text-center text-white'>{data.main.temp}°C</p>

  <p className=' text-center text-white'>{data.name}</p>

<div key={ind} className=' w-full flex justify-center items-center'>

  <div className="humidity w-1/2 flex md:justify-end">
    <img src={humidity} alt="humidity" className=' w-2/5 h-2/5 mr-2 ml-1 md:w-1/5 md:h-1/5'/>
    <div className=' text-white'>
    <p>{data.main.humidity}%</p>
    <p>Humidity</p>
    </div>
  </div>

  <div className="wind w-1/2 flex ml-4 md:justify-start">
    <img src={wind} alt="wind" className=' w-2/5 h-2/5 mr-2 ml-1 md:w-1/5 md:h-1/5'/>
    <div className='text-white'>
    <p>{data.wind.speed}Km/hr</p>
    <p className=' text-sm'>Windspeed</p>
    </div>
  </div>

</div>
</>  
)
})
}




</div>

:
""
}


</div>

</div>


    </div>
  )
}

export default App
