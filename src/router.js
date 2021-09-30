const Controller = require("./controller");

const root = document.querySelector('#root')
const controller = new Controller (root);


module.exports = class Router {
    init () {
        window.addEventListener('hashchange', () => {
           this.checkLocation();
        })
        window.addEventListener('load', (e) => {
            this.checkLocation();
        })
    }
    checkLocation () {
        let hash = window.location.href.split('#')[1];
        if ( hash === 'Weather'){
            controller.printWeather();
        }
        if(hash === 'Time') {
            controller.printTime();
        }
        if(hash === '') {
            controller.printGreeting();
        }
    }
}