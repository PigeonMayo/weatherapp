import './Forecast.css'


function Forecast ({weather}){
return <div className="weather-card" >
    
    <h1> {weather.day.avgtemp_c} °C</h1>
    <img src={weather.day.condition.icon} alt={weather.day.condition.text}/>

    <div className='container'>
    <div>{weather.day.condition.text}</div>


    <div>{weather.day.daily_chance_of_rain} %</div>
    
    <div>High: {weather.day.maxtemp_c} °C</div>
    <div>Low: {weather.day.mintemp_c} °C</div>
    </div>
     

</div>    
}


export default Forecast
