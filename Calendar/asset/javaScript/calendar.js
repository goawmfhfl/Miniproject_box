
const $calBody = document.querySelector('.c_body');
const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');


const init = {
    monList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayList: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],

    today: new Date(),
    monForChange: new Date().getMonth(), // 4 출력 0부터 1월
    activeDate: new Date(),

    getFirstDay: (yy, mm) => new Date(yy, mm, 1), // Sat May 01 2021 00:00:00 GMT+0900 (대한민국 표준시) 첫째 날
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0), //  Mon May 31 2021 00:00:00 GMT+0900 (대한민국 표준시) 마지막 날

    nextMonth: function () {
        let date = new Date();
        date.setDate(1);
        date.setMonth(++this.monForChange);
        return date;
    },
    prevMonth: function () {
        let date = new Date();
        date.setDate(1);
        date.setMonth(--this.monForChange); 
        return date;
    },
    activeDTag: null,
};


//fullDate = init.today = today: new Date(), // 즉 fullDate = new Date()
function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm); // Sat May 01 2021 00:00:00 GMT+0900 (대한민국 표준시) 첫째 날
    let lastDay = init.getLastDay(yy, mm); // Mon May 31 2021 00:00:00 GMT+0900 (대한민국 표준시) 마지막 날
    let markToday;
    

    // && Boolean and
    
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
        markToday = init.today.getDate();
    }
console.log(markToday);

    document.querySelector(".c_date h1").innerHTML = yy + '년';
    document.querySelector(".c_date p").innerHTML = new Date().toDateString();

    let trtd = '';
    let startCount;
    let countDay = 0;
    
    
    for (let i = 0; i < 6; i++) {
        trtd += '<tr>';

        // td를 생성하자
            
        for (let j = 0; j < 7; j++) { // 0 1 2 3 4 5 6
            // 이 첫번째 if startCount를 만들어준 이유는 말그대로 첫번째 열에서 불필요한 날짜를 제거하기 위함임
            // 1번째 조건 i = 0 즉 첫번째 <tr>
            // 2번째 조건 !startCount false
            // 3번째 조건 j = firstDay.getDay()// 매달 첫번째 요일의 인덱스 값 
            // 즉 첫번쨰 줄에 startcount가 0이면서 매달 첫번째 요일의 인덱스 값과 j값이 일치할 경우 startCount에 1을 추가해준다.

            if (i === 0 && !startCount && j === firstDay.getDay()) {
                startCount = 1;
            }

            // 두번째 줄부터는 새로운 조건문이 실행된다
            // 만약 startCount가 false 라면 공백을 만든다
            if (!startCount) {
                trtd += '<td>'
            }
            // 그게 아니면 class day가 붙은 td들을 만들기 시작한다
            else {
                trtd += '<td class="day';
                trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
                // markToday = init.today.getDate(); 오늘날짜와 추가된 td들의 값이 같으면 today라는 클래스를 추가한다.
                // 이로써 오늘은 7일이니깐 7일에만 mark표시가 된다
                trtd += ` data-date="${countDay + 1}">`;
                // +1 했다는 것 자체가 그냥 +1이 더해진다는 소리지 계속해서 증감된다는 의미는 아니아니야~
            }
            trtd += (startCount) ? ++countDay : '';
            // 만약 startCount 가 = 1 즉 true 라면 countDay에 숫자를 1씩 더해줌
            if (countDay === lastDay.getDate()) {
                startCount = 0;
                //false
            }
            trtd += '</td>';
        }
        trtd += '</tr>';
    }
    $calBody.innerHTML = trtd;
}

loadYYMM(init.today);


$btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
$btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));


$calBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('day')) {
        if (init.activeDTag) {
            init.activeDTag.classList.remove('day-active');
        }
        // 클릭하면 click할 경우 day의 숫자값이 나옴
        e.target.classList.add('day-active');
        init.activeDTag = e.target;
        //아 이부분이 좀 제대로이해가 안가네
    }
});