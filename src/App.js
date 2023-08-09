
import './App.css'
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
        const resultHistory = await history(location);
        setHistoryWeather(resultHistory);


        console.log("Today: ",resultToday);
        console.log("Forecast: ",resultForecast);
        console.log("History: ",resultHistory);

    }

    return <div className='app-header'>
        <SearchBar onSubmit = {handleSubmit}/>
        <Card  weatherToday = {weatherToday} weatherForecast = {weatherForecast} weatherHistory = {weatherHistory} />
    </div>
}

export default App;