import './Forecast.css'


function Forecast ({weather}){
return <div className="weather-card" note>
    
    <img src={weather.day.condition.icon} alt={weather.day.condition.text} />
    <h3> {weather.day.avgtemp_c} °C</h3>


    <div className='container'>
    <h5>{weather.day.condition.text}</h5>


    <div>Chance of Rain: {weather.day.daily_chance_of_rain} %</div>
    
    <div>High: {weather.day.maxtemp_c} °C</div>
    <div>Low: {weather.day.mintemp_c} °C</div>
    </div>
     

</div>    
}


export default Forecast
