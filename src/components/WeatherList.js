import './WeatherList.css'
import Forecast from "./Forecast";
import Today from './Today';

function WeatherList({weatherToday,weatherForecast,weatherHistory}){

    const weatherForecastList = weatherForecast.map((weather) => {
        return <Forecast key={weather.date_epoch} weather = {weather} />
    })

    const weatherTodayList = (weatherToday) =>{
        if (weatherToday.items < 0){
            return <Today  weatherToday = {weatherToday.current}/>
        }
      
    }

    return <div>
        
        <h2>Today</h2>
        <div>{weatherTodayList(weatherToday)}</div>
        <h2>ForeCast</h2>
        <div className='weather-forecast'>{weatherForecastList}</div>
    </div>

}

export default WeatherList;