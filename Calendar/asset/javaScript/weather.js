const CooDs_Key = 'coods'
const API_KEY = '6720dd6382b0a7536a9ab1184aed41a1'


function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(respone){
        return respone.json()
    }).then(function(data){
        loadWeather(data)
    })
}

function loadWeather(data){
    console.log(data);
    const $weatherTemp = document.querySelector('.weather_temp');
    const $weatherName = document.querySelector('.weather_name');
    const $weather_icon = document.querySelector('.weather_icon');
    const $wether_desc = document.querySelector('.weather_desc')

    let weatherTemp = data.main.temp;
    let weatherName = data.name;
    let weatherIcon = data.weather[0].icon;
    let weatherDesc = data.weather[0].description;

    $weatherTemp.textContent = `${weatherTemp}`
    $weatherName.textContent = `${weatherName}`
    $wether_desc.textContent = `${weatherDesc}`
    $weather_icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}@2x.png' class="icon_weather">`
}


function saveCoords(obj){
    localStorage.setItem(CooDs_Key,JSON.stringify(obj))
}

function error(){
    console.log('error');
}

function access(position){
    console.log('access');
    console.log(`position : ${position}`);
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    const coordsObj ={
        latitude,
        longitude
    }
    saveCoords(coordsObj)
    getWeather(latitude,longitude)
}

function askForCoords(){
    console.log('askFroCoords');
    navigator.geolocation.getCurrentPosition(access,error)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(CooDs_Key)
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude,parseCoords.longitude)
    }
}

function init_Coods(){
    loadCoords()
}

init_Coods()