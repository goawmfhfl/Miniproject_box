

const now_temp = document.querySelector(".temp_now");
const now_place = document.querySelector(".api_place");

const API_KEY = "6720dd6382b0a7536a9ab1184aed41a1";
const CooDs_Key = "coods";

function getWether(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(respone){
        return respone.json()
    }).then(function(JSON){
    console.log(JSON);
    const temp_now = JSON.main.temp;
    const place = JSON.name;
    now_temp.innerHTML = temp_now;
    now_place.innerHTML = place;
    })
}

function saveCoords(obj){
    localStorage.setItem(CooDs_Key,JSON.stringify(obj))
}; 

function error(){
    console.log ("cant access information")

}
function Access(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coodsObj = {
        latitude,
        longitude
    }
    saveCoords(coodsObj);
    getWether(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(Access,error);
    
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(CooDs_Key);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWether(parseCoords.latitude,parseCoords.longitude);
    }
}

function init_Coods(){
    loadCoords();
}

init_Coods()
