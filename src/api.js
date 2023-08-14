import axios from "axios";

//Today
const todaysWeather = async (location) => {
   const response = await axios.get( 'http://api.weatherapi.com/v1/current.json' ,{
        params:{
            key: "2a5bacf98bcd4765beb122454220406",
            q: location
        }
    });

    //console.log(response);
    return response.data;
};

//Tomorrow
const forecast = async (location) => {
    const response = await axios.get( 'http://api.weatherapi.com/v1/forecast.json' ,{
         params:{
             key: "2a5bacf98bcd4765beb122454220406",
             q: location,
             days: "3",
         }
     });
 
     //console.log(response);
     return response.data.forecast.forecastday;
 };

 //Yesterday
 const history = async (location,HistoryDate) => {
    const response = await axios.get( 'http://api.weatherapi.com/v1/history.json' ,{
         params:{
             key: "2a5bacf98bcd4765beb122454220406",
             q: location,
             dt: HistoryDate
         }
     });
 
     console.log( 'Check here: ' ,response);
     return response.data.forecast.forecastday;
 };

export {todaysWeather,forecast,history};



