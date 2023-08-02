import axios from "axios";
import moment from 'moment'


const todaysWeather = async (location) => {
   const response = await axios.get( 'http://api.weatherapi.com/v1/current.json' ,{
        params:{
            key: "2a5bacf98bcd4765beb122454220406",
            q: location
        }
    });

    console.log(response);
    return response;
};

const forecast = async (location) => {
    const response = await axios.get( 'http://api.weatherapi.com/v1/forecast.json' ,{
         params:{
             key: "2a5bacf98bcd4765beb122454220406",
             q: location,
             days: "3",
         }
     });
 
     console.log(response);
     return response;
 };

 const history = async (location) => {
    const response = await axios.get( 'http://api.weatherapi.com/v1/history.json' ,{
         params:{
             key: "2a5bacf98bcd4765beb122454220406",
             q: location,
             dt: moment().subtract(7,'d').format("YYYY-MM-DD")
         }
     });
 
     console.log(response);
     return response;
 };

export {todaysWeather,forecast,history};

