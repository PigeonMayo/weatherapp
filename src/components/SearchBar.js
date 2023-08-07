import './SearchBar.css';
import { useState } from "react";


function SearchBar({onSubmit}){

    const [location,setLocation] = useState('');

    const handleFormSubmit  = (event)=>{
        event.preventDefault();
        onSubmit(location);
        setLocation('');
    }

    const handleChange = (event) => {
        setLocation(event.target.value);
    }
    
    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <h1>Weather App</h1>
            <input placeholder="please enter your address e.g. (Durban)" value ={location} onChange={handleChange}/>
        </form>

    </div>
}

export default SearchBar;