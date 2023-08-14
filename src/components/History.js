import './Forecast.css'


function History ({weather}){
return <div className="weather-card" >
    <h3> {weather.date} </h3>

    <img src={weather.day.condition.icon} alt={weather.day.condition.text} />
    <h3> {weather.day.avgtemp_c} °C</h3>
    <div className='container'>
    <h5>{weather.day.condition.text}</h5>
    <div>High: {weather.day.maxtemp_c} °C</div>
    <div>Low: {weather.day.mintemp_c} °C</div>
    </div>

</div>    
}


export default History
