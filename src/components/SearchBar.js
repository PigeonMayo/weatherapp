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
    
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value ={location} onChange={handleChange}/>
        </form>

    </div>
}

export default SearchBar;