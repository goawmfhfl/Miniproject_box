const clockContainer = document.querySelector(".top_inner");
const clockTitle = clockContainer.querySelector(".watch");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;
}
function init_time(){
    getTime();
    setInterval(getTime, 1000 );
}

init_time()
