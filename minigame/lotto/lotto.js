var lotto = [];
const basket = document.querySelector('.basket');

while (lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) === -1) {
    lotto.push(num);
  }
}
lotto.sort((a, b) => {
  return a - b;
});

const balls = `
<li class='ball ball1'>${lotto[0]}</li>
<li class='ball ball2'>${lotto[1]}</li>
<li class='ball ball3'>${lotto[2]}</li>
<li class='ball ball4'>${lotto[3]}</li>
<li class='ball ball5'>${lotto[4]}</li>
<li class='ball ball6'>${lotto[5]}</li>
`;

basket.innerHTML = balls;
