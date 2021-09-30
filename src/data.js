const axios = require('axios');

module.exports = class Data {
    greetingData () {
        return {
            name: 'Hello !',
            btn1: 'Time',
            btn2:'Weather',
        }
    }
    async weatherData (city) {

                let data = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=6cf475f4c7ee868891dde1b39cd3f0e7`).then((res) => {
                        return {  description: res.data.weather[0].description,
                                  windSpeed: res.data.wind.speed, 
                                  temp: res.data.main.temp,  
                                  weatherIco:'https://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png',
                                  city: city
                                }
                            })

                data = await data;

                return data;       
    }   
}
