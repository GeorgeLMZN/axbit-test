export default function () {
    const Controller = require("../controller");
    const root = document.querySelector('#root');
    const controller = new Controller (root);

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let city = form.querySelector('input').value;
        controller.printResponseWeather(city);
        form.querySelector('input').value = '';
    });
}