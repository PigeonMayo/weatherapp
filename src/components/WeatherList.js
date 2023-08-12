import './WeatherList.css'
import Forecast from "./Forecast";
import Today from './Today';
import History from './History';

function WeatherList({weatherToday,weatherForecast,weatherHistory}){

    const weatherForecastList = weatherForecast.map((weather) => {
        return <Forecast key={weather.date_epoch} weather = {weather} />
    })

    const weatherTodayList = (weatherToday) =>{
        
          if (weatherToday.current){
            return <Today  weatherToday = {weatherToday.current}/>
         }
        
        console.log(weatherToday.current);
    }
      
    

    const weatherHistoryList = (weatherHistory) =>{
        
        return <History  weatherHistory = {weatherHistory.forecast}/>
       // <!--<div>{weatherTodayList(weatherToday)}</div> -->

        
    }

    return <div>
        
        <h2>Today</h2>
        <div>{weatherTodayList(weatherToday)}</div> 
        <h2>ForeCast</h2>
        <div className='weather-forecast'>{weatherForecastList}</div>
        <h2>History</h2>
        <div>{weatherHistoryList(weatherHistory)}</div>

    </div>

}

export default WeatherList;

