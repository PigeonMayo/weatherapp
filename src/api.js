import axios from "axios";

const todaysWeather = async (location) => {
   const response = await axios.get( 'http://api.weatherapi.com/v1/forecast.json' ,{
        params:{
            key: "2a5bacf98bcd4765beb122454220406",
            q: location,
            days: "3",
            dt: moment().subtract(7,'d').format("YYYY-MM-DD")
        }
    });

    console.log(response);
    return response;
};

export default todaysWeather;

