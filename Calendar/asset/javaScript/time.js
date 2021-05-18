const clockContainer = document.querySelector(".notice_watch");
const clockTitle = clockContainer.querySelector(".watch");
console.log(clockTitle);
console.log(clockContainer);
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}
function init_time(){
    getTime();
    setInterval(getTime, 1000 );
}

init_time()
