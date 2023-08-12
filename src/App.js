
import './App.css'
import moment from 'moment'
import { useState } from "react"
import SearchBar from "./components/SearchBar"
import Card from './components/WeatherList'

import {todaysWeather,forecast,history} from './api'


function App(){

    const [weatherToday,setTodaysWeather] = useState([]);
    const [weatherForecast,setForecastWeather] = useState([]);
    const [weatherHistory,setHistoryWeather] = useState([]);

    const handleSubmit = async(location)=>{
        const resultToday = await todaysWeather(location);
        setTodaysWeather(resultToday);
        const resultForecast = await forecast(location);
        setForecastWeather(resultForecast);

        //retrieves the history data and ammends the array 
        const retrieveHistory = await Historydata(location);
        setHistoryWeather(retrieveHistory);
        

        console.log("Today: ",resultToday);
        console.log("Forecast: ",resultForecast);
        console.log("History: ",weatherHistory);

    }

    //an array that appends and returns 7 days worth of data
    const Historydata = async (location) =>{
        const UpdatedHistory = [];

        for(let i = 1; i < 7 ; i++) {

            let HistoryDate = moment().subtract(i,'d').format("YYYY-MM-DD");
            const resultHistory = await history(location,HistoryDate);
            UpdatedHistory.unshift(resultHistory);

        }

        return UpdatedHistory
    }

    return <div className='app-header'>
        <SearchBar onSubmit = {handleSubmit}/>
        <Card  weatherToday = {weatherToday} weatherForecast = {weatherForecast} weatherHistory = {weatherHistory} />
    </div>
}

export default App;