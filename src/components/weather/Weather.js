import React, {useState} from 'react';
import './Weather.css'

 const API_key = {
    key: "0805aaea473778b55a5cf4a358409421",
    base: "https://api.openweathermap.org/data/2.5/"
 }

function Weather(){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


  //function takes in the query and gets the result from the api
    const search = event =>{
        if (event.key === "Enter"){
      
            fetch(`${API_key.base}weather?q=${query}&units=metric&APPID=${API_key.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }


    const dateBuilder = (data) => {
        //data = new Date()
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[data.getDay()];
        let date = (String(new window.Date())).slice(3,15);
        return `${day} ${date}`
    }


    return(     
                        //change background color depending on the weather
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 21) ? 'weather-app warm' : 'weather-app') : 'weather-app'}>
            <main>
                <div className="search-box">                                                                                           
                <input type="text" className="search-bar" placeholder="Search" onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={search}/>
                </div>
                {/* if-else: checking if user searched a query */}
                {(typeof weather.main != "undefined") ? ( 
                <div>
                    <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>

                    </div>

                    <div className="weather-box">
                    <div className="temp">
                        <div className="temp-child">
                        {Math.round(weather.main.temp)}°C 
                        </div>
                        <div className="temp-child">
                        {Math.round((weather.main.temp * (9/5)) + 32)}°F
                        </div>
                    </div>
                    <div className="weather">
                        {weather.weather[0].description}
                    </div>
                    </div>
                </div>
                ) : ('')}
            </main>
        </div>        
    );
  }


export default Weather;