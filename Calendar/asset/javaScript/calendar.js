const $calBody = document.querySelector('.c_body');
const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');


const init = {
    monList : ['Happy Jan','Cohesion Fed','Beatitude Mar','Ambition Apr','Diligence May','Nice Jun','Victory Jul','Efficient Aug','Joyous Sept','Supreme Out','Self-confidence Nov','Spectacualr Dec'],
    today : new Date(), 
    monForChange: new Date().getMonth(),
    activeDate: new Date,
    getFirstDay:(yy,mm) => new Date(yy, mm,1),
    getLastDay:(yy,mm) => new Date(yy, mm + 1 ,0),

    nextMonth: function(){
        let date = new Date();
        date.setDate(1);
        /* 첫 달의 값을 입력한다. */
        date.setMonth(++this.monForChange)
        return date
    },
    prevMonth: function(){
        let date = new Date();
        date.setDate(1);
        date.setMonth(--this.monForChange)
        return date
    },
    activeDate: null
}
function loadYYMM(fullDate){
    let yy = fullDate.getFullYear(); 
    let mm = fullDate.getMonth()
    let firstDay = init.getFirstDay(yy,mm);
    let lastDay = init.getLastDay(yy,mm)
    let markToday;

    if(mm === init.today.getMonth() && yy === init.today.getFullYear()){
        markToday = init.today.getDate();
    };

    
    document.querySelector(".c_date h1").innerHTML = yy;
    document.querySelector(".c_date p").innerHTML = init.monList[mm]

    

    
    let trtd = ''
    let startCount;
    let countDay = 0;
    for(let i=0; i<6; i++){
        trtd +='<tr>';
        for(let j=0; j<7; j++){
            // startCount가 undefined 일 경우
            // 이번달을 제외한 나머지의 날들의 td를 표시한다.
            // 따라서 ✅ 2번의 if문이 실행된다
            if(i===0 && !startCount && j === firstDay.getDay()){
                startCount = 1;
            }

            // ✅ 2번 if문은 해당 달에 포함되지 않은 요일들을 의미한다.
            // ✅ 3번 3번의 else문을 거칠 경우에는 해당 달에 의미하는 요소들에 class = "day"속성이 더해진다
            // markToday를 거쳐서 오늘의 날짜인 경우에는 class = "day today"로 설정이 된다. 
            // 또한 data-date="${countDay + 1}"를 통해서 생성되는 요소들의 data값을 정해준다.
            if(!startCount){
                trtd +='<td>'
            }
            else{
                trtd += '<td class="day'
                trtd +=(markToday && markToday === countDay + 1) ? ' today" ' : '"'
                trtd += ` data-date="${countDay + 1}">`
            }
            // startCount가 여전히 0일 경우에는 countDay는 카운팅 되지 않는다.
            trtd += (startCount) ? ++countDay : '';
            if(countDay === lastDay.getDate()){
                startCount = 0;
            }
            trtd += '</td>'
        }
        trtd += '</tr>'
    }
    $calBody.innerHTML = trtd;
}
loadYYMM(init.today)

// 'click'을 누를 경우 다음달의 정보가 위의 순서에 따라서 자동으로 생성
$btnNext.addEventListener('click', ()=>{
    loadYYMM(init.nextMonth());
})

$btnPrev.addEventListener('click',()=>{
    loadYYMM(init.prevMonth());
})

$calBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('day')){
        if(init.activeDate){
            init.activeDate.classList.remove('day-active');
        }
        e.target.classList.add('day-active');
        init.activeDate = e.target;
    }
})