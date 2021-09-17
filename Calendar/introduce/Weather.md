
# ⛅ Weather

오늘의 날씨정보를 한 눈에 파악하자

# 기술 스택

- HTML
- CSS
- JavaScript

# 기능 설명

> fetch open Weather API

- OpenWeather 홈페이지에서 제공하는 API를 사용하여 Json으로 변환하여 사용

```jsx
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(respone){
        return respone.json()
    }).then(function(data){
        loadWeather(data)
    })
}
```

> Clock API

- new Date() 를 활용한 시간 조회

```jsx
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;
}
```

# Update

> 2021년 9월 1일 리팩토링

- UI 개선
- 날씨 Icon 및 description 추가

> plan

![스크린샷 2021-09-01 21 52 54](https://user-images.githubusercontent.com/79143800/131681754-057f325a-7424-48b9-9559-ef7dd1c21bac.png)
