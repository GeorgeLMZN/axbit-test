const render = require("./render");
const weatherTemplate = require("./tempates/weather.handlebars");
const timeTemplate = require("./tempates/time.handlebars");
const greetingTemplate =  require("./tempates/default.handlebars");
const responseWeatherTemplate = require("./tempates/weatherResult.handlebars");

const timer = require("./pages/time");
const weather = require("./pages/weather");

const Data = require("./data");
const data = new Data ();

const earthIcon = require('./img/earth.svg');

module.exports = class Controller {
    constructor (root) {
        this.root = root;
    }
     printGreeting () {
        render.default( this.root, greetingTemplate({name: data.greetingData().name, btn1: data.greetingData().btn1, btn2: data.greetingData().btn2}));
     }
     printWeather () {
        render.default(this.root, weatherTemplate({img: earthIcon}));
        weather.default(); 
     }
     printResponseWeather (city) {
        const root = document.querySelector('.weather-results');
        data.weatherData(city).then(result =>  render.default(root, responseWeatherTemplate(result)));
     }
     printTime () {
        render.default(root, timeTemplate());
        timer.default();
     }

}