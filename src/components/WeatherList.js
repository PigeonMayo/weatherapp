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
        
    }
      
    const weatherHistoryList = weatherHistory.map((weather) => {
        
        return <History  key={weather.date_epoch} weather = {weather} />

    }) 
        


    return <div>
        
        { weatherToday.current &&
        <div>
            <h2 style={{textAlign: 'center'}}>Today</h2>
            <div className='weather-today' >{weatherTodayList(weatherToday)}</div> 
        </div>

        }

        { weatherForecast.length >0  &&
            <div>
            <h2 style={{textAlign: 'center'}}>ForeCast</h2>
            <div className='weather-forecast'>{weatherForecastList}</div>
            </div>
        }

        { weatherHistory.length > 0 &&
            <div>
                <h2 style={{textAlign: 'center'}}>History</h2>
                <div className='weather-history' >{weatherHistoryList}</div>
            </div>
        }

    </div>

}

export default WeatherList;

