import './WeatherList.css'
import Forecast from "./Forecast";

function WeatherList({weatherToday,weatherForecast,weatherHistory}){

    const weatherForecastList = weatherForecast.map((weather) => {
        return <Forecast key={weather.date_epoch} weather = {weather} />
    })

    return <div className='weather-list'>{weatherForecastList}</div>

}

export default WeatherList;