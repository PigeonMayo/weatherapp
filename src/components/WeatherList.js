import './WeatherList.css'
import Forecast from "./Forecast";

function WeatherList({weatherToday,weatherForecast,weatherHistory}){

    const weatherForecastList = weatherForecast.map((weather) => {
        return <Forecast key={weather.date_epoch} weather = {weather} />
    })

    return <div>
        
        <h2>Today</h2>
        <div className='weather-list'>{weatherToday}</div>
        <h2>ForeCast</h2>
        <div className='weather-list'>{weatherForecastList}</div>
    </div>

}

export default WeatherList;