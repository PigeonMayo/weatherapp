import SearchBar from "./components/SearchBar"


function App(){

const handleSubmit = (term)=>{
    console.log("This will search for location ",term)
}

    return <div>
        <SearchBar onSubmit = {handleSubmit}/>
    </div>
}

export default App;