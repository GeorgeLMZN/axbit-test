import "core-js/stable";
import "regenerator-runtime/runtime";
import './styles/main.scss';
const Controller = require("./controller");
import Router from './router';


const RouterApp = new Router();

class App {
    constructor (elem) {
        this.elem = elem;
    }
    init () {
        const AppController = new Controller (this.elem);
        RouterApp.init();
        AppController.printGreeting(this.elem);
    }
}


const root = document.querySelector('#root');

const newApp = new App (root);

newApp.init();