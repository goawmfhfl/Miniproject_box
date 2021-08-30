const $calBody = document.querySelector('.c_body')
const $btnNext = document.querySelector('.next')
const $btnPrev = document.querySelector('.prev')

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
    console.log(`fullDate : ${fullDate}`);
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
            if(i===0 && !startCount && j === firstDay.getDay()){
                startCount = 1;
            }
            if(!startCount){
                trtd +='<td>'
            }
            else{
                trtd += '<td class="day'
                trtd +=(markToday && markToday === countDay + 1) ? ' today" ' : '"'
                trtd += ` data-date="${countDay + 1}">`
            }
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