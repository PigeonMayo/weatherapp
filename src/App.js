import SearchBar from "./components/SearchBar"
import {todaysWeather,forecast,history} from './api'


function App(){

    const handleSubmit = (location)=>{
        console.log("This will search for location ",location);
        todaysWeather(location);
        forecast(location);
        history(location);
    }

    return <div>
        <SearchBar onSubmit = {handleSubmit}/>
    </div>
}

export default App;