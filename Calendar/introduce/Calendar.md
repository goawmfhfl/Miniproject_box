

https://user-images.githubusercontent.com/79143800/131494287-e93c8aab-5cb3-4131-9eb4-b988465ddac2.mov


# ✅  Calendar


간단하게 확인하기 좋은 스마트 Claendar

# Stack

- HTML
- CSS
- JavaScript

# 기능설명

> Update

- init 객체에는 전체적인 날짜에 대한 정보를 얻을 수 있도록 구성
- loadYYMM 함수에는 init객체에서 얻은 날짜 정보를 토대로 하였으며 그렇게 얻은 날짜를 토대로 <tr><td>태그 작성하여 유동적으로 날짜 정보 생성

```jsx
const init = {
    monList,
    today,
    monForChange,
    activeDate,
    getFirstDay,
    getLastDay,

    nextMonth: function(){
    },
    prevMonth: function(){
    },
}

function loadYYMM(fullDate){
    let yy; 
    let mm; 
    let firstDay;
    let lastDay;
    let markToday;
    innerHTML = yy;
    init.monList[mm]
}

loadYYMM(init.today)
```

> Create

- 이중 for문을 활용하여 주의 정보를 표시하는 <tr>태그와 일의 정보를 표시하는 <td>태그 동적으로 생성.

```jsx
for(let i=0; i<6; i++){
        trtd +='<tr>';
        for(let j=0; j<7; j++){
            trtd += '</td>'
            ...
            trtd += '</td>'
        }
        trtd += '</tr>'
    }
    $calBody.innerHTML = trtd;
```

> Mark

1. 오늘 날짜 표시

```jsx
trtd +=(markToday && markToday === countDay + 1) ? ' today" ' : '"'
```

- 삼항연산자를 활용 load한 데이터와 카운팅 된 Day의 정보가 일치할 경우 클래스 명 today 추가
2. 클릭할 때 마다 마크 표시

```jsx
$calBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('day')){
        if(init.activeDate){
            init.activeDate.classList.remove('day-active');
        }
        e.target.classList.add('day-active');
        init.activeDate = e.target;
    }
})
```

- 클릭을 한 곳에 day라는 클래스 명이 있으면 day-active 클래스 추가
- 만약 다른 곳을 클릭 할 경우 기존에 Makr 표시는 제거.

# 아쉬운 점

- 달력에 일정을 저장하는 기능을 만들어 보고싶다
# 🛠 리팩토링 [0831]

> 전체적인 계획

![스크린샷 2021-08-31 19 52 23](https://user-images.githubusercontent.com/79143800/131494458-0968ea3d-e2cc-4448-a8d3-ebb73025791f.png)

> 세부적인 계획

![스크린샷 2021-08-31 19 51 42](https://user-images.githubusercontent.com/79143800/131494477-e8de104c-23f4-4762-b2f7-b5d17232b666.png)

### 수정한 부분

- click시에 HTML태그에 날짜정보 업데이트 되는 로직 변경

# Before

```jsx
$btnNext.addEventListener('click', () =>{
    loadYYMM(init.nextMonth());
    // document.querySelector(".c_date p").innerHTML = init.nextMonth().toDateString()
})
$btnPrev.addEventListener('click', () => {
    loadYYMM(init.prevMonth())
   // document.querySelector(".c_date p").innerHTML = init.prevMonth().toDateString()
});
```

# After

```jsx
init{
...
monList : ['Happy Jan','Cohesion Fed','Beatitude Mar','Ambition Apr','Diligence May','Nice Jun','Victory Jul','Efficient Aug','Joyous Sept','Supreme Out','Self-confidence Nov','Spectacualr Dec'],
...
}    

loadYYMM(fullDate){
...
    document.querySelector(".c_date h1").innerHTML = yy;
    document.querySelector(".c_date p").innerHTML = init.monList[mm]
...
}

```

- 날짜의 정보를 담고 있는 init 객체에 monList를 추가하였고 그 안에는 달이 바뀔 때 마다 동적으로 추가 될 요소들을 추가하였다. (매 달 긍정적인 표현을 더했다 😁 )
- 년도 및 월의 정보가 바뀔 때마다 yy,mm 변수를 HTML요소로 넣어줌으로써 날짜가 유동적으로 변할 수 있게 했다.
