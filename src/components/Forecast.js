function Forecast ({weather}){
return <div>
    <div>{weather.day.condition.text}</div>

    <img src={weather.day.condition.icon} alt={weather.day.condition.text}/>

    <div>{weather.day.daily_chance_of_rain} %</div>
    
    <div> average temp: {weather.day.avgtemp_c}</div>

    <div>Low: {weather.day.mintemp_c}  High: {weather.day.maxtemp_c} </div>

</div>    
}


export default Forecast
