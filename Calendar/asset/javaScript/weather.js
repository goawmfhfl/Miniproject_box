const API_KEY = "6720dd6382b0a7536a9ab1184aed41a1";
const CooDs_Key = "coods";

function getWether(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(respone){
        return respone.json()
    }).then(function(data){
        loadWeather(data)
    })
}

function loadWeather(data){
    const $WeatherTemp = document.querySelector('.weather_temp');
    const $WeatherName = document.querySelector('.weather_name');
    const $weather_icon = document.querySelector('.weather_icon');
    const $WeatherDesc = document.querySelector('.weather_desc');

    let WeatherTemp = data.main.temp; // 현재날씨
    let WeatherName = data.name; // 지역
    let WeatherIcon = data.weather[0].icon; // 아이콘
    let WeatherDesc = data.weather[0].description; // 날씨 텍스트
    $WeatherTemp.textContent = `${WeatherTemp}°`;
    $WeatherName.textContent = `${WeatherName}`;
    $WeatherDesc.textContent = `${WeatherDesc}`;
    $weather_icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${WeatherIcon}@2x.png' class="icon_weather">`
}

function saveCoords(obj){
    localStorage.setItem(CooDs_Key,JSON.stringify(obj))
};

function error(){
    console.log ("cant access information");
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
    console.log(loadedCoords);
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