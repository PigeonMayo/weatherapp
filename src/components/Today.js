import './Today.css'

function Today ({weatherToday}){
    return <div className="weather-card" note>
    
    <img src={weatherToday.condition.icon} alt={weatherToday.condition.text} />
    <h3> {weatherToday.temp_c} °C</h3>


    <div className='container'>
    <h5>{weatherToday.condition.text}</h5>


    <div>Chance of Rain: {weatherToday.daily_chance_of_rain} %</div>
    
    <div>High: {weatherToday.maxtemp_c} °C</div>
    <div>Low: {weatherToday.mintemp_c} °C</div>
    </div>
     

</div>  
    
}
    export default Today