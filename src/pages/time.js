export default function () {
        function clock(){
            const clock = document.querySelector('.clock')
            let date = new Date(),
                   hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
                   minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
                   seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
           if(clock) {
                clock.innerHTML = hours + ':' + minutes + ':' + seconds;
           }
          }
          setInterval(clock, 1000);
          clock();
}
