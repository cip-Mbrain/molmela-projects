const check = document.querySelector('#check');
const inputValue = document.querySelector('#input');
const message = document.querySelector('.message');
const reload = document.querySelector('#reload');
const myScore = document.querySelector('.score');

// let number = 10;
let score = 6;
check.addEventListener('click', function () {
  const guess = Number(inputValue.value);

  if (!guess) {
    displayMessage('Not a Number');
  } else if (guess === randNum) {
    displayMessage('🎉Correct Guess!!');
    message.classList.add('correct');
  } else if (guess > randNum) {
    if (score > 1) {
      displayMessage('Guess to High');
      score--;
      myScore.textContent = score;
    } else {
      displayMessage(`you've lost try again`);
      myScore.textContent = 0;
      message.classList.add('wrong');
    }
  } else if (guess < randNum) {
    if (score > 1) {
      displayMessage('Guess to low');
      score--;
      myScore.textContent = score;
    } else {
      displayMessage(`you've lost try again`);
      myScore.textContent = 0;
      message.classList.add('wrong');
    }
  }
});

const randNum = Math.trunc(Math.random() * 100) + 1;

const displayMessage = (inputMessage) => {
  message.textContent = inputMessage;
};
