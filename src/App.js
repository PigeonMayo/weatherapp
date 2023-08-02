import SearchBar from "./components/SearchBar"
import todaysWeather from './api'


function App(){

    const handleSubmit = (location)=>{
        console.log("This will search for location ",location)
        todaysWeather(location)
    }

    return <div>
        <SearchBar onSubmit = {handleSubmit}/>
    </div>
}

export default App;