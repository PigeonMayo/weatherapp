// 1) import react and rect dom libraries
import React from 'react';
import  ReactDOM  from "react-dom/client";
import App from "./App"
import todaysWeather from "./api"

todaysWeather();
//2) get a reference to the div with ID root
const el  = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//5) show component on the screen
root.render(<App/>)